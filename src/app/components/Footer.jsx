import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Kurt Tendero
        </p>

        <div className="flex gap-6">
          <a href="https://github.com/Kurt0913" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
            GitHub
          </a>
          <a href="linkedin.com/in/kurt-tendero" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="mailto:kurttendero@gmail.com" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
            Email
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;