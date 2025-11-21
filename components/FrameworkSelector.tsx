import React from 'react';
import { Framework, FrameworkOption } from '../types';

interface FrameworkSelectorProps {
  options: FrameworkOption[];
  selected: Framework;
  onSelect: (fw: Framework) => void;
}

export const FrameworkSelector: React.FC<FrameworkSelectorProps> = ({ options, selected, onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {options.map((option) => {
        const isSelected = selected === option.id;
        
        return (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`
              relative group flex items-center p-4 rounded-xl transition-all duration-300 border
              ${isSelected 
                ? 'bg-slate-800 border-indigo-500 ring-1 ring-indigo-500/50 shadow-lg' 
                : 'bg-slate-900 border-slate-800 hover:border-slate-600 hover:bg-slate-800/80'}
            `}
          >
            {isSelected && (
              <div className={`absolute inset-0 bg-gradient-to-r ${option.color} opacity-10 rounded-xl`} />
            )}
            
            <span className="text-2xl mr-3 filter drop-shadow-md">{option.icon}</span>
            <span className={`font-medium ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
              {option.name}
            </span>
            
            {isSelected && (
              <div className="ml-auto">
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};