'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
      <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full shadow-lg">
        
        {/* Home Icon */}
        <Link 
            href="/" 
            className="p-3 hover:bg-gray-100 rounded-full text-black transition-colors"
        >
            <FaHome size={18} />
        </Link>

        {/* Separator Line */}
        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        {/* Navigation Links */}
        <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.id}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all relative ${
                  activeSection === link.id
                    ? 'text-black bg-gray-100'
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
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
             className="ml-2 px-4 py-2 text-xs font-bold text-white bg-black rounded-full hover:opacity-80 transition"
        >
            Resume
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;