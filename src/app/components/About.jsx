'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaMarker, FaLaptopCode } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold tracking-tight text-black mb-6 flex items-center gap-3"
        >
          <FaUser className="text-gray-500" />
          About
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* LEFT COLUMN: The Biography */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-base leading-relaxed text-gray-600"
          >
            <p>
              I am a <strong className="text-black">3rd Year Computer Science Student</strong> based in the Philippines. My journey started with a simple curiosity about how video games worked, which quickly evolved into a passion for software engineering.
            </p>
            <p>
              Currently, I focus on <strong className="text-black">Full-Stack Web Development</strong>. I love the thrill of solving complex backend problems while designing clean, minimalist user interfaces.
            </p>
            <p>
              When I'm not coding, you can find me exploring new tech trends, playing strategy games, or optimizing my workflow. I am always looking for opportunities to learn and collaborate on real-world projects.
            </p>
          </motion.div>

          {/* RIGHT COLUMN: The "Quick Stats" Grid */}
          <div className="grid grid-cols-1 gap-4">
            
            {/* Card 1: Education */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-4 bg-gray-50 rounded-xl border border-gray-200"
            >
              <FaGraduationCap className="text-xl text-gray-700 mb-2" />
              <h3 className="font-bold text-black text-sm">FEU Institute of Technology</h3>
              <p className="text-xs text-gray-600">BS in Computer Science</p>
              <p className="text-xs text-gray-500 mt-1">2021 - Present</p>
            </motion.div>

            {/* Card 2: Location */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-4 bg-gray-50 rounded-xl border border-gray-200"
            >
              <FaMarker className="text-xl text-gray-700 mb-2" />
              <h3 className="font-bold text-black text-sm">Metro Manila</h3>
              <p className="text-xs text-gray-600">Philippines</p>
              <p className="text-xs text-gray-500 mt-1">Open to Remote Work</p>
            </motion.div>

            {/* Card 3: Current Focus */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-4 bg-gray-50 rounded-xl border border-gray-200"
            >
              <FaLaptopCode className="text-xl text-gray-700 mb-2" />
              <h3 className="font-bold text-black text-sm">Current Focus</h3>
              <p className="text-xs text-gray-600">
                Mastering <span className="font-medium text-black">Next.js</span> and building scalable web applications.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;