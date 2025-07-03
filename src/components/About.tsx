import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Award, TrendingUp, Calendar, Wrench } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'B.Tech in Information Technology',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Briefcase,
      title: 'Experience',
      description: '1+ Years in Data Analytics',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Award,
      title: 'Specialization',
      description: 'Data Analyst & VBA Automation',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const statCards = [
    {
      icon: TrendingUp,
      number: 10,
      label: 'Projects Completed',
      percentage: 95,
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Calendar,
      number: 1,
      label: 'Years Experience',
      percentage: 75,
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Wrench,
      number: 16,
      label: 'Technologies',
      percentage: 90,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold mb-4 border border-primary-500/30">
            Get to know me
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-secondary-300 max-w-2xl mx-auto">
            Discover my journey, skills, and passion for data analytics
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-primary-500/20">
              <h3 className="text-2xl font-bold text-primary-400 mb-6">
                Data Analytics Professional
              </h3>
              <div className="space-y-4 text-secondary-300 leading-relaxed">
                <p>
                  I'm a dedicated Data Analytics professional with a strong foundation in statistical analysis, 
                  machine learning, and business intelligence. My passion lies in uncovering hidden patterns 
                  in data and translating complex datasets into compelling stories that drive business decisions.
                </p>
                <p>
                  With expertise in Python, SQL, VBA Automation, and various BI tools, I've successfully delivered 
                  data-driven solutions across multiple domains. I enjoy working on challenging problems 
                  that require creative analytical thinking and innovative approaches.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-primary-500/5 rounded-xl border border-primary-500/10 hover:bg-primary-500/10 transition-all duration-300 group hover:translate-x-2"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{highlight.title}</h4>
                        <p className="text-secondary-400 text-sm">{highlight.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {statCards.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 group hover:translate-y-[-4px]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon size={28} className="text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary-400">
                          {stat.number}+
                        </div>
                        <div className="text-secondary-400 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full h-2 bg-secondary-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${stat.percentage}%` } : {}}
                        transition={{ duration: 1.5, delay: 1 + index * 0.2, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${stat.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                      </motion.div>
                    </div>
                    <div className="text-right text-sm text-secondary-400 mt-1">
                      {stat.percentage}%
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;