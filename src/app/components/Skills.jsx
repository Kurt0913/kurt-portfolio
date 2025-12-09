'use client'; 
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode } from "react-icons/fa6"; // Ensure you have the icon imported

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML5"] },
  { category: "Backend", items: ["Node.js", "Python", "C++", "Java", "MySQL", "Firebase", "SQLite"] },
  { category: "Tools", items: ["Git", "Github", "VS Code", "Vercel", "Figma"] }
];

const Skills = () => {
  return (
    // FIXED: Added id="skills" so the Navbar link works
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      
      {/* FIXED: Changed max-w-6xl to max-w-4xl for better indentation */}
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-center mb-12 text-black dark:text-white flex justify-center items-center gap-3"
        >
          <FaCode className="text-gray-900 dark:text-white" />
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Changed to 2 columns for cleaner look */}
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-md border border-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;