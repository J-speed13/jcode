import React, { useEffect, useState } from 'react';
import { ChevronDown, Code } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Building the Digital Future.";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-jasper-black">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#064e3b_1px,transparent_1px),linear-gradient(to_bottom,#064e3b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Glowing Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-jasper-green/20 rounded-full blur-[100px] animate-slow-pulse"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jasper-dim/30 border border-jasper-green/30 text-jasper-neon text-xs font-mono mb-8 animate-float">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-jasper-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-jasper-green"></span>
          </span>
          System Online v2.5.0
        </div>

        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 text-white">
          JASPER<span className="text-jasper-green">_</span>CODING
        </h1>

        <div className="h-8 md:h-12 mb-8 flex items-center justify-center">
           <p className="text-xl md:text-3xl text-gray-400 font-mono">
            {text}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-jasper-green font-bold`}>_</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="px-8 py-4 bg-jasper-green text-black font-bold text-lg rounded-none hover:bg-jasper-neon transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transform hover:-translate-y-1 cursor-pointer"
          >
            INITIALIZE PROJECT
          </a>
          <a
            href="#terminal"
            onClick={(e) => handleScroll(e, '#terminal')}
            className="px-8 py-4 border border-jasper-green text-jasper-green font-mono text-lg rounded-none hover:bg-jasper-green/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Code className="w-5 h-5" />
            TEST_TERMINAL
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#services" 
          onClick={(e) => handleScroll(e, '#services')}
          className="text-gray-500 hover:text-jasper-green transition-colors cursor-pointer"
        >
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </div>
  );
};

export default Hero;