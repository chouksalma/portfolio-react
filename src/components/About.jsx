import React, { useState, useEffect } from 'react';
import { FaCode, FaPalette, FaUsers, FaRocket, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const experiences = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive web applications using modern technologies and best practices.",
      icon: <FaCode className="w-6 h-6" />,
      skills: ["React", "material ui ", "Es6 ",
         "JavaScript", "HTML", "CSS", ],
      gradient: "from-[#EBA40B] to-[#EEB141]"
    },
    {
      title: "Backend Development",
      description: "Creating efficient backend systems using PHP, MySQL, Oracle, and APIs. Focused on server-side logic, data management, and security. Ensuring smooth communication between frontend and backend.",
      icon: <FaCode className="w-6 h-6" />,
      skills: ["PHP", "MySQL", "Oracle", "API"],
      gradient: "from-[#EBA40B] to-[#EEB141]"
    }
,    
    {
      title: "Team Collaboration",
      description: "Working effectively in cross-functional teams to deliver high-quality products on time.",
      icon: <FaUsers className="w-6 h-6" />,
      skills: ["Agile", "Git", "Code Review", "Documentation", "Communication"],
      gradient: "from-[#EBA40B] to-[#EEB141]"
    },
    {
      title: "Performance Optimization",
      description: "Optimizing application performance and ensuring smooth user experiences across devices.",
      icon: <FaRocket className="w-6 h-6" />,
      skills: ["Performance", "SEO", "Accessibility", "Testing", "Analytics"],
      gradient: "from-[#EBA40B] to-[#EEB141]"
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "#", label: "GitHub" },
    { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          id="about"
          className="relative min-h-screen bg-[#020617] py-24 px-4 sm:px-6 overflow-hidden"
        >
          {/* Fond avec points turquoise */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  radial-gradient(circle at center, #00ffd5 1px, transparent 1px),
                  radial-gradient(circle at center, #00ffd5 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px',
                backgroundPosition: '0 0, 15px 15px',
                opacity: 0.15,
              }}
            />
            
            {/* Effet de lueur centrale */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 213, 0.1) 0%, transparent 60%)',
              }}
            />
          </div>

          {/* Contenu existant - ajoutez seulement la classe z-10 relative pour le placer au-dessus du fond */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-7xl mx-auto relative z-10"
          >
            {/* Section Header */}
            <div className="text-center mb-20 animate-slide-up">
              <div className="inline-block mb-6">
                <span className="px-6 py-3 bg-[#EBA40B]/10 text-[#EBA40B] rounded-full text-sm font-medium tracking-wider uppercase border border-[#EBA40B]/20">
                  About Me
                </span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EBA40B] to-[#EEB141]">
                  My Journey
                </span>
                <br />
                <span className="text-white">As a Developer</span>
              </h2>
              <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
              Hello there! I'm salma, a full-stack Developer. My academic journey has allowed me to dive deep into Web-Development, and I'm incredibly passionate about leveraging technology to solve real-world problems. Being a student in today's dynamic digital era, I've had opportunities to work on exciting projects, some of which you can explore right here on my portfolio.

</p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-16 space-x-6">
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-8 py-4 rounded-full font-medium transition-all duration-300 text-lg ${
                  activeTab === 'experience'
                    ? 'bg-gradient-to-r from-[#EBA40B] to-[#EEB141] text-black shadow-lg shadow-[#EBA40B]/20'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-8 py-4 rounded-full font-medium transition-all duration-300 text-lg ${
                  activeTab === 'skills'
                    ? 'bg-gradient-to-r from-[#EBA40B] to-[#EEB141] text-black shadow-lg shadow-[#EBA40B]/20'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                Skills
              </button>
            </div>

            {/* Content */}
            <div className="relative">
              {/* Experience Grid */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-500 ${
                activeTab === 'experience' ? 'opacity-100' : 'opacity-0 absolute'
              }`}>
                {experiences.map((exp, index) => (
                  <div
                    key={exp.title}
                    className="group relative animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-300 border border-white/5">
                      <div className="flex items-start space-x-6">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${exp.gradient} flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-300`}>
                          {exp.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-white mb-3">{exp.title}</h3>
                          <p className="text-white/60 mb-6 text-lg leading-relaxed">{exp.description}</p>
                          <div className="flex flex-wrap gap-3">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-4 py-2 bg-[#EBA40B]/10 text-[#EBA40B] rounded-full text-sm font-medium hover:bg-[#EBA40B]/20 transition-colors duration-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills Grid */}
              <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 transition-opacity duration-500 ${
                activeTab === 'skills' ? 'opacity-100' : 'opacity-0 absolute'
              }`}>
                {experiences.map((exp, index) => (
                  <div
                    key={exp.title}
                    className="group relative animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    <div className="relative bg-black/80 backdrop-blur-xl rounded-xl p-6 transform hover:scale-105 transition-all duration-300 border border-white/5">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${exp.gradient} flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {exp.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">{exp.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-[#EBA40B]/10 text-[#EBA40B] rounded-full text-sm font-medium hover:bg-[#EBA40B]/20 transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-20 flex justify-center space-x-8">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group relative animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#EBA40B] to-[#EEB141] rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative w-14 h-14 rounded-full bg-[#EBA40B]/10 flex items-center justify-center text-[#EBA40B] group-hover:scale-110 transition-transform duration-300 border border-[#EBA40B]/20">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            {/* Call to Action */}
         
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default About; 