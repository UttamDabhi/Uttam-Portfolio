import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800"
                alt="Uttam Dabhi Profile"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
            </div>
          </div>
          
          <div className="animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              I'm a BCA student at Silver Oak University passionate about full-stack development. I specialize in JavaScript and love creating dynamic, responsive web applications that solve real-world problems.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center text-primary font-semibold hover:text-blue-600 transition-colors duration-200 gap-2"
            >
              View My Projects
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
