import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Education = () => {
  const education = {
    degree: 'Ingénieur en Génie Informatique (En cours)',
    institution: 'École Marocaine des Sciences de l\'Ingénieur (EMSI)',
    location: 'Casablanca, Morocco',
    period: '2022 - 2025 (En cours)',
    description: 'Formation d\'ingénieur en génie informatique avec spécialisation en développement logiciel, programmation orientée objet, bases de données et technologies web.',
    highlights: [
      'Spécialisation en développement web et programmation orientée objet',
      'Maîtrise des technologies Java/Spring Boot et Angular',
      'Projets pratiques en bases de données et architecture logicielle',
      'Formation aux méthodologies de développement modernes'
    ]
  };

  const certifications = [
    {
      title: 'Java Programming and Software Engineering Fundamentals',
      provider: 'Coursera',
      issuer: 'Duke University',
      date: '2023',
      credentialId: 'Coursera Certificate',
      skills: ['Java', 'Programmation Orientée Objet', 'Algorithmes', 'Structures de Données'],
      link: 'https://coursera.org/verify/certificate'
    },
    {
      title: 'Introduction to Git and GitHub',
      provider: 'Coursera',
      issuer: 'Google',
      date: '2023',
      credentialId: 'Coursera Certificate',
      skills: ['Git', 'GitHub', 'Contrôle de Version', 'Collaboration'],
      link: 'https://coursera.org/verify/certificate'
    },
    {
      title: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift',
      provider: 'Coursera',
      issuer: 'IBM',
      date: '2024',
      credentialId: 'Coursera Certificate',
      skills: ['Docker', 'Kubernetes', 'OpenShift', 'Containerisation'],
      link: 'https://coursera.org/verify/certificate'
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12">
          <h2 className="section-title">Education & Certifications</h2>
          <div className="font-mono text-terminal-green text-sm mb-4">
            $ cat academic_record.json
          </div>
        </div>

        <div className="space-y-8">
          {/* Education */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="text-terminal-text text-xs ml-4">degree.info</span>
            </div>
            
            <div className="terminal-content">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-terminal-green/10 border border-terminal-green rounded-lg">
                  <GraduationCap className="w-8 h-8 text-terminal-green" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {education.degree}
                  </h3>
                  <div className="space-y-2 text-terminal-text">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{education.institution}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-terminal-gray">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {education.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {education.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-terminal-text leading-relaxed mb-4">
                {education.description}
              </p>

              <div>
                <h4 className="text-terminal-green font-mono text-sm mb-3">Highlights:</h4>
                <ul className="space-y-2">
                  {education.highlights.map((highlight, index) => (
                    <li key={index} className="text-terminal-text text-sm flex items-start gap-2">
                      <span className="text-terminal-green mt-1">▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="text-terminal-text text-xs ml-4">certifications.json</span>
            </div>
            
            <div className="terminal-content space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-6 h-6 text-terminal-green" />
                <h3 className="text-lg font-semibold text-white">Professional Certifications</h3>
              </div>

              {certifications.map((cert, index) => (
                <div key={index} className="border-l-4 border-terminal-cyan pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-terminal-cyan rounded-full"></div>
                  
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {cert.title}
                        </h4>
                        <div className="text-sm text-terminal-gray">
                          <span className="font-medium">{cert.provider}</span> • {cert.issuer}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-terminal-cyan font-mono text-sm">
                          {cert.date}
                        </div>
                        <div className="text-xs text-terminal-gray font-mono">
                          ID: {cert.credentialId}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-xs text-terminal-text font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <a
                      href={cert.link}
                      className="inline-flex items-center gap-2 text-terminal-cyan hover:text-cyan-400 transition-colors font-mono text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Credential
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-terminal-gray font-mono text-sm">
            $ echo "Continuous learning is key to staying current..."
          </p>
          <div className="mt-2">
            <span className="text-terminal-green font-mono">Continuous learning is key to staying current...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;