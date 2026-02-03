import React from 'react';
import { Cpu, Globe, Zap, Database } from 'lucide-react';

const stats = [
  { label: 'Lines of Code', value: '2.5M+', icon: <CodeIcon /> },
  { label: 'Systems Deployed', value: '140+', icon: <Globe className="text-jasper-green" /> },
  { label: 'Uptime', value: '99.99%', icon: <Zap className="text-jasper-green" /> },
  { label: 'Data Processed', value: '50PB', icon: <Database className="text-jasper-green" /> },
];

function CodeIcon() {
  return (
    <svg className="w-6 h-6 text-jasper-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

const About: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 bg-jasper-black relative overflow-hidden">
       {/* Tech Background Pattern */}
       <div className="absolute inset-0 opacity-5 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:24px_24px]"></div>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span className="text-jasper-green">?</span> WHO IS JASPER
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed font-mono">
              <p>
                Jasper Coding isn't just a dev shop. We are a collective of algorithmic architects and UI purists obsessed with performance.
              </p>
              <p>
                Born in the void of the terminal, we construct digital experiences that prioritize speed, aesthetics, and accessibility. We don't just write code; we compile the future.
              </p>
              <div className="mt-8 p-4 bg-jasper-dark border-l-2 border-jasper-green">
                <p className="text-sm italic text-gray-300">
                  "Simplicity is the ultimate sophistication. Complexity is a bug."
                </p>
              </div>
            </div>
            
            <div className="mt-8 flex gap-4">
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, '#contact')}
                className="text-jasper-green border-b border-jasper-green hover:text-white hover:border-white transition-all pb-1 cursor-pointer"
              >
                Read Documentation ->
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-6 bg-jasper-dark border border-jasper-dim hover:border-jasper-green transition-all duration-300 group">
                  <div className="mb-4 bg-jasper-black w-12 h-12 flex items-center justify-center rounded-full border border-jasper-dim group-hover:border-jasper-green transition-colors">
                    {stat.icon}
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;