import React from 'react';

interface LoaderProps {
  frameworkName: string;
}

export const Loader: React.FC<LoaderProps> = ({ frameworkName }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 space-y-8">
      <div className="relative">
        <div className="w-24 h-24 rounded-full border-4 border-slate-800/50"></div>
        <div className="absolute top-0 left-0 w-24 h-24 rounded-full border-4 border-t-indigo-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        <div className="absolute top-2 left-2 w-20 h-20 rounded-full border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      </div>
      
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-white animate-pulse">Analyzing Requirements</h3>
        <p className="text-slate-400">Consulting {frameworkName} best practices...</p>
      </div>
      
      <div className="w-full max-w-xs space-y-3">
        <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-500 animate-progress origin-left"></div>
        </div>
      </div>
      
      <style>{`
        @keyframes progress {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.7); }
          100% { transform: scaleX(1); }
        }
        .animate-progress {
          animation: progress 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};