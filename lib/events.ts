// Simple event emitter for inter-component communication
// Enables cellular architecture where components don't directly depend on each other

type EventHandler = (data: any) => Promise<void> | void;

class EventBus {
  private handlers: Map<string, EventHandler[]> = new Map();

  /**
   * Register an event handler
   */
  on(event: string, handler: EventHandler) {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, []);
    }
    this.handlers.get(event)!.push(handler);
  }

  /**
   * Emit an event to all registered handlers
   * Handlers are called in parallel
   */
  async emit(event: string, data: any) {
    const handlers = this.handlers.get(event) || [];

    if (handlers.length === 0) {
      console.warn(`No handlers registered for event: ${event}`);
      return;
    }

    try {
      await Promise.all(handlers.map(h => h(data)));
    } catch (error) {
      console.error(`Error emitting event ${event}:`, error);
      throw error;
    }
  }

  /**
   * Remove all handlers for an event
   */
  off(event: string) {
    this.handlers.delete(event);
  }

  /**
   * Remove a specific handler for an event
   */
  removeHandler(event: string, handler: EventHandler) {
    const handlers = this.handlers.get(event);
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index > -1) {
        handlers.splice(index, 1);
      }
    }
  }
}

// Singleton event bus instance
export const eventBus = new EventBus();

// Event types
export const EVENTS = {
  // Content lifecycle events
  CONTENT_CREATED: 'content:created',
  CONTENT_UPDATED: 'content:updated',
  CONTENT_DELETED: 'content:deleted',

  // Cataloging events
  CONTENT_CATALOGED: 'content:cataloged',
  EMBEDDING_GENERATED: 'embedding:generated',

  // Voice recording events
  VOICE_RECORDED: 'voice:recorded',
  VOICE_TRANSCRIBED: 'voice:transcribed',

  // Project events
  PROJECT_CREATED: 'project:created',
  PROJECT_UPDATED: 'project:updated',
} as const;

// Type for event data
export interface ContentCreatedEvent {
  contentId: string;
  content: string;
  contentType: 'thought_blob' | 'voice_recording';
  projectId: string;
  userId: string;
  vocabularySetId?: string;
}

export interface ContentCatalogedEvent {
  contentId: string;
  contentType: string;
  terms: Array<{
    termId: string;
    term: string;
    confidence: number;
  }>;
  embeddingGenerated: boolean;
}

export interface EmbeddingGeneratedEvent {
  contentId: string;
  contentType: string;
  embeddingId: string;
}
