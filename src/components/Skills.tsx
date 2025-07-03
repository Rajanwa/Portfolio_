import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as LucideIcons from 'lucide-react';
import { skillCategories } from '../data/portfolio';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'code': LucideIcons.Code,
      'bar-chart-3': LucideIcons.BarChart3,
      'pie-chart': LucideIcons.PieChart,
      'brain': LucideIcons.Brain,
      'python': LucideIcons.Code2,
      'database': LucideIcons.Database,
      'file-spreadsheet': LucideIcons.FileSpreadsheet,
      'layers': LucideIcons.Layers,
      'file-text': LucideIcons.FileText,
      'book-open': LucideIcons.BookOpen,
      'bar-chart': LucideIcons.BarChart,
      'line-chart': LucideIcons.LineChart,
      'activity': LucideIcons.Activity,
      'cpu': LucideIcons.Cpu,
      'network': LucideIcons.Network,
      'calculator': LucideIcons.Calculator,
    };
    
    return iconMap[iconName] || LucideIcons.Code;
  };

  return (
    <section id="skills" className="py-20 bg-secondary-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold mb-4 border border-primary-500/30">
            What I Know
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-secondary-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = getIcon(category.icon);
            
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 group hover:translate-y-[-4px]"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CategoryIcon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = getIcon(skill.icon);
                    
                    return (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        className="space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <SkillIcon size={20} className="text-primary-500" />
                            <span className="font-semibold text-white">{skill.name}</span>
                          </div>
                          <span className="text-primary-400 font-semibold">{skill.level}%</span>
                        </div>
                        
                        <div className="relative">
                          <div className="w-full h-2 bg-secondary-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : {}}
                              transition={{ 
                                duration: 1.5, 
                                delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.8,
                                ease: "easeOut"
                              }}
                              className="h-full bg-gradient-primary rounded-full relative"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;