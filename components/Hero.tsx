import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';

const featuredPosts = [
    {
        id: 1,
        title: "The Rise of Agentic AI: How It Will Change Freelancing Forever",
        description: "Discover how autonomous AI agents are reshaping the gig economy and what skills you need to stay ahead.",
        image: "https://picsum.photos/800/600?random=10",
        tag: "FEATURED"
    },
    {
        id: 2,
        title: "Web 4.0: Navigating the Spatial Web",
        description: "From AR glasses to digital twins, explore the next evolution of the internet and its impact on design.",
        image: "https://picsum.photos/800/600?random=11",
        tag: "TRENDING"
    },
    {
        id: 3,
        title: "Sustainable Crypto Mining in 2025",
        description: "New protocols and green energy solutions are making blockchain technology more eco-friendly than ever.",
        image: "https://picsum.photos/800/600?random=12",
        tag: "CRYPTO"
    }
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 pt-10 pb-16 lg:pt-20 lg:pb-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left z-10 mb-12 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="block text-gray-900 dark:text-white mb-2">Next-Generation</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Guides, Tools & Insights
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
            Master the future with AI-powered articles, in-depth tutorials, cutting-edge tools, and trending tech updates. Your gateway to digital growth.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <a href="#latest" className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-lg hover:shadow-blue-500/30 flex items-center gap-2">
              Start Reading <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#tools" className="px-8 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold transition">
              Try AI Tools
            </a>
          </div>
        </div>

        {/* Right Visual / Slider */}
        <div className="w-full lg:w-1/2 relative px-4 lg:px-0">
            {/* Animated Background Blobs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-8 -left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            
            <div className="relative rounded-2xl shadow-2xl overflow-hidden group aspect-[4/3]">
                {featuredPosts.map((post, index) => (
                    <div 
                        key={post.id}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 sm:p-8">
                            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-3">
                                {post.tag}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                {post.title}
                            </h3>
                            <p className="text-gray-200 text-sm sm:text-base line-clamp-2">
                                {post.description}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Slider Controls */}
                <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
                
                {/* Indicators */}
                <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                    {featuredPosts.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`h-1.5 rounded-full transition-all ${idx === currentIndex ? 'w-6 bg-blue-500' : 'w-2 bg-white/50'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;