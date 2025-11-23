'use client'

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import TrendingTicker from '../components/TrendingTicker';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import LatestArticles from '../components/LatestArticles';
import AIToolsSection from '../components/AIToolsSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import ArticleDetail from '../components/ArticleDetail';
import CategoryPage from '../components/CategoryPage';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import PrivacyPolicy from '../components/PrivacyPolicy';
import TermsOfService from '../components/TermsOfService';
import ArticleManager from '../components/ArticleManager';
import ToolLayout from '../components/tools/ToolLayout';
import TextGenerator from '../components/tools/TextGenerator';
import ImageGenerator from '../components/tools/ImageGenerator';
import SeoTool from '../components/tools/SeoTool';
import VoiceTool from '../components/tools/VoiceTool';
import { ToolType, BlogPost } from '../types';

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTool, setActiveTool] = useState<ToolType | null>(null);
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<string | null>(null);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);

  // Initialize Dark Mode based on system preference or storage
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  // Update HTML class for Tailwind Dark Mode
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleArticleClick = (article: BlogPost) => {
    setActiveArticle(article);
  };

  const handleBackToArticles = () => {
    setActiveArticle(null);
  };

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  const handleBackToHome = () => {
    setActiveCategory(null);
    setActiveArticle(null);
    setCurrentPage(null);
  };

  const handlePageNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const handleAdminMode = () => {
    setIsAdminMode(!isAdminMode);
  };

  const handleArticleAdd = (newArticle: BlogPost) => {
    setAllPosts(prev => [...prev, newArticle]);
  };

  // Initialize posts
  useEffect(() => {
    const initialPosts: BlogPost[] = [
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
      },
      // Additional AI Tools articles
      {
        id: 7,
        title: "ChatGPT vs Claude: Which AI Assistant is Better?",
        excerpt: "We compare the two leading AI assistants across features, pricing, and performance...",
        category: "AI Tools",
        image: "https://picsum.photos/600/400?random=7",
        date: "Oct 10, 2024",
        author: "AI Expert"
      },
      {
        id: 8,
        title: "Midjourney V6: Complete Guide to AI Art Generation",
        excerpt: "Master the latest version of Midjourney with prompts, parameters, and best practices...",
        category: "AI Tools",
        image: "https://picsum.photos/600/400?random=8",
        date: "Oct 8, 2024",
        author: "Art AI"
      },
      // Additional Tech News articles
      {
        id: 9,
        title: "Apple Vision Pro: First Impressions and Review",
        excerpt: "After weeks of testing, here's our comprehensive review of Apple's mixed reality headset...",
        category: "Tech News",
        image: "https://picsum.photos/600/400?random=9",
        date: "Oct 5, 2024",
        author: "Tech Reviewer"
      },
      {
        id: 10,
        title: "Tesla FSD Beta V12: Full Self-Driving Revolution?",
        excerpt: "Tesla's latest FSD update promises end-to-end neural networks. Is it finally ready?",
        category: "Tech News",
        image: "https://picsum.photos/600/400?random=10",
        date: "Oct 3, 2024",
        author: "Auto Tech"
      },
      // Additional Tutorials
      {
        id: 11,
        title: "Complete Python Tutorial for Beginners 2024",
        excerpt: "Learn Python from scratch with this comprehensive tutorial covering everything from basics to advanced concepts...",
        category: "Tutorials",
        image: "https://picsum.photos/600/400?random=11",
        date: "Oct 1, 2024",
        author: "Code Teacher"
      },
      {
        id: 12,
        title: "Build a Full-Stack App with Next.js and MongoDB",
        excerpt: "Step-by-step guide to building a modern web application from database to deployment...",
        category: "Tutorials",
        image: "https://picsum.photos/600/400?random=12",
        date: "Sep 28, 2024",
        author: "Web Dev"
      },
      // Additional Freelancing articles
      {
        id: 13,
        title: "How to Price Your Freelance Services in 2024",
        excerpt: "Don't undercharge your services. Learn how to calculate your rates and communicate value to clients...",
        category: "Freelancing",
        image: "https://picsum.photos/600/400?random=13",
        date: "Sep 25, 2024",
        author: "Biz Coach"
      },
      {
        id: 14,
        title: "Top 10 Freelance Platforms Beyond Upwork and Fiverr",
        excerpt: "Explore alternative platforms that might offer better opportunities for your specific skills...",
        category: "Freelancing",
        image: "https://picsum.photos/600/400?random=14",
        date: "Sep 22, 2024",
        author: "Gig Worker"
      },
      // Additional Crypto articles
      {
        id: 15,
        title: "Ethereum 2.0: The Complete Guide to Staking",
        excerpt: "Everything you need to know about Ethereum's transition to proof-of-stake and how to earn rewards...",
        category: "Crypto",
        image: "https://picsum.photos/600/400?random=15",
        date: "Sep 20, 2024",
        author: "DeFi Expert"
      },
      {
        id: 16,
        title: "NFTs in 2024: Are They Still Worth It?",
        excerpt: "After the hype cycle, where do NFTs stand today and should you still invest in them?",
        category: "Crypto",
        image: "https://picsum.photos/600/400?random=16",
        date: "Sep 18, 2024",
        author: "NFT Analyst"
      },
      // Additional SEO articles
      {
        id: 17,
        title: "Google Core Web Vitals: Complete Optimization Guide",
        excerpt: "Master the three essential metrics that impact your search rankings and user experience...",
        category: "SEO",
        image: "https://picsum.photos/600/400?random=17",
        date: "Sep 15, 2024",
        author: "SEO Pro"
      },
      {
        id: 18,
        title: "Link Building Strategies That Actually Work in 2024",
        excerpt: "Forget outdated techniques. Here are the link building methods that deliver real results today...",
        category: "SEO",
        image: "https://picsum.photos/600/400?random=18",
        date: "Sep 12, 2024",
        author: "Link Builder"
      }
    ];
    setAllPosts(initialPosts);
  }, []);

  const renderActiveTool = () => {
    switch (activeTool) {
      case ToolType.TEXT_GENERATOR:
        return (
          <ToolLayout title="AI Text Writer" onClose={() => setActiveTool(null)}>
            <TextGenerator />
          </ToolLayout>
        );
      case ToolType.IMAGE_GENERATOR:
        return (
          <ToolLayout title="AI Image Generator" onClose={() => setActiveTool(null)}>
            <ImageGenerator />
          </ToolLayout>
        );
      case ToolType.SEO_KEYWORD:
        return (
          <ToolLayout title="SEO Strategy Generator" onClose={() => setActiveTool(null)}>
            <SeoTool />
          </ToolLayout>
        );
      case ToolType.VOICE_TO_TEXT:
        return (
            <ToolLayout title="Voice to Text" onClose={() => setActiveTool(null)}>
                <VoiceTool />
            </ToolLayout>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <TrendingTicker />
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} onAdminMode={handleAdminMode} isAdminMode={isAdminMode} />
      
      {isAdminMode ? (
        <main className="pb-16">
          <ArticleManager 
            onBack={handleBackToHome} 
            onArticleAdd={handleArticleAdd}
            existingArticles={allPosts}
          />
        </main>
      ) : currentPage === 'about' ? (
        <main className="pb-16">
          <AboutUs onBack={handleBackToHome} />
        </main>
      ) : currentPage === 'contact' ? (
        <main className="pb-16">
          <Contact onBack={handleBackToHome} />
        </main>
      ) : currentPage === 'privacy' ? (
        <main className="pb-16">
          <PrivacyPolicy onBack={handleBackToHome} />
        </main>
      ) : currentPage === 'terms' ? (
        <main className="pb-16">
          <TermsOfService onBack={handleBackToHome} />
        </main>
      ) : activeArticle ? (
        <main className="pb-16">
          <ArticleDetail article={activeArticle} onBack={handleBackToArticles} />
        </main>
      ) : activeCategory ? (
        <main className="pb-16">
          <CategoryPage 
            category={activeCategory} 
            posts={allPosts} 
            onBack={handleBackToHome}
            onArticleClick={handleArticleClick}
          />
        </main>
      ) : (
        <main>
          <Hero />
          <CategoryGrid onCategoryClick={handleCategoryClick} />
          <LatestArticles onArticleClick={handleArticleClick} />
          <AIToolsSection onOpenTool={setActiveTool} />
          <Newsletter />
        </main>
      )}

      <Footer onPageNavigation={handlePageNavigation} />

      {/* Modal for Tools */}
      {activeTool && renderActiveTool()}
    </div>
  );
}
