import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import CustomCursor from './CustomCursor';

const Home = () => {
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
              <div className="inline-block">
                <span className="px-4 py-2 bg-[#EFB54F]/10 text-[#EFB54F] rounded-full text-sm font-medium tracking-wider uppercase">
                  Welcome to my portfolio
                </span>
              </div>
              <h1 className="text-6xl sm:text-7xl font-bold leading-tight">
                <span className="text-[#EFB54F]">Hello, I'm</span>
                <br />
                <span className="text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  Salma
                </span>
              </h1>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white/80">
                full stack  Developer & wordpress Developer
              </h2>
              <p className="text-white/60 text-lg max-w-xl leading-relaxed">
              I am a full-stack Developer skilled in Technologies, such as React js, 
               HTML, CSS, and JavaScript, and php ,bootstrap,java,wordpress creating 
               interactive web experiences and application web. I'm passionate about blending
                design aesthetics with functionality.


              </p>
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
                {/* Profile Image Container avec effet 3D */}
                <div className="relative w-full max-w-md mx-auto perspective-1000">
                  <div className="relative group transform-3d hover:rotate-y-12 duration-1000">
                    {/* Cercles décoratifs 3D */}
                    <div className="absolute inset-0 rounded-full border-4 border-[#F1AD00]/20 animate-spin-slow"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-[#F1AD00]/10 animate-spin-slow-reverse"></div>
                    
                    {/* Container principal de l'image */}
                    <div className="relative rounded-full overflow-hidden aspect-square transform-style-3d">
                      {/* Image principale */}
                      <div className="relative z-10">
                        <img
                          src="./profil.png"
                          alt="Salma Chouk"
                          className="w-full h-full object-cover rounded-full shadow-3d transform hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Effets de brillance 3D */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#F1AD00]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-bl from-[#F1AD00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                    </div>

                    {/* Particules dorées */}
                    <div className="absolute inset-0 particles-container">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="particle absolute w-2 h-2 bg-[#F1AD00] rounded-full"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${2 + Math.random() * 3}s infinite ease-in-out ${Math.random() * 2}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-8">
                  <div className="flex items-center justify-center space-x-6">
                    <a href="#" className="group">
                      <FaGithub className="w-7 h-7 text-white/60 hover:text-[#EFB54F] transition-colors duration-300 transform group-hover:scale-110" />
                    </a>
                    <a href="#" className="group">
                      <FaLinkedin className="w-7 h-7 text-white/60 hover:text-[#EFB54F] transition-colors duration-300 transform group-hover:scale-110" />
                    </a>
                    <a href="#" className="group">
                      <FaTwitter className="w-7 h-7 text-white/60 hover:text-[#EFB54F] transition-colors duration-300 transform group-hover:scale-110" />
                    </a>
                    <a href="#" className="group">
                      <FaEnvelope className="w-7 h-7 text-white/60 hover:text-[#EFB54F] transition-colors duration-300 transform group-hover:scale-110" />
                    </a>
                  </div>

                  {/* Scroll Indicator */}
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-10 border-2 border-[#EFB54F] rounded-full p-1">
                      <div className="w-1.5 h-1.5 bg-[#EFB54F] rounded-full animate-bounce"></div>
                    </div>
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