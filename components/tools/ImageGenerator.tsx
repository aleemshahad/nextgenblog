import React, { useState } from 'react';
import { generateImage } from '../../services/geminiService';
import { Loader2, Download, Image as ImageIcon } from 'lucide-react';

const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setImageSrc(null);
    const result = await generateImage(prompt);
    setImageSrc(result);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Describe the image
        </label>
        <div className="relative">
             <input
              type="text"
              className="w-full p-4 pl-12 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
              placeholder="A futuristic city on Mars..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <ImageIcon className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
        </div>
       
      </div>
      
      <button
        onClick={handleGenerate}
        disabled={loading || !prompt}
        className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? <Loader2 className="animate-spin h-5 w-5 mr-2" /> : null}
        {loading ? 'Dreaming...' : 'Generate Image'}
      </button>

      <div className="mt-6 flex justify-center items-center min-h-[300px] bg-gray-100 dark:bg-gray-800 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700">
        {loading ? (
             <div className="text-center text-gray-500">
                 <Loader2 className="animate-spin h-8 w-8 mx-auto mb-2 text-purple-500" />
                 <p>Creating your visual...</p>
             </div>
        ) : imageSrc ? (
          <div className="relative w-full h-full group">
            <img src={imageSrc} alt="Generated" className="w-full h-auto rounded-lg object-contain max-h-[400px]" />
            <a 
                href={imageSrc} 
                download="generated-image.png"
                className="absolute bottom-4 right-4 bg-white text-gray-900 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100"
            >
                <Download className="h-5 w-5" />
            </a>
          </div>
        ) : (
          <div className="text-center text-gray-400">
             <ImageIcon className="h-12 w-12 mx-auto mb-2 opacity-50" />
             <p>Image preview will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;