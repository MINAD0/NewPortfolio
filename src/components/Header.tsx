import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const exportToPDF = () => {
    window.print();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-terminal-bg/95 backdrop-blur-sm border-b border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 min-w-0">
            <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-terminal-green flex-shrink-0" />
            <span className="font-mono text-terminal-green font-bold text-sm sm:text-base lg:text-lg truncate">
              AL-MAHDI@dev:~$
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-mono text-xs lg:text-sm transition-colors duration-200 whitespace-nowrap ${
                  activeSection === item.id 
                    ? 'text-terminal-green' 
                    : 'text-terminal-text hover:text-terminal-green'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={exportToPDF}
              className="btn-primary text-xs no-print whitespace-nowrap"
            >
              Export CV
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-terminal-text hover:text-terminal-green transition-colors flex-shrink-0"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700 bg-terminal-bg">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left font-mono text-sm transition-colors duration-200 py-2 ${
                    activeSection === item.id 
                      ? 'text-terminal-green' 
                      : 'text-terminal-text hover:text-terminal-green'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={exportToPDF}
                className="btn-primary text-xs w-fit no-print mt-2"
              >
                Export CV
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;