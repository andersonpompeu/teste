import React, { useState } from 'react';
import { Framework, FrameworkOption } from './types';
import { generateArchitecture } from './services/geminiService';
import { Header } from './components/Header';
import { FrameworkSelector } from './components/FrameworkSelector';
import { ProjectInput } from './components/ProjectInput';
import { ResultsDisplay } from './components/ResultsDisplay';
import { Loader } from './components/Loader';

// Framework data with branding colors and icons
const frameworks: FrameworkOption[] = [
  { id: Framework.REACT, name: 'React 18+', color: 'from-cyan-500 to-blue-500', icon: '⚛️' },
  { id: Framework.ANGULAR, name: 'Angular 18+', color: 'from-red-500 to-pink-600', icon: '🛡️' },
  { id: Framework.VUE, name: 'Vue 3+', color: 'from-emerald-400 to-green-600', icon: '🟩' },
  { id: Framework.NEXT, name: 'Next 14+', color: 'from-gray-600 to-gray-900', icon: '▲' },
  { id: Framework.NUXT, name: 'Nuxt 3+', color: 'from-green-400 to-teal-500', icon: '⛰️' },
];

const App: React.FC = () => {
  const [selectedFramework, setSelectedFramework] = useState<Framework>(Framework.REACT);
  const [projectIdea, setProjectIdea] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!projectIdea.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const architecture = await generateArchitecture(selectedFramework, projectIdea);
      setResult(architecture);
    } catch (err) {
      setError("Failed to generate architecture. Please check your API key and try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getActiveColor = () => {
    const fw = frameworks.find(f => f.id === selectedFramework);
    return fw ? fw.color : 'from-blue-500 to-purple-600';
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Header />

        <main className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Input and Configuration */}
          <div className="lg:col-span-5 space-y-8">
            <section className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 mr-3 text-sm font-bold">1</span>
                Select Tech Stack
              </h2>
              <FrameworkSelector 
                options={frameworks} 
                selected={selectedFramework} 
                onSelect={setSelectedFramework} 
              />
            </section>

            <section className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 mr-3 text-sm font-bold">2</span>
                Describe Project
              </h2>
              <ProjectInput 
                value={projectIdea} 
                onChange={setProjectIdea} 
                onGenerate={handleGenerate}
                loading={loading}
                activeColor={getActiveColor()}
              />
            </section>
          </div>

          {/* Right Column: Output */}
          <div className="lg:col-span-7">
            <section className={`h-full min-h-[500px] bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 shadow-xl relative overflow-hidden transition-all duration-500 ${loading ? 'border-indigo-500/30' : ''}`}>
              
              {/* Background Glow Effect */}
              <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${getActiveColor()} opacity-5 blur-[100px] rounded-full pointer-events-none transition-all duration-700`} />
              
              {loading ? (
                <Loader frameworkName={frameworks.find(f => f.id === selectedFramework)?.name || 'Framework'} />
              ) : result ? (
                <ResultsDisplay content={result} />
              ) : error ? (
                <div className="h-full flex flex-col items-center justify-center text-red-400">
                  <div className="bg-red-900/20 p-4 rounded-full mb-4">
                     <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                     </svg>
                  </div>
                  <p>{error}</p>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-500 space-y-4">
                  <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Ready to architect your next masterpiece.</p>
                  <p className="text-sm max-w-sm text-center">Select a framework and describe your idea to get a comprehensive file structure and tech stack recommendation.</p>
                </div>
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;