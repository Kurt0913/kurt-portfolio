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
    github: "https://github.com/Kurt0913/autodoc-local"
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