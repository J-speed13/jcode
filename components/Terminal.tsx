import React, { useState, useRef, useEffect } from 'react';
import { generateAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Terminal as TerminalIcon, Minimize2, Maximize2, RefreshCw } from 'lucide-react';

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Jasper AI Terminal v3.0 initialized. Awaiting input...', timestamp: Date.now() }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await generateAIResponse(input);

    const aiMessage: ChatMessage = {
      role: 'model',
      text: responseText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };

  return (
    <section id="terminal" className="py-24 bg-jasper-black relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute right-0 top-20 w-64 h-64 bg-jasper-green/5 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-20 w-96 h-96 bg-jasper-green/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                <span className="text-jasper-green">~</span> INTERACTIVE TERMINAL
            </h2>
            <p className="text-gray-400 font-mono text-sm">Ask Jasper about code, tech stack, or the meaning of life.</p>
        </div>

        <div className="bg-jasper-dark rounded-lg border border-jasper-dim shadow-2xl overflow-hidden backdrop-blur-sm bg-opacity-90">
          {/* Terminal Header */}
          <div className="bg-[#1a1b1e] px-4 py-2 flex items-center justify-between border-b border-jasper-dim">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-500 text-xs font-mono flex items-center gap-2">
                <TerminalIcon className="w-3 h-3" />
                bash — 80x24
            </div>
          </div>

          {/* Terminal Body */}
          <div className="h-[400px] overflow-y-auto p-6 font-mono text-sm space-y-4 bg-black/80">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded p-3 ${
                  msg.role === 'user' 
                    ? 'bg-jasper-dim/40 text-jasper-neon border border-jasper-green/20' 
                    : 'text-gray-300'
                }`}>
                  <span className="block text-xs opacity-50 mb-1">
                    {msg.role === 'user' ? 'root@user:~$' : 'jasper@system:~>'}
                  </span>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="text-jasper-green animate-pulse flex items-center gap-1">
                    <span>Processing</span>
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce delay-100">.</span>
                    <span className="animate-bounce delay-200">.</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-[#1a1b1e] border-t border-jasper-dim">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <span className="text-jasper-green font-bold pt-2">{'>'}</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter command..."
                className="flex-1 bg-transparent border-none text-white focus:ring-0 focus:outline-none font-mono py-2"
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="p-2 text-jasper-green hover:text-white hover:bg-jasper-green/20 rounded transition-colors disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
