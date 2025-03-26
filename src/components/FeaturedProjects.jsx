import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaFigma, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FeaturedProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const portfolioProjects = [
    {
      title: "E-Commerce Dashboard",
      description: "Une plateforme complète de gestion e-commerce avec analyses en temps réel et gestion des stocks.",
      image: "https://via.placeholder.com/800x600",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      features: [
        "Tableau de bord analytique",
        "Gestion des stocks en temps réel",
        "Interface administrateur",
        "Rapports automatisés"
      ],
      github: "#",
      live: "#",
      category: "Full Stack",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Social Media Platform",
      description: "Réseau social moderne avec fonctionnalités de messagerie et partage de contenu.",
      image: "https://via.placeholder.com/800x600",
      technologies: ["React", "Firebase", "TailwindCSS", "Socket.io"],
      features: [
        "Chat en temps réel",
        "Partage de médias",
        "Système de notification",
        "Profils personnalisés"
      ],
      github: "#",
      live: "#",
      category: "Frontend",
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "AI Content Generator",
      description: "Application d'IA générative pour la création de contenu marketing.",
      image: "https://via.placeholder.com/800x600",
      technologies: ["Python", "React", "OpenAI", "FastAPI"],
      features: [
        "Génération de texte IA",
        "Édition collaborative",
        "Export multiple formats",
        "Templates personnalisés"
      ],
      github: "#",
      live: "#",
      category: "Full Stack",
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  const categories = ["All", "Frontend", "Full Stack", "Backend"];

  const filteredProjects = selectedCategory === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Effets de fond améliorés */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#EBA40B] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#EEB141] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête amélioré */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-[#EBA40B] to-[#EEB141] mb-6"
          >
            <span className="px-6 py-2 rounded-full bg-black text-[#EBA40B] text-sm font-medium">
              Portfolio
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            <span className="text-white">Projets</span>
            <span className="bg-gradient-to-r from-[#EBA40B] to-[#EEB141] text-transparent bg-clip-text"> Récents</span>
          </motion.h2>
        </div>

        {/* Filtres améliorés */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category)}
              className={`
                relative px-8 py-3 rounded-xl text-base font-medium 
                transition-all duration-300 transform hover:-translate-y-1
                ${selectedCategory === category 
                  ? 'bg-gradient-to-r from-[#EBA40B] to-[#EEB141] text-black shadow-lg shadow-[#EBA40B]/20' 
                  : 'bg-white/5 text-white hover:bg-white/10 hover:shadow-lg hover:shadow-[#EBA40B]/5'}
              `}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Grille de projets améliorée */}
        <div className="grid grid-cols-1 gap-20">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${project.color} p-1`}>
                <div className="bg-black rounded-2xl overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-8 p-8">
                    {/* Image du projet */}
                    <div className="relative h-[300px] lg:h-full rounded-xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <a href={project.github} className="p-3 rounded-full bg-white/10 hover:bg-[#EBA40B] text-white hover:text-black transition-all duration-300">
                          <FaGithub className="w-6 h-6" />
                        </a>
                        <a href={project.live} className="p-3 rounded-full bg-white/10 hover:bg-[#EBA40B] text-white hover:text-black transition-all duration-300">
                          <FaExternalLinkAlt className="w-6 h-6" />
                        </a>
                      </div>
                    </div>

                    {/* Contenu du projet */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <span className="px-4 py-1.5 bg-[#EBA40B]/20 text-[#EBA40B] text-sm font-medium rounded-full">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4 hover:text-[#EBA40B] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 mb-6">
                          {project.description}
                        </p>
                        <div className="space-y-4 mb-8">
                          <h4 className="text-white font-semibold">Fonctionnalités Clés:</h4>
                          <ul className="grid grid-cols-2 gap-3">
                            {project.features.map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-gray-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#EBA40B]"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-white/5 rounded-full text-white/80 text-sm font-medium hover:bg-[#EBA40B]/20 hover:text-[#EBA40B] transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 