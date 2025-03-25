import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

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
                Frontend Developer & UI/UX Designer
              </h2>
              <p className="text-white/60 text-lg max-w-xl leading-relaxed">
                I create beautiful and functional web experiences that make a difference.
                Passionate about crafting intuitive interfaces and seamless user experiences.
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
                {['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'].map((tech, index) => (
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#EFB54F] to-[#EBA40B] rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-black/80 backdrop-blur-xl rounded-3xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#EFB54F] rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#EBA40B] rounded-full opacity-20"></div>
                
                {/* Profile Image */}
                <div className="aspect-square rounded-full bg-[#EFB54F]/10 flex items-center justify-center mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#EFB54F] to-[#EBA40B] opacity-20"></div>
                  <div className="w-40 h-40 rounded-full bg-[#EFB54F] flex items-center justify-center text-5xl font-bold text-black relative z-10 transform hover:scale-105 transition-transform duration-300">
                    SC
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