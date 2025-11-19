/**
 * Event System Initialization
 * Registers event listeners for cellular architecture
 * Import this in app startup to wire up the event system
 */

import { eventBus, EVENTS, ContentCreatedEvent } from './events';
import { catalogingService } from './services/cataloging';
import { logError, logInfo } from './error-logger';

let initialized = false;

export function initializeEventListeners() {
  if (initialized) {
    console.log('🔷 [INIT_EVENTS] Event listeners already initialized, skipping');
    return; // Prevent double initialization
  }

  console.log('🔷 [INIT_EVENTS] Initializing event listeners...');

  // Register cataloging service to auto-catalog new content
  eventBus.on(EVENTS.CONTENT_CREATED, async (data: ContentCreatedEvent) => {
    try {
      console.log(`🔷 [CATALOGING] Starting auto-cataloging for content: ${data.contentId}`);
      console.log(`🔷 [CATALOGING] Content preview: ${data.content.substring(0, 100)}...`);

      // Log that we're starting cataloging
      await logInfo(
        'cataloging',
        'content_created_event',
        `Starting cataloging for ${data.contentId}`,
        { contentType: data.contentType, contentLength: data.content.length }
      );

      await catalogingService.categorize(
        data.contentId,
        data.content,
        data.contentType,
        data.vocabularySetId
      );

      console.log(`✅ [CATALOGING] Successfully cataloged content: ${data.contentId}`);

      // Log success
      await logInfo(
        'cataloging',
        'content_cataloged',
        `Successfully cataloged ${data.contentId}`,
        { contentId: data.contentId }
      );
    } catch (error) {
      console.error(`❌ [CATALOGING] Error auto-cataloging content ${data.contentId}:`, error);

      // Log the error to database for production debugging
      await logError({
        errorType: 'cataloging',
        severity: 'error',
        contentId: data.contentId,
        contentType: data.contentType,
        operation: 'auto_catalog_on_create',
        errorMessage: error instanceof Error ? error.message : String(error),
        errorStack: error instanceof Error ? error.stack : undefined,
        errorData: {
          contentLength: data.content.length,
          contentPreview: data.content.substring(0, 200),
          vocabularySetId: data.vocabularySetId,
        },
      });

      // Don't throw - we don't want cataloging failures to break content creation
    }
  });

  // Log cataloged events
  eventBus.on(EVENTS.CONTENT_CATALOGED, async (data) => {
    console.log(`Content cataloged: ${data.contentId} with ${data.terms.length} terms`);
  });

  // Log embedding generation
  eventBus.on(EVENTS.EMBEDDING_GENERATED, async (data) => {
    console.log(`Embedding generated for: ${data.contentId}`);
  });

  initialized = true;
  console.log('✅ [INIT_EVENTS] Event listeners initialized successfully');
}

// Auto-initialize in Next.js API routes
if (typeof window === 'undefined') {
  // Server-side only
  initializeEventListeners();
}
