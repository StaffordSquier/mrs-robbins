import { createServiceClient, isSupabaseConfigured } from './supabase';

export interface ErrorLogEntry {
  errorType: string;
  severity?: 'info' | 'warning' | 'error' | 'critical';
  contentId?: string;
  contentType?: string;
  operation?: string;
  errorMessage: string;
  errorStack?: string;
  errorData?: Record<string, unknown>;
}

/**
 * Log errors to Supabase for production debugging
 * This allows us to see what's failing in Vercel without accessing function logs
 */
export async function logError(entry: ErrorLogEntry): Promise<void> {
  try {
    // Also log to console for immediate visibility
    console.error(`❌ [ERROR_LOG] ${entry.errorType}/${entry.operation}:`, entry.errorMessage);
    if (entry.errorStack) {
      console.error('Stack:', entry.errorStack);
    }
    if (entry.errorData) {
      console.error('Data:', entry.errorData);
    }

    // Skip database logging if Supabase is not configured
    if (!isSupabaseConfigured) {
      console.warn('⚠️  [ERROR_LOG] Supabase not configured, skipping database error logging');
      return;
    }

    const supabase = createServiceClient();

    const logEntry = {
      error_type: entry.errorType,
      severity: entry.severity || 'error',
      content_id: entry.contentId || null,
      content_type: entry.contentType || null,
      operation: entry.operation || null,
      error_message: entry.errorMessage,
      error_stack: entry.errorStack || null,
      error_data: entry.errorData ? JSON.stringify(entry.errorData) : null,
      environment: process.env.VERCEL_ENV || 'development',
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (supabase as any)
      .from('error_logs')
      .insert(logEntry);

    if (error) {
      console.error('❌ [ERROR_LOG] Failed to write error to database:', error);
    } else {
      console.log(`✅ [ERROR_LOG] Error logged to database for ${entry.errorType}/${entry.operation}`);
    }
  } catch (err) {
    // Don't throw - we don't want error logging to break the app
    console.error('❌ [ERROR_LOG] Exception while logging error:', err);
  }
}

/**
 * Log info messages to Supabase
 */
export async function logInfo(
  errorType: string,
  operation: string,
  message: string,
  data?: Record<string, unknown>
): Promise<void> {
  await logError({
    errorType,
    severity: 'info',
    operation,
    errorMessage: message,
    errorData: data,
  });
}
