import React from 'react';
import ReactMarkdown from 'react-markdown';

interface ResultsDisplayProps {
  content: string;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ content }) => {
  return (
    <div className="h-full flex flex-col">
       <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-800">
        <h2 className="text-2xl font-bold text-white flex items-center">
          <svg className="w-6 h-6 mr-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Architecture Blueprint
        </h2>
        <div className="flex space-x-2">
           <span className="px-3 py-1 rounded-md bg-slate-800 text-xs text-slate-400 border border-slate-700">Markdown Generated</span>
        </div>
      </div>

      <div className="prose prose-invert prose-slate max-w-none overflow-y-auto pr-2 custom-scrollbar flex-grow">
        <ReactMarkdown
          components={{
            h1: ({node, ...props}) => <h1 className="text-2xl font-bold text-white mb-4 mt-6 border-b border-slate-800 pb-2" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-xl font-semibold text-indigo-300 mb-3 mt-8" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-lg font-medium text-slate-200 mb-2 mt-4" {...props} />,
            p: ({node, ...props}) => <p className="text-slate-300 leading-relaxed mb-4" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-2 mb-6 text-slate-300" {...props} />,
            li: ({node, ...props}) => <li className="marker:text-indigo-500" {...props} />,
            strong: ({node, ...props}) => <strong className="text-white font-semibold" {...props} />,
            code: ({node, inline, className, children, ...props}: any) => {
              const match = /language-(\w+)/.exec(className || '')
              return !inline ? (
                <div className="relative group my-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  <pre className="relative bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm shadow-xl">
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                </div>
              ) : (
                <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-sm" {...props}>
                  {children}
                </code>
              )
            }
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};