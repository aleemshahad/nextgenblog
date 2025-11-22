import React from 'react';
import { Bot, Newspaper, Code2, Briefcase, TrendingUp, Search } from 'lucide-react';
import { Category } from '../types';

interface CategoryGridProps {
  onCategoryClick: (categoryName: string) => void;
}

const categories: Category[] = [
  { id: '1', name: 'AI Tools', icon: <Bot className="h-6 w-6" />, color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20' },
  { id: '2', name: 'Tech News', icon: <Newspaper className="h-6 w-6" />, color: 'text-green-500 bg-green-50 dark:bg-green-900/20' },
  { id: '3', name: 'Tutorials', icon: <Code2 className="h-6 w-6" />, color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20' },
  { id: '4', name: 'Freelancing', icon: <Briefcase className="h-6 w-6" />, color: 'text-orange-500 bg-orange-50 dark:bg-orange-900/20' },
  { id: '5', name: 'Crypto', icon: <TrendingUp className="h-6 w-6" />, color: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' },
  { id: '6', name: 'SEO', icon: <Search className="h-6 w-6" />, color: 'text-pink-500 bg-pink-50 dark:bg-pink-900/20' },
];

const CategoryGrid: React.FC<CategoryGridProps> = ({ onCategoryClick }) => {
  const handleCategoryClick = (categoryName: string) => {
    onCategoryClick(categoryName);
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Browse by Topic</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer shadow-sm hover:shadow-md group"
              onClick={() => handleCategoryClick(cat.name)}
            >
              <div className={`p-3 rounded-full mb-3 ${cat.color} group-hover:ring-2 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 ring-current transition-all`}>
                {cat.icon}
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;