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
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="section-title">About Me</h2>
          <div className="font-mono text-terminal-green text-sm mb-4">
            $ cat about.md
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-terminal-text text-xs ml-4">profile.java</span>
              </div>
              <div className="terminal-content">
                <pre className="text-sm">
{`/**
 * @author AL-MAHDI AIT-OUNZAR
 * @title Ingénieur en Génie Informatique
 * @specialization Full Stack Developer
 */
public class Developer {
    
    private String passion = "Développement d'applications web modernes, performantes et sécurisées";
    
    private List<String> expertise = Arrays.asList(
        "Migration de systèmes legacy",
        "Optimisation SQL et bases de données",
        "Intégration DevOps (Docker, Kubernetes)",
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

            <p className="text-terminal-text leading-relaxed">
              Ingénieur en génie informatique passionné par le développement d'applications web. 
              Spécialisé en Java/Spring Boot et Angular avec une forte expertise en bases de données 
              PostgreSQL et technologies DevOps (Docker, Kubernetes, OpenShift).
            </p>

            <p className="text-terminal-text leading-relaxed">
              Expérience pratique acquise lors de stages et projets académiques, avec une approche 
              méthodique du développement logiciel et une passion pour l'apprentissage continu 
              des nouvelles technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-terminal-green transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <item.icon className="w-6 h-6 text-terminal-green group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-terminal-text text-sm leading-relaxed">
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