import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Trophy } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'internship':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'academic':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'full-time':
        return 'Full-time';
      case 'part-time':
        return 'Part-time';
      case 'internship':
        return 'Internship';
      case 'freelance':
        return 'Freelance';
      case 'academic':
        return 'Academic';
      default:
        return type;
    }
  };

  return (
    <section id="experience" className="py-20 bg-secondary-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold mb-4 border border-primary-500/30">
            What I Have Done So Far
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-secondary-300 max-w-2xl mx-auto">
            My professional journey and the impact I've made across different roles
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-6 top-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-secondary-900 z-10"></div>

                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 group hover:translate-y-[-4px]">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 space-y-4 md:space-y-0">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                        {experience.title}
                      </h3>
                      <div className="text-xl font-semibold text-primary-400 mb-4">
                        {experience.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-secondary-400 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(experience.type)}`}>
                      {getTypeLabel(experience.type)}
                    </span>
                  </div>

                  <p className="text-secondary-300 leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="flex items-center space-x-2 text-white font-semibold mb-4">
                      <Trophy size={20} className="text-primary-500" />
                      <span>Key Achievements</span>
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: (index * 0.2) + (achievementIndex * 0.1) + 0.5 }}
                          className="text-secondary-300 pl-6 relative leading-relaxed"
                        >
                          <span className="absolute left-0 top-2 w-2 h-2 bg-primary-400 rounded-full"></span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: (index * 0.2) + (techIndex * 0.05) + 0.8 }}
                        className="px-3 py-1 bg-primary-500/20 text-primary-400 border border-primary-500/30 rounded-full text-sm font-medium hover:bg-primary-500/30 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;