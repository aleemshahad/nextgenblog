import React from 'react';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto rounded-3xl bg-gray-900 text-white p-8 md:p-16 relative overflow-hidden text-center shadow-2xl">
        {/* Decorative background circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10">
          <Mail className="h-12 w-12 mx-auto mb-6 text-blue-400" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the NextGen Community</h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Get the latest AI tools, tech news, and freelancing tips delivered straight to your inbox. No spam, ever.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/20 transition"
            />
            <button 
              type="submit"
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">By subscribing, you agree to our Privacy Policy.</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;