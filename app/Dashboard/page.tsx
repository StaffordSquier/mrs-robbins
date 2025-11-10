'use client';

import Link from 'next/link';

export default function Dashboard() {
  const tools = [
    {
      title: "Mrs. Robbins Conversation",
      description: "Main conversation interface with voice controls. Start organizing your thoughts through dialectical collaboration.",
      href: "/",
      status: "✅ Working"
    },
    {
      title: "Batch Evaluator",
      description: "Test multiple voice variables across different baseline texts. Generates statistical analysis and visualizations.",
      href: "/batch-evaluator",
      status: "✅ Working"
    },
    {
      title: "Avatar Tuner",
      description: "Configure and test voice avatars with parametric controls and exemplar text samples.",
      href: "/avatar-tuner",
      status: "❌ Needs Rebuild"
    },
    {
      title: "Avatar Evaluator",
      description: "Evaluate and compare different avatar configurations.",
      href: "/avatar-evaluator",
      status: "❌ Needs Rebuild"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F7FAFC] p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-[#2B2B2B] mb-4">
            Mrs. Robbins Dashboard
          </h1>
          <p className="text-lg text-[#4A5568]">
            Voice tuning and evaluation tools for cognitive acceleration
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="block bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-semibold text-[#2B2B2B]">
                  {tool.title}
                </h2>
                <span className="text-sm text-[#4A5568] whitespace-nowrap ml-4">
                  {tool.status}
                </span>
              </div>
              <p className="text-[#4A5568] leading-relaxed">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-sm text-[#4A5568] space-y-2">
            <p>
              <strong>Environment:</strong> {process.env.NODE_ENV === 'production' ? 'Production (Vercel)' : 'Development (Local)'}
            </p>
            <p>
              <strong>Repository:</strong>{' '}
              <a 
                href="https://github.com/StaffordSquier/mrs-robbins" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2C7A7B] hover:underline"
              >
                github.com/StaffordSquier/mrs-robbins
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}