import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-black/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-full shadow-xl hover:shadow-2xl transition-shadow"
      >
        
        {/* Home Icon */}
        <Link 
            href="/" 
            className="p-3 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-full text-black dark:text-white transition-all duration-200 hover:scale-110"
        >
            <FaHome size={18} />
        </Link>

        {/* Separator Line */}
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>

        {/* Navigation Links */}
        <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.id}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 relative group ${
                  activeSection === link.id
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
        </div>

        {/* Resume Button */}
        <Link 
             href="/resume.pdf" 
             target="_blank"
             className="ml-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200 hover:scale-105"
        >
            Resume
        </Link>

      </motion.div>
    </nav>
  );
};

export default Navbar;