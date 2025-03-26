import React, { useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    emailjs.sendForm(
      'service_pogg00g', // Collez votre Service ID ici
      'template_pe0mly7', // Collez votre Template ID ici
      form.current,
      '6_5XEafKmVhqtmA8v' // Collez votre Public Key ici
    )
      .then((result) => {
        setStatus({ 
          type: 'success', 
          message: 'Message envoyé avec succès! Nous vous répondrons bientôt.' 
        });
        form.current.reset();
      })
      .catch((error) => {
        setStatus({ 
          type: 'error', 
          message: 'Une erreur est survenue. Veuillez réessayer.' 
        });
        console.error('EmailJS Error:', error);
      })
      .finally(() => {
        setIsSending(false);
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
                      <p className="text-white/60">chouk.salma4@gmail.com
                      </p>
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
                      <p className="text-white/60">https://github.com/chouksalma</p>
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
                  <a href="https://github.com/chouksalma" className="text-white/60 hover:text-[#EFB54F] transition-colors duration-300">
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
              <form 
                ref={form} 
                onSubmit={sendEmail}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nom */}
                  <div>
                    <label className="block text-[#F1AD00] mb-2" htmlFor="user_name">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      id="user_name"
                      required
                      className="w-full bg-black border-2 border-[#F1AD00]/20 rounded-lg px-4 py-3 text-white focus:border-[#F1AD00] transition-colors duration-300"
                      placeholder="Votre nom"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[#F1AD00] mb-2" htmlFor="user_email">
                      Email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      id="user_email"
                      required
                      className="w-full bg-black border-2 border-[#F1AD00]/20 rounded-lg px-4 py-3 text-white focus:border-[#F1AD00] transition-colors duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[#F1AD00] mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows="6"
                    className="w-full bg-black border-2 border-[#F1AD00]/20 rounded-lg px-4 py-3 text-white focus:border-[#F1AD00] transition-colors duration-300"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                {/* Bouton d'envoi */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="group relative inline-flex items-center gap-2 bg-[#F1AD00] text-black px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:bg-[#F1AD00]/90 disabled:opacity-50"
                  >
                    {isSending ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      <span>Envoyer le message</span>
                    )}
                  </button>
                </div>

                {/* Message de statut */}
                {status && (
                  <div 
                    className={`text-center mt-4 p-4 rounded-lg ${
                      status.type === 'success' 
                        ? 'bg-green-500/10 text-green-500' 
                        : 'bg-red-500/10 text-red-500'
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 