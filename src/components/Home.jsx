import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import CustomCursor from './CustomCursor';
import { motion } from 'framer-motion';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un temps de chargement de 2 secondes
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // Animation pour le texte mot par mot
  const welcomeText = "Welcome to my portfolio".split(" ");
  const nameText = "Hello, I'm Salma".split(" ");
  const roleText = "full stack Developer & wordpress Developer".split(" ");
  const descriptionText = "I am a full-stack Developer skilled in Technologies, such as React js, HTML, CSS, and JavaScript, and php, bootstrap, java, wordpress creating interactive web experiences and application web. I'm passionate about blending design aesthetics with functionality.".split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          {/* Logo animé ou initiales */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 border-4 border-[#F1AD00]/20 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-0 border-t-4 border-[#F1AD00] rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#F1AD00] text-2xl font-bold">SC</span>
            </div>
          </div>
          
          {/* Texte de chargement */}
          <div className="text-[#F1AD00] space-y-2">
            <p className="text-lg font-medium">Loading</p>
            <div className="flex items-center justify-center gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-[#F1AD00] rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90"></div>
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#EFB54F_0%,transparent_50%)] opacity-5"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#EFB54F]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#EBA40B]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10 animate-slide-up">
            <div className="space-y-6">
              {/* Welcome Text */}
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                <div className="px-4 py-2 bg-[#EFB54F]/10 rounded-full">
                  {welcomeText.map((word, idx) => (
                    <motion.span
                      key={idx}
                      variants={child}
                      className="text-[#EFB54F] text-sm font-medium tracking-wider uppercase inline-block mr-2"
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Name Text */}
              <motion.h1
                variants={container}
                initial="hidden"
                animate="visible"
                className="text-6xl sm:text-7xl font-bold leading-tight"
              >
                {nameText.map((word, idx) => (
                  <motion.span
                    key={idx}
                    variants={child}
                    className="inline-block mr-4 text-[#EFB54F]"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Role Text */}
              <motion.h2
                variants={container}
                initial="hidden"
                animate="visible"
                className="text-3xl sm:text-4xl font-semibold text-white/80"
              >
                {roleText.map((word, idx) => (
                  <motion.span
                    key={idx}
                    variants={child}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>

              {/* Description Text */}
              <motion.p
                variants={container}
                initial="hidden"
                animate="visible"
                className="text-white/60 text-lg max-w-xl leading-relaxed"
              >
                {descriptionText.map((word, idx) => (
                  <motion.span
                    key={idx}
                    variants={child}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-[#EFB54F] text-black font-semibold rounded-lg hover:bg-[#EBA40B] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#EFB54F]/20">
                <span className="flex items-center gap-2">
                  View Projects
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button className="group px-8 py-4 border-2 border-[#EFB54F] text-[#EFB54F] font-semibold rounded-lg hover:bg-[#EFB54F] hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#EFB54F]/20">
                <span className="flex items-center gap-2">
                  Contact Me
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-white/80 font-semibold text-lg">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {['React js', 'material ui','ES6  ','JavaScript','HTML5', 'CSS3', ' Php', ' mysql','Git','Github',
                'sql','Bootstrap','wordpress','shopify'].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-[#EFB54F]/10 text-[#EFB54F] rounded-full text-sm font-medium hover:bg-[#EFB54F]/20 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="relative bg-black/80 backdrop-blur-xl rounded-3xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="relative">
                {/* Profile Image Container simplifié */}
                <div className="relative w-full max-w-md mx-auto">
                  <div className="relative group">
                    {/* Container principal de l'image */}
                    <div className="relative rounded-full overflow-hidden aspect-square">
                      {/* Image principale */}
                      <img
                        src="./profil.png"
                        alt="Salma Chouk"
                        className="w-full h-full object-cover rounded-full shadow-xl transform hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Effet de brillance subtil */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#F1AD00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <div className="flex items-center justify-center space-x-6">
                    <a 
                      href="https://github.com/chouksalma" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group"
                    >
                      <FaGithub className="w-7 h-7 text-white/60 hover:text-[#EFB54F] transition-colors duration-300 transform group-hover:scale-110" />
                    </a>
                    <a href="https://www.linkedin.com/in/salma-chouk-93b5a935a"  target="_blank" 
                      rel="noopener noreferrer"  className="group">
                      <FaLinkedin className="w-7 h-7 text-white/60 hover:text-[#EFB54F] transition-colors duration-300 transform group-hover:scale-110" />
                    </a>
                    
                    
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 