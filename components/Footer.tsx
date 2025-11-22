import React from 'react';
import { Github, Twitter, Linkedin, Cpu } from 'lucide-react';

interface FooterProps {
  onPageNavigation: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageNavigation }) => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
               <div className="bg-blue-600 p-1 rounded-md">
                 <Cpu className="h-4 w-4 text-white" />
               </div>
               <span className="font-bold text-lg text-gray-900 dark:text-white">NextGenGuides</span>
             </div>
             <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
               Empowering digital creators with AI tools, tech insights, and freelance strategies for the modern web.
             </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">AI Tools</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Tech News</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Tutorials</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Crypto Updates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><button onClick={() => onPageNavigation('about')} className="hover:text-blue-600 dark:hover:text-blue-400 bg-transparent border-none cursor-pointer">About Us</button></li>
              <li><button onClick={() => onPageNavigation('contact')} className="hover:text-blue-600 dark:hover:text-blue-400 bg-transparent border-none cursor-pointer">Contact</button></li>
              <li><button onClick={() => onPageNavigation('privacy')} className="hover:text-blue-600 dark:hover:text-blue-400 bg-transparent border-none cursor-pointer">Privacy Policy</button></li>
              <li><button onClick={() => onPageNavigation('terms')} className="hover:text-blue-600 dark:hover:text-blue-400 bg-transparent border-none cursor-pointer">Terms of Service</button></li>
            </ul>
          </div>

          <div>
             <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h4>
             <div className="flex space-x-4">
               <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Twitter className="h-5 w-5" /></a>
               <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors"><Linkedin className="h-5 w-5" /></a>
               <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
             </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; 2024 NextGenGuides. All rights reserved.</p>
          <p>Designed with <span className="text-red-500">&hearts;</span>Aleem S for Blogger.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;