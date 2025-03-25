import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a passionate full-stack developer with a strong foundation in web development
          technologies. My journey in software development has equipped me with extensive
          experience in building modern, responsive, and user-friendly applications.
          I specialize in front-end development using React.js and have a deep understanding
          of modern web technologies.
        </p>

        <br />

        <p className="text-xl">
          With a keen eye for design and a commitment to writing clean, efficient code,
          I strive to create applications that not only look great but also provide
          an excellent user experience. I am constantly learning and staying up-to-date
          with the latest technologies and best practices in web development.
          I enjoy working on challenging projects and collaborating with teams to
          deliver high-quality solutions.
        </p>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="skill-card bg-gray-700 p-4 rounded-lg">
              <h4 className="text-xl font-medium mb-2">Frontend</h4>
              <p className="text-gray-400">React.js, Next.js, Tailwind CSS, JavaScript</p>
            </div>
            <div className="skill-card bg-gray-700 p-4 rounded-lg">
              <h4 className="text-xl font-medium mb-2">Backend</h4>
              <p className="text-gray-400">Node.js, Express, MongoDB, SQL</p>
            </div>
            <div className="skill-card bg-gray-700 p-4 rounded-lg">
              <h4 className="text-xl font-medium mb-2">Tools</h4>
              <p className="text-gray-400">Git, Docker, AWS, Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 