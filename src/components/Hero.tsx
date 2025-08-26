import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  
  const commands = [
    '> whoami',
    'AL-MAHDI AIT-OUNZAR',
    '> echo $ROLE',
    'Ingénieur en Génie Informatique | Full Stack Developer',
    '> cat specializations.txt',
    'Java • Spring Boot • Angular • PostgreSQL • Docker',
    '> ls skills/',
    'Backend: Java 8+, Spring Boot, REST APIs, JPA/Hibernate',
    'Frontend: Angular, TypeScript, HTML5/CSS3, Bootstrap',
    'Database: PostgreSQL, MySQL, SQL',
    'DevOps: Docker, Kubernetes, OpenShift, GitLab CI/CD',
    '> status',
    'Disponible pour nouvelles opportunités 🚀'
  ];

  useEffect(() => {
    if (currentLineIndex < commands.length) {
      const currentLine = commands[currentLineIndex];
      
      if (currentCharIndex < currentLine.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => prev + currentLine[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        }, currentLineIndex % 2 === 0 ? 50 : 30); // Slower for commands, faster for output
        
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setDisplayText(prev => prev + '\n');
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 800);
        
        return () => clearTimeout(timer);
      }
    }
  }, [currentCharIndex, currentLineIndex, commands]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto max-w-4xl">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-terminal-text text-xs ml-4">
              almahdi@portfolio:~$
            </span>
          </div>
          
          <div className="terminal-content min-h-[400px] flex flex-col justify-center">
            <pre className="text-terminal-green whitespace-pre-wrap font-mono text-sm md:text-base leading-relaxed">
              {displayText}
              <span className="animate-pulse">█</span>
            </pre>
          </div>
        </div>

        <div className="text-center mt-8 space-y-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={scrollToAbout}
              className="btn-primary"
            >
              Explore My Work
            </button>
            <a 
              href="#contact" 
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get In Touch
            </a>
          </div>
          
          <p className="text-terminal-gray font-mono text-sm">
            Press <kbd className="bg-gray-800 px-2 py-1 rounded text-terminal-green">Ctrl + Shift + C</kbd> to open terminal
          </p>
        </div>

        <div className="flex justify-center mt-12">
          <button 
            onClick={scrollToAbout}
            className="text-terminal-green hover:text-green-400 transition-colors animate-bounce"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;