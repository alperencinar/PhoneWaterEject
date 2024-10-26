import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Droplets } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm relative">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Droplets className="w-8 h-8 text-blue-700" aria-hidden="true" />
            <span className="text-xl font-bold text-blue-900">PhoneWaterEject</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link to="/#features" className="text-gray-700 hover:text-blue-700 transition-colors">Features</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-700 transition-colors">Blog</Link>
            <Link to="/#faq" className="text-gray-700 hover:text-blue-700 transition-colors">FAQ</Link>
            <Link to="/#contact" className="text-gray-700 hover:text-blue-700 transition-colors">Contact</Link>
          </div>
          <button 
            className="md:hidden text-gray-700 hover:text-blue-700 transition-colors p-2"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`${
          isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        } md:hidden overflow-hidden transition-all duration-300 ease-in-out absolute left-0 right-0 top-full bg-white shadow-lg z-50`}>
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col gap-2">
              <Link 
                to="/#features" 
                className="py-2 px-4 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/blog" 
                className="py-2 px-4 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/#faq" 
                className="py-2 px-4 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                to="/#contact" 
                className="py-2 px-4 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};