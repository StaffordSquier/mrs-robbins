/**
 * Event System Initialization
 * Registers event listeners for cellular architecture
 * Import this in app startup to wire up the event system
 */

import { eventBus, EVENTS, ContentCreatedEvent } from './events';
import { catalogingService } from './services/cataloging';

let initialized = false;

export function initializeEventListeners() {
  if (initialized) {
    return; // Prevent double initialization
  }

  console.log('Initializing event listeners...');

  // Register cataloging service to auto-catalog new content
  eventBus.on(EVENTS.CONTENT_CREATED, async (data: ContentCreatedEvent) => {
    try {
      console.log(`Auto-cataloging content: ${data.contentId}`);

      await catalogingService.categorize(
        data.contentId,
        data.content,
        data.contentType,
        data.vocabularySetId
      );

      console.log(`Successfully cataloged content: ${data.contentId}`);
    } catch (error) {
      console.error(`Error auto-cataloging content ${data.contentId}:`, error);
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
  console.log('Event listeners initialized');
}

// Auto-initialize in Next.js API routes
if (typeof window === 'undefined') {
  // Server-side only
  initializeEventListeners();
}
