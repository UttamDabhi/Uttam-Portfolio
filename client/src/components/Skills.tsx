import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiMongodb, SiPhp, SiMysql, SiGit, SiNodedotjs, SiTailwindcss, SiTypescript, SiExpress } from 'react-icons/si';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: 'HTML5', icon: SiHtml5, color: 'from-orange-400 to-red-500', level: 95 },
    { name: 'CSS', icon: SiCss3, color: 'from-blue-400 to-blue-600', level: 90 },
    { name: 'JavaScript', icon: SiJavascript, color: 'from-yellow-400 to-yellow-600', level: 85 },
    // { name: 'TypeScript', icon: SiTypescript, color: 'from-blue-500 to-blue-700', level: 80 },
    { name: 'React', icon: SiReact, color: 'from-cyan-400 to-blue-500', level: 60 },
    { name: 'Node.js', icon: SiNodedotjs, color: 'from-green-400 to-green-600', level: 55 },
    // { name: 'Express', icon: SiExpress, color: 'from-gray-400 to-gray-600', level: 40 },
    { name: 'MongoDB', icon: SiMongodb, color: 'from-green-400 to-green-600', level: 75 },
    { name: 'MySQL', icon: SiMysql, color: 'from-blue-600 to-blue-800', level: 60 },
    // { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'from-teal-400 to-blue-500', level: 45 },
    { name: 'PHP', icon: SiPhp, color: 'from-purple-400 to-purple-600', level: 45 },
    { name: 'Git', icon: SiGit, color: 'from-orange-500 to-red-600', level: 45 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_rgba(59,130,246,0.15)_1px,_transparent_0)] bg-[size:20px_20px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="group relative"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="glass-effect p-6 rounded-xl hover-lift text-center relative overflow-hidden">
                  {/* Animated background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 mb-4 flex items-center justify-center bg-gradient-to-br ${skill.color} rounded-xl mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-2xl text-white" />
                    </div>
                    
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{skill.name}</h3>
                    
                    {/* Skill Level Progress Bar */}
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    
                    <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Stats */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-8 bg-white dark:bg-slate-800 rounded-full px-8 py-4 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Technologies</div>
            </div>
            <div className="w-px h-12 bg-slate-200 dark:bg-slate-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Years Learning</div>
            </div>
            <div className="w-px h-12 bg-slate-200 dark:bg-slate-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">∞</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Growth Mindset</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
