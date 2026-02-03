import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-jasper-dark border-t border-jasper-dim/30 relative">
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-white">
          READY TO <span className="text-jasper-green">EXECUTE</span>?
        </h2>
        <p className="text-gray-400 mb-8">
          Let's discuss your next big project. Our encrypted channels are open.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-md mx-auto relative">
          {status === 'success' ? (
            <div className="absolute inset-0 bg-jasper-dark flex flex-col items-center justify-center z-20 border border-jasper-green/50 rounded-lg p-8 animate-in fade-in zoom-in duration-300">
              <CheckCircle className="w-16 h-16 text-jasper-green mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">TRANSMISSION COMPLETE</h3>
              <p className="text-gray-400 text-center">We have received your payload. Stand by for response.</p>
              <button 
                type="button" 
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm text-jasper-green hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : null}

          <div>
            <label htmlFor="email" className="block text-sm font-mono text-jasper-green mb-1">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full bg-black border border-jasper-dim rounded p-3 text-white focus:border-jasper-green focus:outline-none transition-colors placeholder-gray-700"
              placeholder="user@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-mono text-jasper-green mb-1">
              MESSAGE_PAYLOAD
            </label>
            <textarea
              id="message"
              rows={4}
              required
              className="w-full bg-black border border-jasper-dim rounded p-3 text-white focus:border-jasper-green focus:outline-none transition-colors placeholder-gray-700"
              placeholder="Describe requirements..."
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-jasper-green hover:bg-jasper-neon text-black font-bold py-3 rounded transition-all duration-300 transform hover:translate-y-[-2px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === 'sending' ? (
              <>
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                ENCRYPTING...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                TRANSMIT
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
