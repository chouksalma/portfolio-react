import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "E-Commerce",
      description: "A full-stack e-commerce platform with real-time inventory management, user authentication, and payment integration.",
      image: "/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      live: "#",
      category: "Full Stack"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website with smooth animations, dark mode, and responsive design.",
      image: "/projects/portfolio.jpg",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "#",
      category: "Frontend"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/projects/taskmanager.jpg",
      technologies: ["React", "Firebase", "Redux"],
      github: "#",
      live: "#",
      category: "Frontend"
    },
    {
      title: "AI Chat Application",
      description: "An AI-powered chat application with natural language processing and real-time messaging.",
      image: "/projects/aichat.jpg",
      technologies: ["React", "Python", "TensorFlow", "Socket.io"],
      github: "#",
      live: "#",
      category: "Full Stack"
    }
  ];

  const categories = ["All", "Frontend", "Full Stack", "Backend"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Nouveau design du background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#EBA40B,transparent_50%)] opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#EEB141,transparent_50%)] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Nouveau header avec animation */}
        <div className="text-center mb-20">
          <div className="relative inline-block animate-float">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#EBA40B] to-[#EEB141] rounded-lg blur opacity-20"></div>
            <span className="relative px-10 py-5 bg-black text-[#EBA40B] text-xl font-bold rounded-lg border border-[#EBA40B]/20">
              Featured Projects
            </span>
          </div>
          <h2 className="mt-10 text-6xl font-extrabold">
            <div className="mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EBA40B] via-[#EEB141] to-[#EBA40B] animate-gradient">
                Découvrez Mes Projets
              </span>
            </div>
          </h2>
        </div>

        {/* Nouveau style pour les filtres */}
        <div className="flex justify-center mb-16 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                relative px-6 py-3 rounded-full text-base font-medium 
                ${selectedCategory === category 
                  ? 'text-black bg-gradient-to-r from-[#EBA40B] to-[#EEB141] shadow-lg shadow-[#EBA40B]/20' 
                  : 'text-white/70 hover:text-[#EBA40B] border border-white/10 hover:border-[#EBA40B]/50'}
                transition-all duration-300 hover:scale-105
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Nouvelle grille de projets avec layout alterné */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative ${index % 2 === 0 ? 'lg:translate-y-10' : ''}`}
            >
              {/* Nouvelle carte de projet */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-[#EBA40B]/30 transition-all duration-500">
                <div className="relative h-[400px]">
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
                  
                  {/* Image avec effet parallax */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Contenu superposé */}
                  <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-[#EBA40B] text-sm font-medium border border-[#EBA40B]/20">
                        {project.category}
                      </span>
                      <div className="flex gap-3">
                        <a href={project.github} className="p-3 rounded-full bg-black/50 backdrop-blur-md hover:bg-[#EBA40B] text-white hover:text-black transition-all duration-300">
                          <FaGithub className="w-5 h-5" />
                        </a>
                        <a href={project.live} className="p-3 rounded-full bg-black/50 backdrop-blur-md hover:bg-[#EBA40B] text-white hover:text-black transition-all duration-300">
                          <FaExternalLinkAlt className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#EBA40B] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-white/80 mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white/90 text-sm font-medium border border-white/10 hover:border-[#EBA40B]/30 hover:text-[#EBA40B] transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nouveau bouton avec animation */}
        <div className="mt-20 text-center">
          <button className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#EBA40B] text-black font-bold rounded-full overflow-hidden hover:shadow-2xl hover:shadow-[#EBA40B]/20 transition-all duration-500 hover:scale-105">
            <span className="relative z-10">Voir Plus de Projets</span>
            <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-[#EBA40B] to-[#EEB141] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 