import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <>
      <CustomCursor />
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        id="portfolio"
        className="min-h-screen bg-[#020617] py-24 px-4 sm:px-6 cursor-default"
      >
        <div className="max-w-7xl mx-auto">
          {/* En-tête avec animation */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold mb-6">
              <span className="text-[#F1AD00]">Mes Projets</span>
            </h2>
            <div className="w-24 h-1 bg-[#F1AD00] mx-auto mb-8"></div>
            <p className="text-white/80 text-xl max-w-2xl mx-auto mb-8">
              Découvrez mes réalisations professionnelles
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 bg-[#F1AD00] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#F1AD00]/90 transition-all duration-300"
            >
              <span>Télécharger CV</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Grille des projets modifiée */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visibleProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={projectVariants}
                className="group relative"
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div
                  className="relative bg-[#0A0A0A] rounded-2xl overflow-hidden transition-all duration-500"
                  style={{
                    transform: 'translateZ(0)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Contenu */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs bg-white/5 text-white/80 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.link, '_blank')}
                      className="inline-flex items-center gap-2 bg-[#F1AD00] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#F1AD00]/90 transition-all duration-300"
                    >
                      <span>Visit Project</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </motion.button>
                  </div>

                  {/* Effet 3D au hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(to right bottom, rgba(255,255,255,0.1), transparent)',
                      transform: 'translateZ(2px)',
                    }}
                  />
                </div>

                {/* Effet d'ombre */}
                <div
                  className="absolute -inset-x-2 -inset-y-2 z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(0,0,0,0.4), transparent 70%)',
                    filter: 'blur(20px)',
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Bouton Voir plus avec animation */}
          {!showAll && projects.length > 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-16"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAll(true)}
                className="group relative inline-flex items-center gap-3 bg-[#F1AD00] text-black px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:bg-[#F1AD00]/90"
              >
                <span>Voir plus de projets</span>
                <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                  <svg className="w-5 h-5 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </motion.button>
            </motion.div>
          )}

          {/* Ajouter le bouton "Voir moins" */}
          {showAll && projects.length > 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-16"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAll(false)}
                className="group relative inline-flex items-center gap-3 bg-[#F1AD00] text-black px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:bg-[#F1AD00]/90"
              >
                <span>Voir moins</span>
                <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                  <svg className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </div>
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.section>
    </>
  );
};

export default Portfolio; 