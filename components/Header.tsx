import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between border-b border-slate-800 pb-8">
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            StackGenie <span className="text-indigo-400">AI</span>
          </h1>
          <p className="text-slate-400 text-sm mt-1">Intelligent Architecture Planning for Modern Web Apps</p>
        </div>
      </div>
      
      <div className="flex space-x-4">
        <div className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-xs text-slate-400 font-mono">
          Powered by Gemini 2.5
        </div>
      </div>
    </header>
  );
};