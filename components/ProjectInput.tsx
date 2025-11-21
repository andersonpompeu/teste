import React from 'react';

interface ProjectInputProps {
  value: string;
  onChange: (val: string) => void;
  onGenerate: () => void;
  loading: boolean;
  activeColor: string;
}

export const ProjectInput: React.FC<ProjectInputProps> = ({ value, onChange, onGenerate, loading, activeColor }) => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g., A real-time dashboard for tracking crypto prices using WebSockets, with a dark mode toggle and user authentication..."
          className="w-full h-40 bg-slate-900 border border-slate-700 rounded-xl p-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none font-light leading-relaxed"
        />
        <div className="absolute bottom-4 right-4 text-xs text-slate-600 pointer-events-none">
          {value.length} chars
        </div>
      </div>

      <button
        onClick={onGenerate}
        disabled={loading || !value.trim()}
        className={`
          w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all duration-300 transform active:scale-[0.98]
          flex items-center justify-center space-x-2
          ${loading || !value.trim() 
            ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
            : `bg-gradient-to-r ${activeColor} hover:shadow-indigo-500/25 hover:brightness-110`}
        `}
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Architecting...</span>
          </>
        ) : (
          <>
            <span>Generate Structure</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </>
        )}
      </button>
    </div>
  );
};