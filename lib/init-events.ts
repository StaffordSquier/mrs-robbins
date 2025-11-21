/**
 * Event System Initialization
 * Registers event listeners for cellular architecture
 * Import this in app startup to wire up the event system
 */

import { eventBus, EVENTS, ContentCreatedEvent, ContentCatalogedEvent, EmbeddingGeneratedEvent } from './events';
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
  eventBus.on(EVENTS.CONTENT_CREATED, async (data) => {
    const eventData = data as ContentCreatedEvent;
    try {
      console.log(`🔷 [CATALOGING] Starting auto-cataloging for content: ${eventData.contentId}`);
      console.log(`🔷 [CATALOGING] Content preview: ${eventData.content.substring(0, 100)}...`);

      // Log that we're starting cataloging
      await logInfo(
        'cataloging',
        'content_created_event',
        `Starting cataloging for ${eventData.contentId}`,
        { contentType: eventData.contentType, contentLength: eventData.content.length }
      );

      await catalogingService.categorize(
        eventData.contentId,
        eventData.content,
        eventData.contentType,
        eventData.vocabularySetId
      );

      console.log(`✅ [CATALOGING] Successfully cataloged content: ${eventData.contentId}`);

      // Log success
      await logInfo(
        'cataloging',
        'content_cataloged',
        `Successfully cataloged ${eventData.contentId}`,
        { contentId: eventData.contentId }
      );
    } catch (error) {
      console.error(`❌ [CATALOGING] Error auto-cataloging content ${eventData.contentId}:`, error);

      // Log the error to database for production debugging
      await logError({
        errorType: 'cataloging',
        severity: 'error',
        contentId: eventData.contentId,
        contentType: eventData.contentType,
        operation: 'auto_catalog_on_create',
        errorMessage: error instanceof Error ? error.message : String(error),
        errorStack: error instanceof Error ? error.stack : undefined,
        errorData: {
          contentLength: eventData.content.length,
          contentPreview: eventData.content.substring(0, 200),
          vocabularySetId: eventData.vocabularySetId,
        },
      });

      // Don't throw - we don't want cataloging failures to break content creation
    }
  });

  // Log cataloged events
  eventBus.on(EVENTS.CONTENT_CATALOGED, async (data) => {
    const eventData = data as ContentCatalogedEvent;
    console.log(`Content cataloged: ${eventData.contentId} with ${eventData.terms.length} terms`);
  });

  // Log embedding generation
  eventBus.on(EVENTS.EMBEDDING_GENERATED, async (data) => {
    const eventData = data as EmbeddingGeneratedEvent;
    console.log(`Embedding generated for: ${eventData.contentId}`);
  });

  initialized = true;
  console.log('✅ [INIT_EVENTS] Event listeners initialized successfully');
}

// Auto-initialize in Next.js API routes
if (typeof window === 'undefined') {
  // Server-side only
  initializeEventListeners();
}
