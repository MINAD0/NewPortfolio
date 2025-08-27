import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon } from 'lucide-react';

const Terminal = ({ onClose }: { onClose: () => void }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([
    'Welcome to AL-MAHDI terminal emulator v1.0.0',
    'Type "help" for available commands',
    ''
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  whoami     - Display user information',
      '  skills     - List technical skills',
      '  experience - Show work experience',
      '  projects   - List featured projects',
      '  contact    - Display contact information',
      '  clear      - Clear terminal',
      '  exit       - Close terminal',
      ''
    ],
    whoami: () => [
      'AL-MAHDI AIT-OUNZAR',
      'Ingénieur en Génie Informatique (En formation)',
      'Spécialisé en Java/Spring Boot & Angular',
      'Location: Casablanca, Morocco',
      ''
    ],
    skills: () => [
      'Technical Skills:',
      '├── Backend: Java 8+, Spring Boot, REST APIs',
      '├── Frontend: Angular, TypeScript, HTML5/CSS3',
      '├── Database: PostgreSQL, MySQL, JPA/Hibernate',
      '├── DevOps: Docker, Kubernetes, OpenShift, GitLab CI/CD',
      '└── Tools: IntelliJ IDEA, VS Code, Eclipse, Git, Maven',
      ''
    ],
    experience: () => [
      'Professional Experience:',
      '',
      '[2024] EMSI Casablanca - Projet de Fin d\'Études',
      '  • Développement application full-stack Java/Angular',
      '  • Implémentation APIs REST avec Spring Boot',
      '  • Interface responsive avec Angular et TypeScript',
      '',
      '[2022-2024] Projets Académiques',
      '  • Apprentissage Java et programmation orientée objet',
      '  • Développement d\'applications web modernes',
      '  • Maîtrise des bases de données relationnelles',
      ''
    ],
    projects: () => [
      'Featured Projects:',
      '',
      '1. Application de Gestion de Tâches',
      '   Stack: Java, Spring Boot, Angular, PostgreSQL',
      '   Features: CRUD, Interface responsive, API REST',
      '',
      '2. Système de Gestion Universitaire',
      '   Stack: Java, Spring Boot, Angular, MySQL',
      '   Features: Gestion étudiants, Planning, Rapports',
      '',
      '3. Application E-Commerce',
      '   Stack: Java, Spring Boot, Angular, PostgreSQL',
      '   Features: Catalogue, Panier, Administration',
      ''
    ],
    contact: () => [
      'Contact Information:',
      '  Email: al0mahdi.ait1ounzar@gmail.com',
      '  LinkedIn: linkedin.com/in/al-mahdi-a-bb9232232',
      '  GitHub: github.com/MINAD0',
      '  Location: Casablanca, Morocco',
      ''
    ],
    clear: () => {
      setOutput([]);
      return [];
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    const newOutput = [...output, `$ ${command}`];
    
    if (cmd === 'exit') {
      onClose();
      return;
    }

    if (commands[cmd as keyof typeof commands]) {
      const result = commands[cmd as keyof typeof commands]();
      newOutput.push(...result);
    } else if (cmd === '') {
      // Just add empty line
    } else {
      newOutput.push(`Command not found: ${command}`, 'Type "help" for available commands', '');
    }

    setOutput(newOutput);
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(-1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-gray-900 border border-terminal-green rounded-lg w-full max-w-4xl h-80 sm:h-96 max-h-[90vh] sm:max-h-[80vh] flex flex-col">
        {/* Terminal Header */}
        <div className="flex items-center justify-between p-2 sm:p-3 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-terminal-green flex-shrink-0" />
            <span className="text-terminal-green font-mono text-xs sm:text-sm truncate">
              almahdi@portfolio-terminal
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-terminal-gray hover:text-terminal-green transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Output */}
        <div
          ref={outputRef}
          className="flex-1 p-2 sm:p-4 overflow-y-auto font-mono text-xs sm:text-sm text-terminal-text"
        >
          {output.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap break-words">
              {line}
            </div>
          ))}
        </div>

        {/* Terminal Input */}
        <div className="border-t border-gray-700 p-2 sm:p-4">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-terminal-green font-mono flex-shrink-0">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-terminal-text font-mono outline-none caret-terminal-green text-xs sm:text-sm min-w-0"
              placeholder="Type a command..."
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terminal;