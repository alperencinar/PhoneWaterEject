import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PhoneWaterClean</h3>
            <p className="text-blue-200">
              The ultimate solution for water and dust removal from your devices.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="#" className="flex items-center gap-2 text-blue-200 hover:text-white">
                <Mail className="w-5 h-5" />
                <span>support@phonewaterclean.com</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-blue-200 hover:text-white">
                <Twitter className="w-5 h-5" />
                <span>@phonewaterclean</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-blue-200 hover:text-white">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} PhoneWaterClean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};