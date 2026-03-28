'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFolderOpen } from "react-icons/fa6";

const projects = [
  {
    title: "AutoDoc Local",
    description: "A privacy-first documentation generator that runs entirely in the browser. It uses a local LLM (WebLLM) to analyze code and generate READMEs without ever sending data to a cloud server. Features include an interactive file visualization graph, real-time documentation streaming, and a premium \"glassmorphism\" dark mode UI.",
    tech: ["Next.js 14", "WebLLM", "Tailwind CSS", "Framer Motion", "React Flow"],
    link: "https://autodoc-local.vercel.app",
    github: "https://github.com/Kurt0913/autodoc-local",
    featured: true
  },
  {
    title: "Lumina",
    description: "A minimalist, highly readable programming language featuring a unique \"Light and Optics\" thematic syntax. Designed for clarity and elegance in code expression.",
    tech: ["Python 3", "Flask", "Vanilla JavaScript", "HTML/CSS"],
    link: "https://lumina-project-two.vercel.app/",
    github: "https://github.com/Kurt0913/Lumina_Project",
    featured: true
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold tracking-tight text-black dark:text-white mb-4 flex items-center gap-3"
        >
          <FaFolderOpen className="text-blue-500" /> 
          Featured Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-12"
        ></motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative border rounded-xl p-6 transition-all duration-300 cursor-pointer bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg dark:hover:shadow-blue-500/20"
            >
              {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full">
                  ⭐ Featured
                </div>
              )}

              <h3 className="text-xl font-semibold text-black dark:text-white mb-2 pr-24">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

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