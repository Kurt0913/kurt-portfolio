'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaHome } from "react-icons/fa";
import { ThemeToggle } from './ThemeToggle';

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
      <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-full shadow-lg">
        
        {/* Home Icon */}
        <Link 
            href="/" 
            className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-black dark:text-white transition-colors"
        >
            <FaHome size={18} />
        </Link>

        {/* Separator Line */}
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1"></div>

        {/* Navigation Links */}
        <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.id}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all relative ${
                  activeSection === link.id
                    ? 'text-black dark:text-white bg-gray-100 dark:bg-gray-800'
                    : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
        </div>

        {/* Resume Button */}
        <Link 
             href="/resume.pdf" 
             target="_blank"
             className="ml-2 px-4 py-2 text-xs font-bold text-white bg-black dark:bg-white dark:text-black rounded-full hover:opacity-80 transition"
        >
            Resume
        </Link>

        {/* Theme Toggle */}
        <ThemeToggle />

      </div>
    </nav>
  );
};

export default Navbar;