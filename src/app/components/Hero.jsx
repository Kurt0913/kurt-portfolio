import React from 'react';

const Hero = () => {
  return (
    // FIXED: Removed "..." and added text color transition
    <section className="flex flex-col items-center justify-center min-h-screen py-2 text-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 bg-blue-500 rounded-full mb-6 shadow-lg"></div>
        
        {/* FIXED: Added dark:text-white so the title is visible in dark mode */}
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm <span className="text-blue-600">Kurt Tendero</span>
        </h1>
        
        {/* FIXED: Removed "..." */}
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
          A Computer Science Student passionate about building web applications and solving real-world problems.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            View My Work
          </button>
          
          {/* FIXED: Added dark mode borders and text for the secondary button */}
          <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-700 dark:text-gray-300">
            Contact Me
          </button>
        </div>
    </section>
  );
};

export default Hero;