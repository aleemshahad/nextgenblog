import React from 'react';
import { BlogPost } from '../types';
import { Clock, User } from 'lucide-react';

interface LatestArticlesProps {
  onArticleClick: (article: BlogPost) => void;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "10 Best AI Tools for Productivity in 2024",
    excerpt: "Stop wasting time on repetitive tasks. These 10 AI tools will skyrocket your efficiency...",
    category: "AI Tools",
    image: "https://picsum.photos/600/400?random=1",
    date: "Oct 24, 2024",
    author: "Alex Tech"
  },
  {
    id: 2,
    title: "Understanding Bitcoin Halving: A Beginner's Guide",
    excerpt: "What is the halving and why does it matter? We break down the crypto economics simply...",
    category: "Crypto",
    image: "https://picsum.photos/600/400?random=2",
    date: "Oct 22, 2024",
    author: "Satoshi Fan"
  },
  {
    id: 3,
    title: "How to Optimize Your Blog for Voice Search",
    excerpt: "Voice search is growing. Learn the key SEO strategies to ensure your content is found by smart speakers...",
    category: "SEO",
    image: "https://picsum.photos/600/400?random=3",
    date: "Oct 20, 2024",
    author: "Sarah SEO"
  },
  {
    id: 4,
    title: "React vs Angular: Which to Learn in 2025?",
    excerpt: "A comprehensive comparison of the two leading frontend frameworks to help you decide your path...",
    category: "Tutorials",
    image: "https://picsum.photos/600/400?random=4",
    date: "Oct 18, 2024",
    author: "Dev Guru"
  },
  {
    id: 5,
    title: "Freelancing on Upwork: avoiding the 'Race to the Bottom'",
    excerpt: "Don't compete on price. Compete on value. Here are actionable tips to land high-paying clients...",
    category: "Freelancing",
    image: "https://picsum.photos/600/400?random=5",
    date: "Oct 15, 2024",
    author: "Free Lancer"
  },
  {
    id: 6,
    title: "Top 5 Graphics Cards for AI Training at Home",
    excerpt: "Want to run LLMs locally? Here are the best GPUs that offer the VRAM you need without breaking the bank...",
    category: "Tech News",
    image: "https://picsum.photos/600/400?random=6",
    date: "Oct 12, 2024",
    author: "Hardware Guy"
  }
];

const LatestArticles: React.FC<LatestArticlesProps> = ({ onArticleClick }) => {
  const handleReadMore = (post: BlogPost) => {
    onArticleClick(post);
  };

  const handleViewAll = () => {
    console.log('Viewing all posts');
    // TODO: Navigate to all posts page
  };

  return (
    <section id="latest" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Articles</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Fresh insights updated daily.</p>
          </div>
          <button 
            onClick={handleViewAll}
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline hidden sm:block bg-transparent border-none cursor-pointer"
          >
            View All Posts
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
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
                <button 
                  onClick={() => handleReadMore(post)}
                  className="inline-block text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 text-sm bg-transparent border-none cursor-pointer"
                >
                  Read More &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
            <button 
              onClick={handleViewAll}
              className="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 font-medium bg-transparent cursor-pointer"
            >
              View All Posts
            </button>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;