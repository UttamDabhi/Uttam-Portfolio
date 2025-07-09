import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiMongodb, SiPhp, SiMysql, SiGit } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: 'HTML', icon: SiHtml5, color: 'from-orange-400 to-red-500' },
    { name: 'CSS', icon: SiCss3, color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', icon: SiJavascript, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', icon: SiReact, color: 'from-cyan-400 to-blue-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'from-green-400 to-green-600' },
    { name: 'PHP', icon: SiPhp, color: 'from-purple-400 to-purple-600' },
    { name: 'MySQL', icon: SiMysql, color: 'from-blue-600 to-blue-800' },
    { name: 'Git', icon: SiGit, color: 'from-orange-500 to-red-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-up">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 mb-4 flex items-center justify-center bg-gradient-to-br ${skill.color} rounded-xl`}>
                    <IconComponent className="text-2xl text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{skill.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
