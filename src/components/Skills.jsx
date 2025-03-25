import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", icon: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" },
        { name: "CSS3", icon: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" },
        { name: "JavaScript", icon: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.449 1.1.695 1.654.778 1.096 2.334 1.515 3.789 1.515.122 0 .244-.006.366-.006l.073-.006c1.201-.09 2.708-.292 3.252-1.279.131-.222.176-.425.201-.63.005-.036.01-.072.01-.108.002-.215.003-.43.003-.646.001-1.894-.007-3.788-.007-5.682l-.004-.056z" },
        { 
          name: "React", 
          icon: (
            <svg className="w-4 h-4 text-[#61DAFB]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>
              <path d="M12 22.75c-1.95 0-3.75-.5-5.25-1.5-1.5-1-2.5-2.5-3-4.25-.5-1.75-.5-3.75 0-5.5.5-1.75 1.5-3.25 3-4.25 1.5-1 3.3-1.5 5.25-1.5s3.75.5 5.25 1.5c1.5 1 2.5 2.5 3 4.25.5 1.75.5 3.75 0 5.5-.5 1.75-1.5 3.25-3 4.25-1.5 1-3.3 1.5-5.25 1.5Zm0-2c1.5 0 2.75-.4 3.75-1s1.75-1.75 2-3c.25-1.25.25-2.5 0-3.75-.25-1.25-.75-2.25-2-3s-2.25-1-3.75-1-2.75.4-3.75 1-1.75 1.75-2 3c-.25 1.25-.25 2.5 0 3.75.25 1.25.75 2.25 2 3s2.25 1 3.75 1Z"/>
            </svg>
          )
        },
        { name: "Tailwind", icon: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
        { name: "Python", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" },
        { name: "MongoDB", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" },
        { name: "Docker", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" },
        { name: "VS Code", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-[#EFB54F]">Skills & Expertise</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div key={category.category} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#EFB54F] to-[#EBA40B] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-8 transform transition-all duration-300 group-hover:scale-105">
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#EFB54F] flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </span>
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {category.items.map((skill, skillIndex) => (
                      <div key={skill.name} className="flex items-center space-x-3 group/skill">
                        <div className="w-8 h-8 rounded-lg bg-[#EFB54F]/10 flex items-center justify-center group-hover/skill:scale-110 transition-transform duration-300">
                          {typeof skill.icon === 'string' ? (
                            <svg className="w-4 h-4 text-[#EFB54F]" fill="currentColor" viewBox="0 0 24 24">
                              <path d={skill.icon} />
                            </svg>
                          ) : (
                            skill.icon
                          )}
                        </div>
                        <span className="text-white/70 group-hover/skill:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 