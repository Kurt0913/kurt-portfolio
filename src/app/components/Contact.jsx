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
    <section id="contact" className="py-20 bg-black dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-white mb-12 flex items-center gap-3 justify-center"
        >
          <FaEnvelope className="text-white" />
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Email Card */}
          <a
            href="mailto:kurttendero@gmail.com"
            className="p-6 bg-gray-800 border border-gray-700 rounded-2xl hover:border-gray-600 transition text-center cursor-pointer"
          >
            <FaEnvelope className="text-3xl text-white mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400 text-sm">kurttendero@gmail.com</p>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/Kurt0913"
            target="_blank"
            rel="noreferrer"
            className="p-6 bg-gray-800 border border-gray-700 rounded-2xl hover:border-gray-600 transition text-center cursor-pointer"
          >
            <FaGithub className="text-3xl text-white mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
            <p className="text-gray-400 text-sm">Check my code</p>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/kurt-tendero"
            target="_blank"
            rel="noreferrer"
            className="p-6 bg-gray-800 border border-gray-700 rounded-2xl hover:border-gray-600 transition text-center cursor-pointer"
          >
            <FaLinkedin className="text-3xl text-white mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
            <p className="text-gray-400 text-sm">Connect with me</p>
          </a>

        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Send me a message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              {submitted ? '✓ Message sent!' : 'Send Message'}
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
