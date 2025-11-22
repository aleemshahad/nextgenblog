import React, { useState } from 'react';
import { generateSeoKeywords } from '../../services/geminiService';
import { Loader2, Search } from 'lucide-react';

const SeoTool: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    const data = await generateSeoKeywords(topic);
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Enter your blog topic
        </label>
        <div className="relative">
            <input
            type="text"
            className="w-full p-4 pl-12 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-white"
            placeholder="e.g., Digital Marketing Trends 2025"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            />
            <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
        </div>
      </div>
      
      <button
        onClick={handleAnalyze}
        disabled={loading || !topic}
        className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? <Loader2 className="animate-spin h-5 w-5 mr-2" /> : null}
        {loading ? 'Analyzing...' : 'Get Keywords & Strategy'}
      </button>

      {result && (
        <div className="mt-6 p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
           <div className="prose dark:prose-invert max-w-none prose-sm">
                <div dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, '<br/>') }} />
           </div>
        </div>
      )}
    </div>
  );
};

export default SeoTool;