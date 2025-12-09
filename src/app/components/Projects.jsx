'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFolderOpen } from "react-icons/fa6";

const projects = [
    { title: "Project 1", description: "A brief explanation of what this project does.", tech: ["React", "Node"], link: "#", github: "#"},
    { title: "Project 2", description: "Another cool project.", tech: ["Python", "SQL"], link: "#", github: "#"},
    { title: "Project 3", description: "Your capstone project.", tech: ["Java", "Spring"], link: "#", github: "#"},
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-black dark:text-white mb-12 flex items-center gap-3"
        >
          <FaFolderOpen className="text-white-600" /> {/* The Icon */}
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // Card Styling
              className="group relative border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-gray-400 dark:hover:border-gray-600 transition-colors bg-white dark:bg-gray-900"
            >
              
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex gap-4">
                {/* Links: Monochrome Underline Style */}
                <Link href={project.github} className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white underline underline-offset-4 decoration-gray-300 transition-colors">
                  GitHub ↗
                </Link>
                <Link href={project.link} className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white underline underline-offset-4 decoration-gray-300 transition-colors">
                  Live Demo ↗
                </Link>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;