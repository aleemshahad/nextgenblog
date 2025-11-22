import React from 'react';
import { BlogPost } from '../types';
import { Clock, User, ArrowLeft, Filter } from 'lucide-react';

interface CategoryPageProps {
  category: string;
  posts: BlogPost[];
  onBack: () => void;
  onArticleClick: (article: BlogPost) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, posts, onBack, onArticleClick }) => {
  const categoryColors = {
    'AI Tools': 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
    'Tech News': 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300',
    'Tutorials': 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300',
    'Freelancing': 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300',
    'Crypto': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300',
    'SEO': 'bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300',
  };

  const categoryDescriptions = {
    'AI Tools': 'Discover the latest artificial intelligence tools and technologies to boost your productivity.',
    'Tech News': 'Stay updated with the latest technology news, trends, and innovations in the tech world.',
    'Tutorials': 'Step-by-step guides and tutorials to help you master new skills and technologies.',
    'Freelancing': 'Tips, strategies, and insights for successful freelancing and remote work.',
    'Crypto': 'Comprehensive guides and analysis of cryptocurrency, blockchain, and DeFi.',
    'SEO': 'Search engine optimization strategies, tips, and best practices for better rankings.',
  };

  const categoryIcons = {
    'AI Tools': '🤖',
    'Tech News': '📰',
    'Tutorials': '📚',
    'Freelancing': '💼',
    'Crypto': '₿',
    'SEO': '🔍',
  };

  const filteredPosts = posts.filter(post => post.category === category);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button>

        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <span className="text-6xl mr-4">{categoryIcons[category as keyof typeof categoryIcons]}</span>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{category}</h1>
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${categoryColors[category as keyof typeof categoryColors]}`}>
                {filteredPosts.length} Articles
              </span>
            </div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {categoryDescriptions[category as keyof typeof categoryDescriptions]}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Showing all {category.toLowerCase()} articles
            </span>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Latest
            </button>
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Popular
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div 
                key={post.id} 
                className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
                onClick={() => onArticleClick(post)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3 space-x-4">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <button className="inline-block text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 text-sm">
                    Read More &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              No articles found in {category}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We're working on adding more content to this category. Check back soon!
            </p>
            <button
              onClick={onBack}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse Other Categories
            </button>
          </div>
        )}

        {/* Load More */}
        {filteredPosts.length > 6 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
