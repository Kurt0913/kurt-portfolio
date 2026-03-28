'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa6';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center transition-colors duration-300 relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Kurt Tendero
        </p>

        <div className="flex gap-6">
          <a href="https://github.com/Kurt0913" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors hover:scale-110 duration-200">
            GitHub
          </a>
          <a href="https://linkedin.com/in/kurt-tendero" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors hover:scale-110 duration-200">
            LinkedIn
          </a>
          <a href="mailto:kurttendero@gmail.com" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors hover:scale-110 duration-200">
            Email
          </a>
        </div>

      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow z-40"
        aria-label="Back to top"
      >
        <FaArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;