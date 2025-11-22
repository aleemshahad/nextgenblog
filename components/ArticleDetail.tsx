import React from 'react';
import { BlogPost } from '../types';
import { Clock, User, ArrowLeft } from 'lucide-react';

interface ArticleDetailProps {
  article: BlogPost;
  onBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onBack }) => {
  const fullContent = {
    1: `# 10 Best AI Tools for Productivity in 2024

Stop wasting time on repetitive tasks. These 10 AI tools will skyrocket your efficiency and transform how you work. In this comprehensive guide, we'll explore the cutting-edge AI tools that are revolutionizing productivity across industries.

## 1. ChatGPT - Your AI Assistant

ChatGPT has become the go-to AI assistant for millions of professionals. From writing emails to generating code, its versatility makes it indispensable.

**Key Features:**
- Natural language processing
- Code generation and debugging
- Content creation and editing
- Research assistance

**Best For:** General productivity, writing, and coding tasks

## 2. Notion AI - Smart Workspace

Notion AI integrates directly into your workspace, helping you write better, organize faster, and think clearer.

**Key Features:**
- Auto-fill databases
- Summarize long documents
- Generate action items
- Improve writing quality

**Best For:** Project management and documentation

## 3. GitHub Copilot - Code Companion

For developers, GitHub Copilot is a game-changer. It suggests code as you type, learning from your coding style.

**Key Features:**
- Real-time code suggestions
- Multi-language support
- Context-aware completions
- Documentation generation

**Best For:** Software development

## 4. Jasper AI - Marketing Content

Jasper specializes in marketing content, helping you create compelling copy that converts.

**Key Features:**
- Brand voice customization
- SEO optimization
- A/B testing suggestions
- Social media content

**Best For:** Marketing teams and content creators

## 5. Midjourney - Visual Creation

Midjourney creates stunning images from text descriptions, perfect for visual content creation.

**Key Features:**
- High-quality image generation
- Style customization
- Commercial usage rights
- Community features

**Best For:** Design and visual content

## 6. Descript - Audio/Video Editing

Descript uses AI to make audio and video editing as simple as editing a document.

**Key Features:**
- Text-based editing
- Automatic transcription
- Voice cloning
- Screen recording

**Best For:** Podcasters and video creators

## 7. Replit AI - Coding Assistant

Replit AI helps you code faster with intelligent suggestions and completions.

**Key Features:**
- Code completion
- Bug detection
- Performance optimization
- Learning resources

**Best For:** Web development and learning

## 8. Copy.ai - Copywriting Tool

Copy.ai generates marketing copy, emails, and social media content in seconds.

**Key Features:**
- Multiple content types
- Brand voice matching
- A/B testing
- Analytics integration

**Best For:** Marketing and sales teams

## 9. Loom - Video Messaging

Loom's AI features make video communication more efficient and engaging.

**Key Features:**
- Auto-generated summaries
- Chapter markers
- Searchable transcripts
- Engagement analytics

**Best For:** Remote teams and customer communication

## 10. Motion - Smart Calendar

Motion uses AI to automatically schedule your tasks and meetings for maximum productivity.

**Key Features:**
- Intelligent scheduling
- Task prioritization
- Meeting optimization
- Time tracking

**Best For:** Time management and scheduling

## Conclusion

These AI tools represent the cutting edge of productivity technology. By integrating them into your workflow, you can save hours of work, improve quality, and focus on what matters most.

Start with one or two tools that match your specific needs, and gradually expand your AI toolkit as you become more comfortable with the technology.

The future of work is here - are you ready to embrace it?`,

    2: `# Understanding Bitcoin Halving: A Beginner's Guide

What is the halving and why does it matter? We break down the crypto economics simply so anyone can understand this crucial Bitcoin event.

## What is Bitcoin Halving?

Bitcoin halving is an event that occurs approximately every four years, where the reward for mining new blocks is cut in half. This process is built into Bitcoin's code and will continue until the maximum supply of 21 million bitcoins is reached, expected around 2140.

## Why Does Halving Matter?

The halving is significant because it reduces the rate at which new bitcoins are created, effectively making Bitcoin more scarce over time. This scarcity is a key factor in Bitcoin's value proposition as digital gold.

## Historical Halvings

### First Halving (2012)
- Block reward: 50 BTC → 25 BTC
- Price before: ~$12
- Price after: ~$1,200

### Second Halving (2016)
- Block reward: 25 BTC → 12.5 BTC
- Price before: ~$650
- Price after: ~$2,500

### Third Halving (2020)
- Block reward: 12.5 BTC → 6.25 BTC
- Price before: ~$8,500
- Price after: ~$55,000

### Fourth Halving (2024)
- Block reward: 6.25 BTC → 3.125 BTC
- Price impact: Still unfolding

## How to Prepare for Halving

1. **Educate Yourself** - Understand the mechanics
2. **Dollar-Cost Average** - Don't try to time the market
3. **Long-term Perspective** - Halving effects take time
4. **Risk Management** - Only invest what you can afford

## Common Misconceptions

**Myth:** Price always goes up immediately after halving
**Reality:** Historical data shows varied timelines for price increases

**Myth:** Halving guarantees profits
**Reality:** Market conditions and external factors play significant roles

## Conclusion

Bitcoin halving is a fundamental aspect of Bitcoin's monetary policy. While it historically correlates with price increases, it's not a guarantee of future performance. Understanding the mechanics helps you make informed decisions in the crypto space.`,

    3: `# How to Optimize Your Blog for Voice Search

Voice search is growing rapidly. Learn the key SEO strategies to ensure your content is found by smart speakers and voice assistants.

## The Voice Search Revolution

With smart speakers in millions of homes and voice assistants on every smartphone, voice search has moved from novelty to necessity. By 2025, over 50% of all searches are expected to be voice-based.

## Understanding Voice Search Behavior

Voice searches differ from typed searches:
- **Conversational**: People speak naturally
- **Question-based**: Most voice searches are questions
- **Local intent**: Many queries have local context
- **Longer queries**: Average 7-10 words vs 3-4 for typed

## Key Optimization Strategies

### 1. Natural Language Content

Write conversationally, as if speaking to someone:
- Use complete sentences
- Answer common questions directly
- Include who, what, when, where, why, how
- Avoid jargon and technical terms

### 2. Featured Snippets

Target position zero:
- Structure content with clear headings
- Use bullet points and numbered lists
- Provide direct answers to questions
- Include FAQ sections

### 3. Local SEO

Optimize for local voice queries:
- Claim your Google Business Profile
- Include local keywords naturally
- Mention nearby landmarks
- Provide accurate contact information

### 4. Mobile Optimization

Most voice searches happen on mobile:
- Fast page loading speed
- Responsive design
- Readable font sizes
- Easy navigation

### 5. Structured Data

Help search engines understand your content:
- Schema markup for articles
- FAQ schema for Q&A content
- Local business schema
- Review and rating schema

## Technical Implementation

### Page Speed
- Compress images
- Minimize CSS/JS
- Use browser caching
- Enable compression

### HTTPS
- Secure your site with SSL
- All pages should use HTTPS
- Fix mixed content issues

### Mobile-First Design
- Test on various devices
- Ensure touch-friendly buttons
- Avoid pop-ups that block content

## Content Strategy for Voice Search

### Question-Based Content
Create content that answers specific questions:
- "How do I..."
- "What is the best..."
- "Where can I find..."
- "Why does..."

### Long-Form Content
Comprehensive content performs better:
- 1,500+ words for competitive topics
- Cover all aspects of the topic
- Include internal links
- Update regularly

### Conversational Tone
Write like you speak:
- Use contractions naturally
- Ask and answer questions
- Use simple language
- Be direct and helpful

## Measuring Voice Search Success

Track these metrics:
- Voice search traffic (when available)
- Featured snippet appearances
- Local search rankings
- Mobile search performance
- Question-based keyword rankings

## Tools for Voice Search Optimization

- **Google Search Console**: Track performance
- **AnswerThePublic**: Find question keywords
- **Schema Markup Validator**: Test structured data
- **PageSpeed Insights**: Check loading speed
- **Mobile-Friendly Test**: Verify mobile optimization

## Future Trends

Stay ahead with these developments:
- Multilingual voice search
- Visual search integration
- AI-powered content generation
- Voice commerce growth
- Personalized search results

## Conclusion

Voice search optimization isn't just about SEO—it's about meeting user needs in the most natural way possible. By focusing on conversational content, technical excellence, and user experience, you'll position your blog for success in the voice-first future.

Start implementing these strategies today, and you'll be ahead of competitors as voice search continues to grow in importance.`
  };

  const content = fullContent[article.id as keyof typeof fullContent] || `
# ${article.title}

${article.excerpt}

This is a placeholder for the full article content. In a real application, this would be fetched from a CMS or database.

## Article Details

- **Category:** ${article.category}
- **Author:** ${article.author}
- **Published:** ${article.date}

## More Content Coming Soon

We're working on expanding our article content. Check back soon for the full version of this article!
`;

  // Parse markdown to HTML
  const parseMarkdown = (text: string) => {
    return text
      // Headers
      .replace(/^# (.*$)/gm, '<h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6 mt-8">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-6">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-3 mt-4">$1</h3>')
      // Bold text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
      // Italic text
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      // Lists
      .replace(/^- (.*$)/gm, '<li class="ml-4 mb-2">• $1</li>')
      // Line breaks
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/\n/g, '<br />')
      // Wrap in paragraphs
      .replace(/^(?!<[h|l])/gm, '<p class="mb-4">')
      .replace(/(?<!>)$/gm, '</p>');
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <header className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-4 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Articles
          </button>
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 space-x-4">
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
              {article.category}
            </span>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {article.date}
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {article.author}
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {article.title}
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </header>

        {/* Article Image */}
        <div className="mb-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div 
            className="text-gray-800 dark:text-gray-200 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
          />
        </article>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                {article.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{article.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Published on {article.date}</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Share
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Bookmark
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ArticleDetail;
