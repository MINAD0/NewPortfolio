import React from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 'exp_002',
      timestamp: '2024-07-01',
      level: 'INFO',
      company: 'EMSI Casablanca',
      position: 'Projet de Fin d\'Études',
      location: 'Casablanca, Morocco',
      duration: 'Juillet 2024 - En cours',
      description: 'Développement d\'une application web complète avec Java/Spring Boot et Angular',
      achievements: [
        'Conception et développement d\'une architecture full-stack moderne',
        'Implémentation d\'APIs REST avec Spring Boot et JPA/Hibernate',
        'Développement d\'interface utilisateur responsive avec Angular',
        'Intégration de base de données PostgreSQL',
        'Mise en place de tests unitaires et d\'intégration'
      ],
      technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'PostgreSQL', 'JPA/Hibernate'],
      status: 'COMPLETED'
    },
    {
      id: 'exp_001',
      timestamp: '2023-06-01',
      level: 'INFO',
      company: 'Projets Académiques',
      position: 'Étudiant Développeur',
      location: 'EMSI Casablanca',
      duration: '2022 - 2024',
      description: 'Développement de projets académiques et apprentissage des technologies modernes',
      achievements: [
        'Maîtrise des fondamentaux Java et programmation orientée objet',
        'Développement d\'applications web avec Spring Boot',
        'Création d\'interfaces utilisateur avec Angular et TypeScript',
        'Gestion de bases de données relationnelles',
        'Apprentissage des bonnes pratiques de développement'
      ],
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'MySQL', 'Git'],
      status: 'ACTIVE'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12">
          <h2 className="section-title">Professional Experience</h2>
          <div className="font-mono text-terminal-green text-sm mb-4">
            $ tail -f /var/log/career.log
          </div>
        </div>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-terminal-text text-xs ml-4">career.log</span>
          </div>
          
          <div className="terminal-content space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="border-l-4 border-terminal-green pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-terminal-green rounded-full"></div>
                
                <div className="space-y-3">
                  {/* Log Header */}
                  <div className="font-mono text-sm">
                    <span className="text-terminal-gray">[{exp.timestamp}]</span>{' '}
                    <span className="text-terminal-green">{exp.level}:</span>{' '}
                    <span className="text-terminal-cyan">Started position at {exp.company}</span>
                  </div>

                  {/* Position Details */}
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-terminal-gray">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      
                      <div className={`px-3 py-1 rounded text-xs font-mono ${
                        exp.status === 'ACTIVE' 
                          ? 'bg-terminal-green/20 text-terminal-green border border-terminal-green' 
                          : 'bg-gray-700 text-terminal-gray border border-gray-600'
                      }`}>
                        {exp.status}
                      </div>
                    </div>

                    <p className="text-terminal-text mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-terminal-green font-mono text-sm">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, index) => (
                          <li key={index} className="text-terminal-text text-sm flex items-start gap-2">
                            <span className="text-terminal-green mt-1">▸</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-xs text-terminal-text font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="font-mono text-terminal-gray text-sm pt-4">
              $ echo "Ready for the next challenge..."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;