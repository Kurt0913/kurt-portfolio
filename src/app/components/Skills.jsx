'use client'; 
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode } from "react-icons/fa6";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript"] },
  { category: "Backend", items: ["Node.js", "Python", "C++", "Java", "PostgreSQL", "Firebase", "Supabase"] },
  { category: "DevOps & Cloud", items: ["AWS", "Docker", "Kubernetes", "Github Actions"] }
];

const Skills = () => {
  return (
    // FIXED: Added id="skills" so the Navbar link works
    <section id="skills" className="py-12 bg-gray-50">
      
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold tracking-tight text-center mb-8 text-black flex justify-center items-center gap-3"
        >
          <FaCode className="text-gray-900" />
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg border border-gray-200"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded border border-gray-200"
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