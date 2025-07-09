import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Dashboard',
      description: 'A full-featured admin dashboard for e-commerce management built with React and Node.js',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400',
      tags: ['React', 'Express', 'Socket.io'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Social Media Platform',
      description: 'A full-stack social media platform with posts, comments, likes, and user authentication',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400',
      tags: ['MERN', 'JWT', 'Cloudinary'],
      github: '#',
      demo: '#'
    }
  ];

  const tagColors = {
    'React': 'bg-primary/20 text-primary',
    'Node.js': 'bg-green-500/20 text-green-600',
    'MongoDB': 'bg-green-500/20 text-green-600',
    'Express': 'bg-yellow-500/20 text-yellow-600',
    'Socket.io': 'bg-purple-500/20 text-purple-600',
    'MERN': 'bg-blue-500/20 text-blue-600',
    'JWT': 'bg-red-500/20 text-red-600',
    'Cloudinary': 'bg-orange-500/20 text-orange-600'
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-slate-50 dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        tagColors[tag] || 'bg-primary/20 text-primary'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    className="text-primary hover:text-blue-600 font-semibold transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    className="text-primary hover:text-blue-600 font-semibold transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
