import React from 'react';
import { Zap } from 'lucide-react';

const headlines = [
  "Gemini 1.5 Pro Available Now",
  "Bitcoin hits new yearly high",
  "Top 5 Freelance Platforms for 2025",
  "Python vs Rust: Performance Benchmark",
  "New SEO Core Update Released",
  "Google IO 2025 Announced"
];

const TrendingTicker: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-3 overflow-hidden border-b border-gray-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="flex-shrink-0 flex items-center bg-blue-600 px-3 py-1 rounded text-xs font-bold mr-4">
          <Zap className="h-3 w-3 mr-1" /> TRENDING
        </div>
        <div className="flex-1 overflow-hidden relative">
           <div className="animate-ticker whitespace-nowrap flex space-x-12">
             {/* Duplicated for seamless loop */}
             {[...headlines, ...headlines, ...headlines].map((headline, index) => (
               <span key={index} className="text-sm font-medium text-gray-300 hover:text-white cursor-pointer transition-colors">
                 {headline}
               </span>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTicker;