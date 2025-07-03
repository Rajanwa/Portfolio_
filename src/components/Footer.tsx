import React from 'react';
import { Mail, Github, Linkedin, Globe, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { href: 'mailto:rajankumar39258@gmail.com', icon: Mail, label: 'Email' },
    { href: 'https://github.com/Rajanwa', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/rajan-kumar-6280b8206', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://685fd0c1f9c1d6b112d76b20--celebrated-faloodeh-8d6048.netlify.app/', icon: Globe, label: 'Portfolio' },
  ];

  const quickLinks = ['Home', 'About', 'Experience', 'Skills', 'Projects'];
  const services = ['Data Analysis', 'Business Intelligence', 'Machine Learning', 'Data Visualization'];
  const contactLinks = ['Get in Touch', 'Email Me', 'Download CV'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary-900 border-t border-primary-500/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                RK
              </div>
              <span className="text-xl font-bold text-white">Rajan Kumar</span>
            </div>
            <p className="text-secondary-400 leading-relaxed mb-6 max-w-xs">
              Data Analytics Professional passionate about transforming data into actionable insights.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 bg-white/5 border border-primary-500/30 rounded-lg flex items-center justify-center text-secondary-400 hover:text-primary-400 hover:bg-primary-500/20 transition-all duration-300 hover:scale-110"
                    title={link.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-secondary-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-secondary-400 text-sm cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-secondary-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Get in Touch
                </button>
              </li>
              <li>
                <a
                  href="mailto:rajankumar39258@gmail.com"
                  className="text-secondary-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Email Me
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="text-secondary-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-primary-500/10 text-center">
          <p className="text-secondary-400 text-sm">
            &copy; 2025 Rajan Kumar. All rights reserved. Made with{' '}
            <Heart size={16} className="inline text-red-500 mx-1" />{' '}
            and lots of data.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;