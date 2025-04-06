import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Mise à jour de la section active
      const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
      const currentPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-black/80 backdrop-blur-lg shadow-lg' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-[#EFB54F] to-[#F1AD00] rounded-xl flex items-center justify-center transform rotate-45">
                <span className="text-black font-bold text-xl transform -rotate-45">SC</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#EFB54F] to-[#F1AD00] rounded-xl blur-lg opacity-50"></div>
            </div>
            <span className="text-2xl font-bold text-white">Salma<span className="text-[#EFB54F]">.</span></span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: 'smooth' })}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  ${activeSection === item.toLowerCase() 
                    ? 'text-[#EFB54F]' 
                    : 'text-white/70 hover:text-white'
                  }`}
              >
                {activeSection === item.toLowerCase() && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-[#EFB54F]/10 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </motion.button>
            ))}
            
            {/* Contact Button */}
            <motion.a
              href="https://wa.me/212713665501" // Numéro marocain avec préfixe +212
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-[#EFB54F] to-[#F1AD00] text-black rounded-lg font-medium 
                shadow-lg hover:shadow-[#EFB54F]/20 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 text-white hover:text-[#EFB54F] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 