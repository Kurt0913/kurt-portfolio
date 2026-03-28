'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just open email client
    const mailtoLink = `mailto:kurttendero@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-12 bg-black dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold tracking-tight text-white mb-8 flex items-center gap-3 justify-center"
        >
          <FaEnvelope className="text-white" />
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          
          {/* Email Card */}
          <a
            href="mailto:kurttendero@gmail.com"
            className="p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-gray-600 transition text-center cursor-pointer"
          >
            <FaEnvelope className="text-2xl text-white mb-2 mx-auto" />
            <h3 className="text-base font-semibold text-white mb-1">Email</h3>
            <p className="text-gray-400 text-xs">kurttendero@gmail.com</p>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/Kurt0913"
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-gray-600 transition text-center cursor-pointer"
          >
            <FaGithub className="text-2xl text-white mb-2 mx-auto" />
            <h3 className="text-base font-semibold text-white mb-1">GitHub</h3>
            <p className="text-gray-400 text-xs">Check my code</p>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/kurt-tendero"
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-gray-600 transition text-center cursor-pointer"
          >
            <FaLinkedin className="text-2xl text-white mb-2 mx-auto" />
            <h3 className="text-base font-semibold text-white mb-1">LinkedIn</h3>
            <p className="text-gray-400 text-xs">Connect with me</p>
          </a>

        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 border border-gray-800 rounded-lg p-6 max-w-md mx-auto"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Send a message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-3">
            
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gray-600 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gray-600 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gray-600 transition-colors resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-white text-black font-semibold rounded text-sm hover:bg-gray-100 transition"
            >
              {submitted ? '✓ Sent!' : 'Send Message'}
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
