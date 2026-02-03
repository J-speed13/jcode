import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-jasper-dim/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
           <span className="font-mono text-lg font-bold text-white tracking-tighter">
              JASPER<span className="text-jasper-green">_</span>CODING
            </span>
            <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} Jasper Coding Inc. All systems nominal.</p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-jasper-green transition-colors transform hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-jasper-green transition-colors transform hover:scale-110">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-jasper-green transition-colors transform hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-jasper-green transition-colors transform hover:scale-110">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
