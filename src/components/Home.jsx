import React from 'react';

const Home = () => {
  const socialLinks = [
    {
      id: 1,
      child: "LinkedIn",
      href: 'https://linkedin.com',
      style: 'bg-[#0077B5] hover:bg-[#0077B5]/90'
    },
    {
      id: 2,
      child: "GitHub",
      href: 'https://github.com',
      style: 'bg-[#333333] hover:bg-[#333333]/90'
    },
    {
      id: 3,
      child: "Email",
      href: 'mailto:your.email@example.com',
      style: 'bg-gradient-to-r from-[#EA4335] to-[#FBBC05] hover:opacity-90'
    },
  ];

  return (
    <div name="home" className="relative min-h-screen w-full bg-[#0a192f] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0a192f] via-[#112240] to-[#0a192f]"></div>
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px] -top-32 -left-32 animate-float"></div>
          <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px] -bottom-32 -right-32 animate-float animation-delay-400"></div>
          <div className="absolute w-[800px] h-[800px] rounded-full bg-cyan-500/10 blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float animation-delay-800"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-small">
            <div className="space-y-tiny animate-slide-up">
              <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-sm font-medium">
                Welcome to my Portfolio
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient animate-shine">Your Name</span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-400 leading-tight">
                Full Stack Developer
              </h2>
            </div>

            <p className="text-gray-400 text-lg max-w-xl leading-relaxed animate-slide-up animation-delay-200">
              Crafting exceptional digital experiences through innovative web solutions. 
              Specialized in building modern, scalable applications with cutting-edge technologies.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-400">
              <button className="modern-button group">
                <span className="relative z-10">View Projects</span>
              </button>
              <button className="modern-button bg-transparent border-2 border-cyan-500 hover:bg-cyan-500/10">
                <span className="relative z-10">Download CV</span>
              </button>
            </div>

            {/* Tech Stack */}
            <div className="animate-slide-up animation-delay-600">
              <h3 className="text-gray-400 text-sm font-medium mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'TypeScript', 'Tailwind', 'MongoDB'].map((tech, index) => (
                  <span
                    key={tech}
                    className="modern-card px-4 py-2 text-sm text-gray-300 animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - 3D Card */}
          <div className="relative hidden lg:block animate-float">
            <div className="modern-card aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-border-glow"></div>
              <div className="relative h-full flex flex-col justify-between z-10">
                <div className="space-y-4">
                  <div className="h-2 w-24 bg-cyan-500/20 rounded-full"></div>
                  <div className="h-2 w-32 bg-cyan-500/20 rounded-full"></div>
                  <div className="h-2 w-40 bg-cyan-500/20 rounded-full"></div>
                </div>
                <div className="flex justify-center items-center flex-1">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-1 animate-border-glow">
                    <div className="w-full h-full rounded-full bg-[#0a192f] flex items-center justify-center">
                      <span className="text-2xl text-white">Your Photo</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-2 w-36 bg-cyan-500/20 rounded-full"></div>
                  <div className="h-2 w-28 bg-cyan-500/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0 space-y-tiny">
        {socialLinks.map(({ id, child, href, style }, index) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`glass-morphism flex items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300 rounded-r-lg ${style} animate-slide-up`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <span className="flex justify-between items-center w-full text-white font-medium">
              {child}
            </span>
          </a>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-[35px] h-[64px] rounded-3xl border-2 border-cyan-500/20 flex justify-center items-start p-2 glass-morphism">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-float"></div>
        </div>
      </div>
    </div>
  );
};

export default Home; 