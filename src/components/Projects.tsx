import React, { useState } from 'react';
import { Github, ExternalLink, Play, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = [
    {
      id: 'project_001',
      title: 'Application de Gestion de Tâches',
      description: 'Application web de gestion de tâches développée avec Spring Boot et Angular. Interface utilisateur moderne et responsive.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Bootstrap'],
      category: 'fullstack',
      github: 'https://github.com/MINAD0',
      demo: null,
      status: 'Development',
      features: [
        'Authentification et autorisation utilisateur',
        'CRUD complet pour la gestion des tâches',
        'Interface responsive avec Angular',
        'API REST avec Spring Boot',
        'Base de données PostgreSQL'
      ]
    },
    {
      id: 'project_002',
      title: 'Système de Gestion Universitaire',
      description: 'Application de gestion des étudiants et cours pour établissement universitaire. Développée dans le cadre d\'un projet académique.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'JPA'],
      category: 'fullstack',
      github: 'https://github.com/MINAD0',
      demo: null,
      status: 'Development',
      features: [
        'Gestion des étudiants et professeurs',
        'Planning des cours et salles',
        'Interface d\'administration',
        'Rapports et statistiques',
        'Architecture MVC avec Spring Boot'
      ]
    },
    {
      id: 'project_003',
      title: 'Application E-Commerce',
      description: 'Plateforme e-commerce simple développée pour apprendre les technologies web modernes et les bonnes pratiques de développement.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
      category: 'devops',
      github: 'https://github.com/MINAD0',
      status: 'Beta',
      features: [
        'Catalogue de produits avec recherche',
        'Panier d\'achat et commandes',
        'Gestion des utilisateurs',
        'Interface d\'administration',
        'Containerisation avec Docker'
      ]
    },
    {
      id: 'project_004',
      title: 'API REST avec Documentation',
      description: 'Développement d\'une API REST complète avec documentation Swagger pour un système de gestion de bibliothèque.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Swagger', 'JPA'],
      category: 'backend',
      github: 'https://github.com/MINAD0',
      status: 'Beta',
      features: [
        'API REST complète avec Spring Boot',
        'Documentation automatique avec Swagger',
        'Gestion des livres et emprunts',
        'Authentification JWT',
        'Tests unitaires et d\'intégration'
      ]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'devops', label: 'DevOps', count: projects.filter(p => p.category === 'devops').length },
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'production': return 'text-terminal-green border-terminal-green bg-terminal-green/10';
      case 'development': return 'text-terminal-cyan border-terminal-cyan bg-terminal-cyan/10';
      case 'beta': return 'text-yellow-400 border-yellow-400 bg-yellow-400/10';
      default: return 'text-terminal-gray border-gray-600 bg-gray-700/50';
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="container mx-auto max-w-6xl w-full">
        <div className="mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <div className="font-mono text-terminal-green text-sm mb-8">
            $ ls -la ~/projects/
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 text-terminal-gray font-mono text-xs sm:text-sm w-full sm:w-auto mb-2 sm:mb-0">
              <Filter className="w-4 h-4" />
              Filter:
            </div>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-3 sm:px-4 py-2 rounded border font-mono text-xs sm:text-sm transition-all duration-200 ${
                  selectedFilter === filter.id
                    ? 'border-terminal-green bg-terminal-green/10 text-terminal-green'
                    : 'border-gray-600 text-terminal-gray hover:border-terminal-green hover:text-terminal-green'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-terminal-green transition-colors">
                    {project.title}
                  </h3>
                  <div className={`inline-block px-2 py-1 rounded border text-xs font-mono ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                </div>
                
                <div className="flex gap-2 self-start sm:self-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-terminal-gray hover:text-terminal-green transition-colors rounded hover:bg-gray-800"
                      title="View Source Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-terminal-gray hover:text-terminal-cyan transition-colors rounded hover:bg-gray-800"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-terminal-text leading-relaxed mb-4 text-sm sm:text-base">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-terminal-green font-mono text-xs sm:text-sm mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-terminal-text text-xs sm:text-sm flex items-start gap-2">
                      <span className="text-terminal-green mt-1">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-xs text-terminal-text font-mono hover:border-terminal-green transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Run Project Button (Easter Egg) */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <button className="flex items-center gap-2 text-terminal-gray hover:text-terminal-green transition-colors font-mono text-xs sm:text-sm">
                  <Play className="w-4 h-4" />
                  <span>$ npm start</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-terminal-gray font-mono text-xs sm:text-sm">
            $ echo "More projects available on GitHub..."
          </p>
          <a
            href="https://github.com/al-mahdi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-terminal-cyan hover:text-cyan-400 transition-colors font-mono text-sm"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;