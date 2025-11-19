'use client';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Navigation from '@/components/Navigation';

interface ErrorLog {
  id: string;
  created_at: string;
  error_type: string;
  severity: string;
  content_id: string | null;
  content_type: string | null;
  operation: string | null;
  error_message: string;
  error_stack: string | null;
  error_data: any;
  environment: string;
}

export default function ErrorLogsPage() {
  const [errorLogs, setErrorLogs] = useState<ErrorLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'error' | 'warning'>('all');
  const supabase = createClientComponentClient();

  useEffect(() => {
    loadErrorLogs();
  }, [filter]);

  async function loadErrorLogs() {
    setLoading(true);
    try {
      let query = supabase
        .from('error_logs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      if (filter !== 'all') {
        query = query.eq('severity', filter);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error loading logs:', error);
        return;
      }

      setErrorLogs(data as ErrorLog[] || []);
    } catch (err) {
      console.error('Failed to load error logs:', err);
    } finally {
      setLoading(false);
    }
  }

  function getSeverityColor(severity: string) {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'error':
        return 'bg-orange-100 text-orange-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      case 'info':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Error Logs</h1>
          <p className="mt-2 text-gray-600">
            Production error tracking for cataloging and other services
          </p>
        </div>

        {/* Filter */}
        <div className="mb-6 flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-md ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('error')}
            className={`px-4 py-2 rounded-md ${
              filter === 'error'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            Errors Only
          </button>
          <button
            onClick={() => setFilter('warning')}
            className={`px-4 py-2 rounded-md ${
              filter === 'warning'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            Warnings
          </button>
          <button
            onClick={loadErrorLogs}
            className="ml-auto px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          >
            Refresh
          </button>
        </div>

        {/* Error Logs Table */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
            <p className="mt-2 text-gray-600">Loading error logs...</p>
          </div>
        ) : errorLogs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-600">No error logs found</p>
            <p className="text-sm text-gray-500 mt-2">
              {filter !== 'all'
                ? `No ${filter} level logs found`
                : 'Error logs will appear here when errors occur'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {errorLogs.map((log) => (
              <div
                key={log.id}
                className="bg-white rounded-lg shadow p-4 border-l-4 border-red-500"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(
                          log.severity
                        )}`}
                      >
                        {log.severity.toUpperCase()}
                      </span>
                      <span className="text-xs text-gray-500">
                        {log.error_type}
                      </span>
                      {log.operation && (
                        <span className="text-xs text-gray-500">
                          / {log.operation}
                        </span>
                      )}
                      <span className="text-xs text-gray-400 ml-auto">
                        {new Date(log.created_at).toLocaleString()}
                      </span>
                    </div>

                    <p className="text-gray-900 font-medium mb-2">
                      {log.error_message}
                    </p>

                    {log.content_id && (
                      <p className="text-xs text-gray-500 mb-2">
                        Content ID: {log.content_id}
                        {log.content_type && ` (${log.content_type})`}
                      </p>
                    )}

                    {log.error_data && (
                      <details className="mt-2">
                        <summary className="text-xs text-blue-600 cursor-pointer hover:text-blue-700">
                          Show error data
                        </summary>
                        <pre className="mt-2 p-2 bg-gray-50 rounded text-xs overflow-x-auto">
                          {JSON.stringify(
                            typeof log.error_data === 'string'
                              ? JSON.parse(log.error_data)
                              : log.error_data,
                            null,
                            2
                          )}
                        </pre>
                      </details>
                    )}

                    {log.error_stack && (
                      <details className="mt-2">
                        <summary className="text-xs text-blue-600 cursor-pointer hover:text-blue-700">
                          Show stack trace
                        </summary>
                        <pre className="mt-2 p-2 bg-gray-50 rounded text-xs overflow-x-auto whitespace-pre-wrap">
                          {log.error_stack}
                        </pre>
                      </details>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
