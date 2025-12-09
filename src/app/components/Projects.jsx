import React from 'react';
import Link from 'next/link';

const projects = [
  {
    title: "Project One",
    description: "A brief explanation of what this project does. Keep it to two sentences. Focus on the problem it solves.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#"
  },
  {
    title: "Project Two",
    description: "Another cool project. Maybe a Python script that automates a boring task or a game built in C++.",
    tech: ["Python", "Pandas", "Automation"],
    link: "#",
    github: "#"
  },
  {
    title: "Project Three",
    description: "Your capstone project or a hackathon entry. Something that shows you can work in a team.",
    tech: ["Java", "Spring Boot", "MySQL"],
    link: "#",
    github: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-gray-50 dark:bg-gray-800/50">
              
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <Link href={project.github} className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  GitHub ↗
                </Link>
                <Link href={project.link} className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Live Demo ↗
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;