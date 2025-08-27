import React from 'react';
import { Code2, Database, Cloud, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Expertise in Java/Spring Boot backend and Angular frontend development'
    },
    {
      icon: Database,
      title: 'Database Optimization',
      description: 'PostgreSQL performance tuning and SQL query optimization'
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'Docker, Kubernetes, CI/CD pipelines, and cloud infrastructure'
    },
    {
      icon: Zap,
      title: 'System Migration',
      description: 'Legacy system modernization and performance improvements'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl w-full">
        <div className="mb-12">
          <h2 className="section-title">About Me</h2>
          <div className="font-mono text-terminal-green text-sm mb-4">
            $ cat about.md
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-terminal-text text-xs ml-2 sm:ml-4">profile.java</span>
              </div>
              <div className="terminal-content">
                <pre className="text-xs sm:text-sm overflow-x-auto">
{`/**
 * @author AL-MAHDI AIT-OUNZAR
 * @title Ingénieur en Génie Informatique
 * @specialization Full Stack Developer
 */
public class Developer {
    
    private String passion = 
        "Développement d'applications web 
         modernes, performantes et sécurisées";
    
    private List<String> expertise = Arrays.asList(
        "Migration de systèmes legacy",
        "Optimisation SQL et bases de données",
        "Intégration DevOps",
        "Architecture microservices"
    );
    
    public void buildAmazingThings() {
        while (learning) {
            code();
            optimize();
            deploy();
        }
    }
}`}
                </pre>
              </div>
            </div>

            <p className="text-terminal-text leading-relaxed text-sm sm:text-base">
              Ingénieur en génie informatique passionné par le développement d'applications web. 
              Spécialisé en Java/Spring Boot et Angular avec une forte expertise en bases de données 
              PostgreSQL et technologies DevOps (Docker, Kubernetes, OpenShift).
            </p>

            <p className="text-terminal-text leading-relaxed text-sm sm:text-base">
              Expérience pratique acquise lors de stages et projets académiques, avec une approche 
              méthodique du développement logiciel et une passion pour l'apprentissage continu 
              des nouvelles technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-900 border border-gray-700 rounded-lg p-4 sm:p-6 hover:border-terminal-green transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-terminal-green group-hover:scale-110 transition-transform flex-shrink-0" />
                  <h3 className="font-semibold text-white text-sm sm:text-base">{item.title}</h3>
                </div>
                <p className="text-terminal-text text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;