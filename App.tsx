import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-jasper-black text-white selection:bg-jasper-green selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Terminal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
