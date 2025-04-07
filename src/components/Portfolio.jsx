import React from 'react';
import { motion } from 'framer-motion';
import CustomCursor from './CustomCursor';

const Portfolio = () => {
  // Animations variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const projects = [
    {
      title: "Bricolink",
      description: " A website e-commerce whit wordpress.",
      image: "./pricolink.png",
      technologies: ["Wordpress"],
      link: "https://bricolink.ma"
    },
 
    {
      title: "Adm jawaz",
      description: "A website public whit react js material ui for front-end and node js for backend.",
      image: "./adm.jpg",
      technologies: ["React", "Material ui", "Node js", "Api"],
      link: "https://www.adm.co.ma/fr"
    },
    {
      title: "digitronics",
      description: "A full-stack e-commerce platform built wordpress",
      image: "./digitronics.jpg",
      technologies: ["wordpress"],
      link: "https://digitronics.ma/"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website whit html css js shopify. ",
      image: "./portfolio.png",
      technologies: ["Html", " Css", "js","shopify"],
      link: "https://salmachouk.xyz/"
    }
  ];

  return (
    <>
      <CustomCursor />
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen bg-[#020617] py-24 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header avec animation */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold mb-6">
              <span className="text-[#F1AD00] inline-block hover:scale-105 transition-transform">
                Mes Projets
              </span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              className="w-24 h-1 bg-[#F1AD00] mx-auto mb-8"
            />
            <p className="text-white/80 text-xl max-w-2xl mx-auto mb-8">
              Découvrez mes réalisations professionnelles
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="./cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F1AD00] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#F1AD00]/90 transition-all duration-300"
            >
              Télécharger CV
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Projects Grid avec animation */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(241, 173, 0, 0.1), 0 10px 10px -5px rgba(241, 173, 0, 0.04)"
                }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group bg-[#0A0A0A] rounded-2xl overflow-hidden"
              >
                <motion.div 
                  className="relative aspect-video overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <motion.div 
                  className="p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#F1AD00] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 group-hover:text-white/80 transition-colors">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-xs bg-white/5 text-white/80 rounded-full hover:bg-[#F1AD00]/10 hover:text-[#F1AD00] transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Portfolio; 