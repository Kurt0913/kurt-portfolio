import React from 'react';
import Link from 'next/link'; // 1. IMPORT ADDED

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-2 text-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 bg-blue-500 rounded-full mb-6 shadow-lg"></div>
        
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm <span className="text-blue-600">Kurt Tendero</span>
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
          A Computer Science Student passionate about building web applications and solving real-world problems.
        </p>

        <div className="mt-8 flex gap-4">
          
          {/* 2. UPDATED: Wrapped in Link to scroll to #projects */}
          <Link href="#projects">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              View My Work
            </button>
          </Link>
          
          {/* 3. UPDATED: Changed to <a> tag for PDF download */}
          {/* Make sure 'resume.pdf' is inside your 'public' folder */}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-700 dark:text-gray-300"
          >
            Download Resume
          </a>
          
        </div>
    </section>
  );
};

export default Hero;