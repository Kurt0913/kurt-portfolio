import React from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaCode, FaFolderOpen, FaEnvelope } from "react-icons/fa"; // Importing icons

const Navbar = () => {
  return (
    // CONTAINER: Fixed position, Centered, Floating, Glass Effect
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      
      <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-full shadow-lg">
        
        {/* Home Icon (Active Style Bubble) */}
        <Link 
            href="/" 
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
            <FaHome size={18} />
        </Link>

        {/* Separator Line */}
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1"></div>

        {/* Navigation Links */}
        <div className="flex items-center gap-1">
            
            <Link 
                href="#about" 
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all"
            >
                About
            </Link>
            
            <Link 
                href="#skills" 
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all"
            >
                Skills
            </Link>
            
            <Link 
                href="#projects" 
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all"
            >
                Projects
            </Link>
            
            <Link 
                href="#contact" 
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all"
            >
                Contact
            </Link>

        </div>

        {/* Optional: 'Hire Me' or CTA at the end */}
        <Link 
             href="/resume.pdf" 
             target="_blank"
             className="ml-2 px-4 py-2 text-xs font-bold text-white bg-black dark:bg-white dark:text-black rounded-full hover:opacity-80 transition"
        >
            Resume
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;