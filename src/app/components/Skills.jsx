'use client'; 
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode } from "react-icons/fa6";

const skills = [
  { 
    category: "Frontend", 
    items: [
      { name: "React", proficiency: 90 },
      { name: "Next.js", proficiency: 85 },
      { name: "Tailwind CSS", proficiency: 95 },
      { name: "HTML5", proficiency: 95 }
    ]
  },
  { 
    category: "Backend", 
    items: [
      { name: "Node.js", proficiency: 80 },
      { name: "Python", proficiency: 85 },
      { name: "C++", proficiency: 75 },
      { name: "Java", proficiency: 70 },
      { name: "MySQL", proficiency: 80 },
      { name: "Firebase", proficiency: 85 },
      { name: "SQLite", proficiency: 80 }
    ]
  },
  { 
    category: "Tools", 
    items: [
      { name: "Git", proficiency: 90 },
      { name: "Github", proficiency: 90 },
      { name: "VS Code", proficiency: 95 },
      { name: "Vercel", proficiency: 85 },
      { name: "Figma", proficiency: 75 }
    ]
  }
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
          className="text-4xl font-bold tracking-tight text-center mb-4 text-black dark:text-white flex justify-center items-center gap-3"
        >
          <FaCode className="text-blue-500" />
          Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-lg mx-auto"
        >
          Here are the technologies I've mastered and continue to develop expertise in
        </motion.p>

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
              
              <div className="space-y-3">
                {skillGroup.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {item.name}
                      </span>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        {item.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.proficiency}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      />
                    </div>
                  </motion.div>
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