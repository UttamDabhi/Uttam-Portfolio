import React from 'react';
import { ExternalLink, Github, Star, Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Dashboard',
      description: 'A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory management, and user authentication.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400',
      tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      github: '#',
      demo: '#',
      featured: true,
      stats: { stars: 24, users: 150, date: '2024' }
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and project tracking.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400',
      tags: ['React', 'Express', 'Socket.io', 'JWT'],
      github: '#',
      demo: '#',
      featured: false,
      stats: { stars: 18, users: 89, date: '2024' }
    },
    {
      title: 'Social Media Platform',
      description: 'A full-stack social media platform with posts, comments, likes, user authentication, and real-time messaging.',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400',
      tags: ['MERN', 'JWT', 'Cloudinary', 'Socket.io'],
      github: '#',
      demo: '#',
      featured: true,
      stats: { stars: 32, users: 200, date: '2024' }
    },
    {
      title: 'Weather App',
      description: 'A modern weather application with location-based forecasts, interactive maps, and beautiful animations.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400',
      tags: ['React', 'API', 'Tailwind', 'Framer Motion'],
      github: '#',
      demo: '#',
      featured: false,
      stats: { stars: 15, users: 67, date: '2024' }
    }
  ];

  const tagColors = {
    'React': 'bg-cyan-500/20 text-cyan-600',
    'Node.js': 'bg-green-500/20 text-green-600',
    'MongoDB': 'bg-green-500/20 text-green-600',
    'Express': 'bg-yellow-500/20 text-yellow-600',
    'Socket.io': 'bg-purple-500/20 text-purple-600',
    'MERN': 'bg-blue-500/20 text-blue-600',
    'JWT': 'bg-red-500/20 text-red-600',
    'Cloudinary': 'bg-orange-500/20 text-orange-600',
    'Chart.js': 'bg-pink-500/20 text-pink-600',
    'API': 'bg-indigo-500/20 text-indigo-600',
    'Tailwind': 'bg-teal-500/20 text-teal-600',
    'Framer Motion': 'bg-violet-500/20 text-violet-600'
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-cyan-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
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
            My <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`group relative ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {project.featured && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  Featured
                </div>
              )}
              
              <div className="glass-effect rounded-xl overflow-hidden hover-lift">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project Stats Overlay */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs">
                      <Star className="h-3 w-3 fill-current" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs">
                      <Users className="h-3 w-3" />
                      {project.stats.users}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm">
                      <Calendar className="h-4 w-4" />
                      {project.stats.date}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          tagColors[tag] || 'bg-primary/20 text-primary'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      className="flex-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 font-semibold py-2 px-4 rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="flex-1 bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-5 w-5" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
