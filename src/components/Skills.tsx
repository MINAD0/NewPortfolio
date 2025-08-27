import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

const Skills = () => {
  const [openSections, setOpenSections] = useState<string[]>(['languages']);

  const skillCategories = {
    languages: {
      title: 'Langages & Frameworks',
      skills: ['Java 8+', 'Spring Boot', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap']
    },
    database: {
      title: 'Bases de données',
      skills: ['PostgreSQL', 'MySQL', 'SQL', 'JPA/Hibernate', 'Database Design']
    },
    devops: {
      title: 'DevOps & Cloud',
      skills: ['Docker', 'Kubernetes', 'OpenShift', 'GitLab CI/CD', 'Linux', 'Git']
    },
    apis: {
      title: 'APIs & Intégration',
      skills: ['REST APIs', 'JSON', 'XML', 'Postman', 'Swagger/OpenAPI']
    },
    tools: {
      title: 'Outils & IDEs',
      skills: ['IntelliJ IDEA', 'VS Code', 'Eclipse', 'Git', 'Maven', 'npm']
    },
    methodologies: {
      title: 'Méthodologies',
      skills: ['Agile/Scrum', 'MVC Pattern', 'Clean Code', 'Version Control']
    }
  };

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="container mx-auto max-w-4xl w-full">
        <div className="mb-12">
          <h2 className="section-title">Technical Skills</h2>
          <div className="font-mono text-terminal-green text-sm mb-4">
            $ list-skills --detailed
          </div>
        </div>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-terminal-text text-xs ml-2 sm:ml-4">skills.json</span>
          </div>
          
          <div className="terminal-content space-y-3 sm:space-y-4">
            {Object.entries(skillCategories).map(([key, category]) => (
              <div key={key} className="border-l-2 border-gray-700 pl-3 sm:pl-4">
                <button
                  onClick={() => toggleSection(key)}
                  className="flex items-center gap-2 text-terminal-green hover:text-green-400 transition-colors mb-2 sm:mb-3 font-mono text-sm sm:text-base w-full text-left"
                >
                  {openSections.includes(key) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                  <span className="font-semibold flex-1">{category.title}</span>
                  <span className="text-terminal-gray text-xs sm:text-sm">({category.skills.length})</span>
                </button>
                
                {openSections.includes(key) && (
                  <div className="ml-4 sm:ml-6 space-y-2 animate-fade-in">
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {category.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="skill-tag text-xs sm:text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-terminal-gray font-mono text-xs sm:text-sm">
            $ echo "Always learning, always improving..."
          </p>
          <div className="mt-2">
            <span className="text-terminal-green font-mono text-xs sm:text-sm">Always learning, always improving...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;