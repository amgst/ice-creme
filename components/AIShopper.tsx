
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';

const AIShopper: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setResponse('');
    const result = await geminiService.getEventAdvice(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="bg-rose-50 rounded-3xl p-8 md:p-12 shadow-inner border border-rose-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-serif text-rose-900 mb-4">Planning an event?</h2>
        <p className="text-rose-700 mb-8">Tell our AI Event Assistant about your party (number of guests, theme, location) and we'll recommend the perfect package and flavor pairings.</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., Hosting a wedding for 100 people in July..."
            className="flex-1 px-6 py-4 rounded-2xl border-2 border-rose-200 focus:border-rose-500 focus:outline-none bg-white text-rose-900 placeholder-rose-300"
          />
          <button 
            type="submit"
            disabled={loading}
            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-2xl font-bold transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : 'Get Advice'}
          </button>
        </form>

        {response && (
          <div className="bg-white p-6 rounded-2xl border border-rose-200 text-left shadow-sm animate-fade-in">
            <div className="flex items-center gap-2 mb-3 text-rose-600 font-bold uppercase text-xs tracking-widest">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 13a1 1 0 112 0 1 1 0 01-2 0zm1-9a1 1 0 011 1v5a1 1 0 11-2 0V5a1 1 0 011-1z" /></svg>
              Our Suggestion
            </div>
            <p className="text-rose-900 leading-relaxed whitespace-pre-wrap">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIShopper;
