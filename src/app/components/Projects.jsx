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
    <section id="projects" className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold tracking-tight text-black mb-6 flex items-center gap-3"
        >
          <FaFolderOpen className="text-gray-500" /> {/* The Icon */}
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // Card Styling
              className="group relative border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition-colors bg-white"
            >
              {project.featured && (
                <div className="absolute top-3 right-3 px-2 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded">
                  ⭐ Featured
                </div>
              )}

              <h3 className="text-base font-semibold text-black mb-1 pr-20">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-3 text-xs leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 text-xs">
                {/* Links: Monochrome Underline Style */}
                <Link href={project.github} className="text-gray-600 hover:text-black underline underline-offset-2 transition-colors">
                  GitHub ↗
                </Link>
                <Link href={project.link} className="text-gray-600 hover:text-black underline underline-offset-2 transition-colors">
                  Live ↗
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