'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-black dark:text-white mb-12 flex items-center gap-3"
        >
          <FaUser className="text-gray-500" />
          About 
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN: The Biography */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400"
          >
            <p>
              I am a <strong className="text-black dark:text-white">3rd Year Computer Science Student</strong> based in the Philippines. My journey started with a simple curiosity about how video games worked, which quickly evolved into a passion for software engineering.
            </p>
            <p>
              Currently, I focus on <strong className="text-black dark:text-white">Full-Stack Web Development</strong>. I love the thrill of solving complex backend problems while designing clean, minimalist user interfaces.
            </p>
            <p>
              When I'm not coding, you can find me exploring new tech trends, playing strategy games, or optimizing my workflow. I am always looking for opportunities to learn and collaborate on real-world projects.
            </p>
          </motion.div>

          {/* RIGHT COLUMN: The "Quick Stats" Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1: Education */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800"
            >
              <FaGraduationCap className="text-2xl text-gray-700 dark:text-gray-300 mb-4" />
              <h3 className="font-bold text-black dark:text-white mb-1">FEU Institute of Technology</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">BS in Computer Science Specializing in Software Engineering</p>
              <p className="text-xs text-gray-500 mt-1">2021 - Present</p>
            </motion.div>

            {/* Card 2: Location */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800"
            >
              <FaMapMarkerAlt className="text-2xl text-gray-700 dark:text-gray-300 mb-4" />
              <h3 className="font-bold text-black dark:text-white mb-1">Metro Manila</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Philippines</p>
              <p className="text-xs text-gray-500 mt-1">Open to Remote Work</p>
            </motion.div>

            {/* Card 3: Current Focus */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 col-span-1 sm:col-span-2"
            >
              <FaLaptopCode className="text-2xl text-gray-700 dark:text-gray-300 mb-4" />
              <h3 className="font-bold text-black dark:text-white mb-1">Current Focus</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Mastering <span className="font-medium text-black dark:text-white">Next.js</span> and building scalable web applications.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

// Make sure to import FaUser since we used it in the title!
import { FaUser } from "react-icons/fa";

export default About;