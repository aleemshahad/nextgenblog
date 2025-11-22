import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Search, Cpu, Settings } from 'lucide-react';
import { NavLink } from '../types';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onAdminMode?: () => void;
  isAdminMode?: boolean;
}

const navLinks: NavLink[] = [
  { name: 'AI Tools', href: '#tools' },
  { name: 'Tech News', href: '#news' },
  { name: 'Tutorials', href: '#tutorials' },
  { name: 'Crypto', href: '#crypto' },
  { name: 'Freelancing', href: '#freelancing' },
  { name: 'SEO', href: '#seo' },
];

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode, onAdminMode, isAdminMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass-card border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.location.hash = ''}>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1.5 rounded-lg">
              <Cpu className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              NextGenGuides
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
            
            {/* Search Bar */}
            <div className="relative hidden lg:block ml-2">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-full py-1.5 px-4 pl-9 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-40 transition-all focus:w-60"
                />
                <Search className="absolute left-3 top-2 h-3.5 w-3.5 text-gray-400" />
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-yellow-400"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Admin Mode Toggle */}
            {onAdminMode && (
              <button
                onClick={onAdminMode}
                className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                  isAdminMode ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'
                }`}
                title={isAdminMode ? 'Exit Admin Mode' : 'Enter Admin Mode'}
              >
                <Settings className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-yellow-400"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full glass-card border-b border-gray-200 dark:border-gray-800 shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <div className="relative mx-3 mt-4 mb-2">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;