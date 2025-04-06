import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      value: "contact@example.com",
      link: "mailto:contact@example.com"
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+212 6XX-XXXXXX",
      link: "tel:+212600000000"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Location",
      value: "Maroc",
      link: "#"
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          id="contact"
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-7xl mx-auto relative z-10"
          >
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-block mb-6">
                <span className="px-6 py-3 bg-[#EBA40B]/10 text-[#EBA40B] rounded-full text-sm font-medium tracking-wider uppercase border border-[#EBA40B]/20">
                  Contact Me
                </span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EBA40B] to-[#EEB141]">
                  Get in Touch
                </span>
              </h2>
              <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
                Feel free to reach out to me for any questions or opportunities!
              </p>
            </div>

            {/* Contact Form and Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/5"
              >
                <form className="space-y-6">
                  <div>
                    <label className="block text-white mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#EBA40B] focus:ring-2 focus:ring-[#EBA40B]/50 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#EBA40B] focus:ring-2 focus:ring-[#EBA40B]/50 transition-all duration-300"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Message</label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#EBA40B] focus:ring-2 focus:ring-[#EBA40B]/50 transition-all duration-300 h-32"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#EBA40B] to-[#EEB141] text-black rounded-xl font-semibold hover:shadow-lg hover:shadow-[#EBA40B]/50 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-8"
              >
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="group block"
                  >
                    <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/5 hover:border-[#EBA40B]/20 transition-all duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#EBA40B] to-[#EEB141] flex items-center justify-center text-black">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-white/60 text-sm">{info.title}</h3>
                          <p className="text-white text-lg font-medium">{info.value}</p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Contact; 