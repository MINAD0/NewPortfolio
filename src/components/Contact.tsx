import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { sendEmail, initEmailJS, type ContactFormData } from '../services/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Initialize EmailJS when component mounts
  React.useEffect(() => {
    initEmailJS();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const success = await sendEmail(formData as ContactFormData);
      
      if (success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setSubmitError('Failed to send message. Please try again or contact me directly via email.');
      }
    } catch (error) {
      setSubmitError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'al0mahdi.ait1ounzar@gmail.com',
      href: 'mailto:al0mahdi.ait1ounzar@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Casablanca, Morocco',
      href: null
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/al-mahdi-a-bb9232232',
      href: 'https://www.linkedin.com/in/al-mahdi-a-bb9232232'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/MINAD0',
      href: 'https://github.com/MINAD0'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-950">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12">
          <h2 className="section-title">Get In Touch</h2>
          <div className="font-mono text-terminal-green text-sm mb-4">
            $ send-message --to="al0mahdi.ait1ounzar@gmail.com"
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-terminal-text text-xs ml-4">contact.info</span>
              </div>
              
              <div className="terminal-content space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded border border-gray-700 hover:border-terminal-green transition-colors">
                    <div className="p-2 bg-terminal-green/10 rounded">
                      <item.icon className="w-5 h-5 text-terminal-green" />
                    </div>
                    <div>
                      <div className="text-terminal-gray text-sm font-mono">
                        {item.label}:
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-terminal-cyan hover:text-cyan-400 transition-colors font-mono text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-terminal-text font-mono text-sm">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-terminal-text text-xs ml-4">availability.status</span>
              </div>
              
              <div className="terminal-content">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-terminal-green rounded-full animate-pulse"></div>
                  <span className="text-terminal-green font-mono">Available for opportunities</span>
                </div>
                
                <div className="space-y-2 text-sm text-terminal-text">
                  <p>🎯 Ingénieur diplômé, à la recherche de nouvelles opportunités</p>
                  <p>💼 Intéressé par des postes Junior/Entry‑level en développement</p>
                  <p>🌍 Disponible pour CDI/CDD, missions et projets</p>
                  <p>⚡ Diplôme obtenu en 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="text-terminal-text text-xs ml-4">message_form.jsx</span>
            </div>
            
            <div className="terminal-content">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-terminal-green mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-terminal-green mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-terminal-text">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitError && (
                    <div className="bg-red-900/20 border border-red-500 rounded p-3">
                      <p className="text-red-400 text-sm font-mono">
                        Error: {submitError}
                      </p>
                    </div>
                  )}

                  <div>
                    <label className="block text-terminal-green font-mono text-sm mb-2">
                      Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-2 text-terminal-text focus:border-terminal-green focus:outline-none font-mono"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-terminal-green font-mono text-sm mb-2">
                      Email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-2 text-terminal-text focus:border-terminal-green focus:outline-none font-mono"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-terminal-green font-mono text-sm mb-2">
                      Message:
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-2 text-terminal-text focus:border-terminal-green focus:outline-none font-mono resize-vertical"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded font-mono transition-all duration-200 ${
                      isSubmitting
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        : 'bg-terminal-green text-black hover:bg-green-400'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Setup Instructions */}
        <div className="mt-8 terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-terminal-text text-xs ml-4">setup_instructions.md</span>
          </div>
          
          <div className="terminal-content">
            <div className="bg-yellow-900/20 border border-yellow-500 rounded p-4">
              <h4 className="text-yellow-400 font-mono text-sm mb-2">⚠️ Setup Required</h4>
              <p className="text-terminal-text text-sm mb-3">
                To enable email functionality, you need to configure EmailJS:
              </p>
              <ol className="text-terminal-text text-sm space-y-1 list-decimal list-inside">
                <li>Create a free account at <a href="https://www.emailjs.com/" target="_blank" className="text-terminal-cyan hover:text-cyan-400">emailjs.com</a></li>
                <li>Create an email service (Gmail, Outlook, etc.)</li>
                <li>Create an email template with variables: from_name, from_email, message, to_name</li>
                <li>Update the configuration in <code className="bg-gray-800 px-1 rounded">src/services/emailService.ts</code></li>
              </ol>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-terminal-gray font-mono text-sm">
            $ echo "Let's build something amazing together!"
          </p>
          <div className="mt-2">
            <span className="text-terminal-green font-mono">Let's build something amazing together!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
