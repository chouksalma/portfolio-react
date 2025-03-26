import React, { useState } from 'react';
import CustomCursor from './CustomCursor';

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "digitronics",
      description: "A full-stack e-commerce platform built wordpress",
      image: "./digitronics.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://digitronics.ma/"
    },
    {
      title: "Adm jawaz",
      description: "A website public whit react js material ui for front-end and node js for backend.",
      image: "./adm.jpg",
      technologies: ["React", "Material ui", "Node js", "Api"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website whit html css js shopify. ",
      image: "./portfolio.png",
      technologies: ["Html", " Css", "js","shopify"],
      link: "https://salmachouk.xyz/"
    },
    {
      title: "Bricolink",
      description: " A website e-commerce whit wordpress.",
      image: "./pricolink.png",
      technologies: ["React", "D3.js", "Socket.io"],
      link: "https://bricolink.ma/"
    }
  ];

  const handleDownloadCV = () => {
    window.open('./cv.pdf', '_blank');
  };

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <>
      <CustomCursor />
      <section id="portfolio" className="min-h-screen bg-black py-24 px-4 sm:px-6 cursor-default">
        <div className="max-w-7xl mx-auto">
          {/* En-tête avec bouton CV */}
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-6">
              <span className="text-[#F1AD00]">Mes Projets</span>
            </h2>
            <div className="w-24 h-1 bg-[#F1AD00] mx-auto mb-8"></div>
            <p className="text-white/80 text-xl max-w-2xl mx-auto mb-8">
              Découvrez mes réalisations professionnelles
            </p>
            {/* Bouton Télécharger CV */}
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 bg-[#F1AD00] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#F1AD00]/90 transition-all duration-300"
            >
              <span>Télécharger CV</span>
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
            </button>
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