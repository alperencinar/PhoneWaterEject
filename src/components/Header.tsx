import React from 'react';
import { Droplets } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplets className="w-8 h-8 text-blue-700" aria-hidden="true" />
            <span className="text-xl font-bold text-blue-900">PhoneWaterEject</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#features" className="text-gray-700 hover:text-blue-700 transition-colors">Features</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-700 transition-colors">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-700 transition-colors">Contact</a>
          </div>
          <button 
            className="md:hidden text-gray-700 hover:text-blue-700 transition-colors p-2"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
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
      </nav>
    </header>
  );
};