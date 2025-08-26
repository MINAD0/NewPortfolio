import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Terminal from './components/Terminal';

function App() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.code === 'KeyC') {
        e.preventDefault();
        setShowTerminal(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-terminal-bg flex items-center justify-center">
        <div className="text-center">
          <div className="terminal-loader">
            <div className="text-terminal-green font-mono text-lg mb-4">
              Compiling portfolio...
            </div>
            <div className="w-64 bg-gray-800 rounded-full h-2">
              <div className="bg-terminal-green h-2 rounded-full loading-bar"></div>
            </div>
            <div className="text-terminal-text text-sm mt-2 font-mono">
              Loading components: [████████████] 100%
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <ScrollToTop />
      {showTerminal && <Terminal onClose={() => setShowTerminal(false)} />}
    </div>
  );
}

export default App;