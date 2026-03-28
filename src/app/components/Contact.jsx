'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

const Contact = () => {

  return (
    <section id="contact" className="py-12 bg-black">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
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

      </div>
    </section>
  );
};

export default Contact;
