'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen py-2 text-center overflow-hidden bg-white dark:bg-black transition-colors duration-300">
        
        {/* --- BACKGROUND EFFECT START --- */}
        
        {/* 1. The Grid Pattern */}
        {/* This creates a graph-paper look using pure CSS gradients */}
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
            <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        {/* 2. The "Breathing" Glow Blob */}
        {/* This is a soft ball of light that moves behind your text */}
        <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3], 
            }}
            transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
            }}
            className="absolute z-0 w-[500px] h-[500px] bg-gray-200 dark:bg-gray-800 rounded-full blur-3xl opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />
        
        {/* --- BACKGROUND EFFECT END --- */}

        {/* --- MAIN CONTENT (Z-Index ensures this sits ON TOP of the background) --- */}
        <div className="relative z-10 flex flex-col items-center w-full max-w-4xl px-6"> {/* Added w-full max-w-4xl px-6 */}
    {/* ... your avatar, h1, p, buttons ... */}
            
            {/* Avatar */}
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-32 h-32 bg-gray-200 dark:bg-gray-800 rounded-full mb-6 border-4 border-white dark:border-black shadow-lg"
            ></motion.div>
            
            <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold tracking-tighter text-black dark:text-white mb-4"
            >
              Hi, I'm Kurt Tendero
            </motion.h1>
            
            <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl leading-relaxed text-gray-600 dark:text-gray-400 max-w-lg mx-auto"
            >
              A Computer Science Student passionate about building web applications and solving real-world problems.
            </motion.p>

            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex gap-4"
            >
              <Link href="#projects">
                <button className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-80 transition font-medium">
                  View My Work
                </button>
              </Link>
              
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition text-black dark:text-white font-medium"
              >
                Download Resume
              </a>
            </motion.div>

        </div>
    </section>
  );
};

export default Hero;