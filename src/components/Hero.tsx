import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, MessageCircle, Download, Mail, Github, Linkedin, Globe, ChevronDown } from 'lucide-react';
import TypedComponent from './TypedComponent';
import { stats } from '../data/portfolio';

const Hero: React.FC = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.number;
        const duration = 2000;
        const increment = end / (duration / 50);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(start);
            return newCounters;
          });
        }, 50);
      });
    };

    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { href: 'mailto:rajankumar39258@gmail.com', icon: Mail, label: 'Email' },
    { href: 'https://github.com/Rajanwa', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/rajan-kumar-6280b8206', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://685fd0c1f9c1d6b112d76b20--celebrated-faloodeh-8d6048.netlify.app/', icon: Globe, label: 'Portfolio' },
  ];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-primary-500/10 to-purple-500/10"
            style={{
              width: `${80 + i * 20}px`,
              height: `${80 + i * 20}px`,
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 20, 0],
              rotate: [0, 120, 240, 360],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center space-x-2"
            >
            
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl lg:text-7xl font-black"
            >
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Rajan Kumar
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl lg:text-4xl font-semibold text-primary-400 h-16"
            >
              <TypedComponent
                strings={[
                  'Data Analyst',
                  'Python & SQL Expert',
                  'VBA Automation',
                  'Machine Learning',
                  'Data Visualization Expert'
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-secondary-300 leading-relaxed max-w-2xl"
            >
              Passionate Data Analytics professional with expertise in transforming complex data into actionable insights. 
              Specialized in Python, Excel, VBA Automation, SQL, Power BI, Machine Learning, and Business Intelligence tools with 1+ years of experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToProjects}
                className="group flex items-center space-x-2 bg-gradient-primary px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                <Eye size={20} />
                <span>View My Work</span>
              </button>
              <button
                onClick={scrollToContact}
                className="flex items-center space-x-2 bg-primary-500/20 border-2 border-primary-500 px-8 py-4 rounded-xl font-semibold text-primary-400 hover:bg-primary-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <MessageCircle size={20} />
                <span>Let's Connect</span>
              </button>
              <a
                href="/resume.pdf"
                download
                className="flex items-center space-x-2 bg-transparent border-2 border-secondary-600 px-8 py-4 rounded-xl font-semibold text-secondary-300 hover:bg-secondary-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-primary-500/20"
                >
                  <div className="text-3xl font-bold text-primary-400">
                    {counters[index]}{stat.suffix}
                  </div>
                  <div className="text-sm text-secondary-400 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image and Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center space-y-8"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500 rounded-full opacity-30 blur"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary-500 shadow-2xl shadow-primary-500/25"
              >
                <img
                  src="/Profile.jpg"
                  alt="Rajan Kumar"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-white/5 backdrop-blur-sm border border-primary-500/30 rounded-xl flex items-center justify-center text-secondary-300 hover:text-primary-400 hover:bg-primary-500/20 transition-all duration-300 group"
                    title={link.label}
                  >
                    <Icon size={24} className="group-hover:scale-110 transition-transform" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-secondary-400"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-8 border-2 border-primary-500 rounded-full flex items-center justify-center"
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;