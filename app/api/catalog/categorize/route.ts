import { NextRequest, NextResponse } from 'next/server';
import { catalogingService } from '@/lib/services/cataloging';
import { eventBus, EVENTS, ContentCatalogedEvent } from '@/lib/events';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { contentId, content, contentType, vocabularySetId } = body;

    if (!contentId || !content) {
      return NextResponse.json(
        { error: 'contentId and content are required' },
        { status: 400 }
      );
    }

    // Categorize the content
    const result = await catalogingService.categorize(
      contentId,
      content,
      contentType || 'thought_blob',
      vocabularySetId
    );

    // Emit cataloged event
    const catalogedEvent: ContentCatalogedEvent = {
      contentId: result.contentId,
      contentType: contentType || 'thought_blob',
      terms: result.terms,
      embeddingGenerated: result.embeddingGenerated,
    };

    await eventBus.emit(EVENTS.CONTENT_CATALOGED, catalogedEvent);

    return NextResponse.json({
      contentId: result.contentId,
      terms: result.terms,
      embedding: result.embeddingGenerated,
    });
  } catch (error) {
    console.error('Categorization error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
