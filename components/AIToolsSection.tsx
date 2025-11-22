import React from 'react';
import { Type, Image as ImageIcon, Search, Mic } from 'lucide-react';
import { ToolType } from '../types';

interface AIToolsSectionProps {
  onOpenTool: (tool: ToolType) => void;
}

const AIToolsSection: React.FC<AIToolsSectionProps> = ({ onOpenTool }) => {
  return (
    <section id="tools" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured AI Tools</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Boost your productivity with our suite of free, integrated AI tools. 
            Powered by next-gen models to help you create, optimize, and analyze.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Text Generator */}
          <button 
            onClick={() => onOpenTool(ToolType.TEXT_GENERATOR)}
            className="group glass-card p-8 rounded-2xl text-left hover:scale-105 transition-all duration-300 hover:shadow-xl hover:bg-white dark:hover:bg-gray-800"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:rotate-6 transition-transform">
              <Type className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AI Writer</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Generate blog intros, outlines, and social posts instantly.</p>
          </button>

          {/* Image Generator */}
          <button 
            onClick={() => onOpenTool(ToolType.IMAGE_GENERATOR)}
            className="group glass-card p-8 rounded-2xl text-left hover:scale-105 transition-all duration-300 hover:shadow-xl hover:bg-white dark:hover:bg-gray-800"
          >
             <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:rotate-6 transition-transform">
              <ImageIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Image Gen</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Create unique featured images and art for your content.</p>
          </button>

          {/* SEO Tool */}
          <button 
            onClick={() => onOpenTool(ToolType.SEO_KEYWORD)}
            className="group glass-card p-8 rounded-2xl text-left hover:scale-105 transition-all duration-300 hover:shadow-xl hover:bg-white dark:hover:bg-gray-800"
          >
             <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6 text-green-600 dark:text-green-400 group-hover:rotate-6 transition-transform">
              <Search className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">SEO Optimizer</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Find high-ranking keywords and content strategies.</p>
          </button>

          {/* Voice to Text */}
          <button 
             onClick={() => onOpenTool(ToolType.VOICE_TO_TEXT)}
            className="group glass-card p-8 rounded-2xl text-left hover:scale-105 transition-all duration-300 hover:shadow-xl hover:bg-white dark:hover:bg-gray-800"
          >
             <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400 group-hover:rotate-6 transition-transform">
              <Mic className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Voice-to-Text</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Transcribe audio notes into polished articles.</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;