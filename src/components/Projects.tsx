import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Eye, ExternalLink, X } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { projects } from '../data/portfolio';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'trending-up': LucideIcons.TrendingUp,
      'dollar-sign': LucideIcons.DollarSign,
      'target': LucideIcons.Target,
      'users': LucideIcons.Users,
      'zap': LucideIcons.Zap,
      'clock': LucideIcons.Clock,
      'pie-chart': LucideIcons.PieChart,
      'trending-down': LucideIcons.TrendingDown,
      'shield': LucideIcons.Shield,
    };
    
    return iconMap[iconName] || LucideIcons.BarChart;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'planned':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 bg-secondary-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold mb-4 border border-primary-500/30">
            My Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-secondary-300 max-w-2xl mx-auto">
            Explore my latest data analytics and visualization projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-primary-500/20 overflow-hidden hover:border-primary-500/40 transition-all duration-300 group hover:translate-y-[-8px] cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <button className="flex items-center space-x-2 bg-gradient-primary px-4 py-2 rounded-lg text-white font-semibold hover:scale-105 transition-transform">
                      <Eye size={16} />
                      <span>View Details</span>
                    </button>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center space-x-2 bg-white/20 border border-white/30 px-4 py-2 rounded-lg text-white font-semibold hover:scale-105 transition-transform"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                    {project.status === 'completed' ? 'Completed' : project.status}
                  </span>
                </div>

                <p className="text-secondary-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-500/20 text-primary-400 border border-primary-500/30 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-secondary-700 text-secondary-400 rounded-full text-xs">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  {project.metrics.slice(0, 2).map((metric, metricIndex) => {
                    const Icon = getIcon(metric.icon);
                    return (
                      <div key={metricIndex} className="flex items-center space-x-2 text-sm">
                        <Icon size={14} className="text-green-400" />
                        <span className="text-secondary-400">{metric.label}: </span>
                        <span className="text-green-400 font-semibold">{metric.value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-secondary-800 rounded-2xl border border-primary-500/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-10 h-10 bg-red-500/20 border border-red-500 text-red-400 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors z-10"
                  >
                    <X size={20} />
                  </button>

                  <div className="p-8">
                    <div className="mb-8">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-64 object-cover rounded-xl mb-6"
                      />
                      <h2 className="text-3xl font-bold text-primary-400 mb-4">
                        {selectedProject.title}
                      </h2>
                      <p className="text-lg text-secondary-300 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {selectedProject.metrics.map((metric, index) => {
                        const Icon = getIcon(metric.icon);
                        return (
                          <div
                            key={index}
                            className="bg-primary-500/10 p-4 rounded-xl border border-primary-500/20 flex items-center space-x-4"
                          >
                            <Icon size={32} className="text-primary-500" />
                            <div>
                              <div className="text-2xl font-bold text-primary-400">{metric.value}</div>
                              <div className="text-secondary-400">{metric.label}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                          <LucideIcons.Settings size={20} className="text-primary-500" />
                          <span>Technologies Used</span>
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gradient-primary text-white rounded-lg font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                          <LucideIcons.Star size={20} className="text-primary-500" />
                          <span>Key Features</span>
                        </h3>
                        <ul className="space-y-2">
                          {selectedProject.features.map((feature, index) => (
                            <li
                              key={index}
                              className="text-secondary-300 pl-6 relative"
                            >
                              <span className="absolute left-0 top-2 w-2 h-2 bg-green-400 rounded-full"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                          <LucideIcons.AlertTriangle size={20} className="text-primary-500" />
                          <span>Challenges</span>
                        </h3>
                        <p className="text-secondary-300 leading-relaxed">{selectedProject.challenges}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                          <LucideIcons.Trophy size={20} className="text-primary-500" />
                          <span>Results & Impact</span>
                        </h3>
                        <p className="text-secondary-300 leading-relaxed">{selectedProject.results}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;