import React from 'react';
import { SERVICES } from '../constants';
import { Code, Cpu, Palette, Cloud } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  code: <Code className="w-10 h-10" />,
  cpu: <Cpu className="w-10 h-10" />,
  palette: <Palette className="w-10 h-10" />,
  cloud: <Cloud className="w-10 h-10" />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-jasper-dark relative border-t border-jasper-dim/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-jasper-green">/</span> SYSTEM CAPABILITIES
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm">
            Deploying high-end solutions across multiple vectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-jasper-black border border-jasper-dim hover:border-jasper-green transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity duration-300">
                {iconMap[service.icon]}
              </div>
              
              <div className="text-jasper-green mb-4 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                {iconMap[service.icon]}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-jasper-neon transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-jasper-green group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
