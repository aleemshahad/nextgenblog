import React, { useState } from 'react';
import { generateText } from '../../services/geminiService';
import { Loader2, Copy } from 'lucide-react';

const TextGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    const text = await generateText(prompt);
    setResult(text);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          What would you like to write?
        </label>
        <textarea
          className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white resize-none"
          rows={4}
          placeholder="e.g., Write a 100-word intro for a blog post about coffee..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      
      <button
        onClick={handleGenerate}
        disabled={loading || !prompt}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? <Loader2 className="animate-spin h-5 w-5 mr-2" /> : null}
        {loading ? 'Generating...' : 'Generate Text'}
      </button>

      {result && (
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 relative group">
           <button 
             className="absolute top-2 right-2 p-1.5 text-gray-400 hover:text-blue-500 rounded-md transition-colors"
             onClick={() => navigator.clipboard.writeText(result)}
             title="Copy"
           >
             <Copy className="h-4 w-4" />
           </button>
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Output</h4>
          <div className="prose dark:prose-invert text-sm max-w-none whitespace-pre-wrap">
            {result}
          </div>
        </div>
      )}
    </div>
  );
};

export default TextGenerator;