import React, { useState } from 'react';
import CustomCursor from './CustomCursor';

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects, skills, and experience with smooth animations and interactive elements.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      link: "#"
    },
    // Projets supplémentaires qui seront affichés après le clic sur "Voir plus"
    {
      title: "Social Media Dashboard",
      description: "Real-time social media analytics dashboard with interactive charts and data visualization.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80",
      technologies: ["React", "D3.js", "Socket.io"],
      link: "#"
    },
    {
      title: "AI Image Generator",
      description: "An AI-powered image generation application using deep learning models.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80",
      technologies: ["Python", "TensorFlow", "React"],
      link: "#"
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <>
      <CustomCursor />
      <section id="portfolio" className="min-h-screen bg-black py-24 px-4 sm:px-6 cursor-default">
        <div className="max-w-7xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-6">
              <span className="text-[#F1AD00]">Mes Projets</span>
            </h2>
            <div className="w-24 h-1 bg-[#F1AD00] mx-auto mb-8"></div>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Découvrez mes réalisations professionnelles
            </p>
          </div>

          {/* Grille des projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <div 
                key={index}
                className="group bg-black border-2 border-[#F1AD00]/20 rounded-xl overflow-hidden hover:border-[#F1AD00] transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image avec overlay */}
                <div className="relative h-48 overflow-hidden cursor-pointer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                  {/* Cercle au survol */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-[#F1AD00] rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#F1AD00] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-[#F1AD00]/10 text-[#F1AD00] border border-[#F1AD00]/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bouton Voir projet avec nouveau style */}
                  <a
                    href={project.link}
                    className="group/btn inline-flex items-center gap-3 text-[#F1AD00] hover:text-white transition-colors duration-300"
                  >
                    <span>Voir le projet</span>
                    <div className="w-8 h-8 rounded-full border-2 border-[#F1AD00] flex items-center justify-center group-hover/btn:bg-[#F1AD00] group-hover/btn:border-[#F1AD00] transition-all duration-300">
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton Voir plus avec nouveau style */}
          {!showAll && projects.length > 3 && (
            <div className="text-center mt-16">
              <button
                onClick={() => setShowAll(true)}
                className="group relative inline-flex items-center gap-3 bg-[#F1AD00] text-black px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:bg-[#F1AD00]/90"
              >
                <span>Voir plus de projets</span>
                <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                  <svg className="w-5 h-5 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio; 