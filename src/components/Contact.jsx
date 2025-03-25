import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-[#EFB54F]">Get in Touch</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#EFB54F] to-[#EBA40B] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-[#EFB54F]/10 flex items-center justify-center">
                      <FaEnvelope className="w-6 h-6 text-[#EFB54F]" />
                    </div>
                    <div>
                      <h4 className="text-white/80 font-medium">Email</h4>
                      <p className="text-white/60">your.email@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-[#EFB54F]/10 flex items-center justify-center">
                      <FaLinkedin className="w-6 h-6 text-[#EFB54F]" />
                    </div>
                    <div>
                      <h4 className="text-white/80 font-medium">LinkedIn</h4>
                      <p className="text-white/60">linkedin.com/in/yourprofile</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-[#EFB54F]/10 flex items-center justify-center">
                      <FaGithub className="w-6 h-6 text-[#EFB54F]" />
                    </div>
                    <div>
                      <h4 className="text-white/80 font-medium">GitHub</h4>
                      <p className="text-white/60">github.com/yourusername</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#EFB54F] to-[#EBA40B] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Follow Me</h3>
                <div className="flex space-x-6">
                  <a href="#" className="text-white/60 hover:text-[#EFB54F] transition-colors duration-300">
                    <FaGithub className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-[#EFB54F] transition-colors duration-300">
                    <FaLinkedin className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-[#EFB54F] transition-colors duration-300">
                    <FaTwitter className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative group animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#EFB54F] to-[#EBA40B] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#EFB54F] transition-colors duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#EFB54F] transition-colors duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/80 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#EFB54F] transition-colors duration-300"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-[#EFB54F] text-black font-semibold rounded-lg hover:bg-[#EBA40B] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 