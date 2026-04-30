import React, { useState, useContext, useEffect } from 'react';
import { assets } from '../assets/assets';
import { scrollToSection } from '../utils/scrollTo';
import { PortfolioContext } from '../context/PortfolioContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const { theme, toggleTheme } = useContext(PortfolioContext);

  useEffect(() => {
    // console.log('Navbar: theme changed to', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    // console.log('Theme toggle button clicked');
    toggleTheme();
  };

  const sections = [
    'Home',
    'About',
    'Services',
    'Skills',
    'Projects',
    'Hire Me',
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 z-50 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center group">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <img
              className="relative w-14 h-14 cursor-pointer transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 dark:invert"
              src={assets.logo}
              alt="Logo"
              onClick={() => scrollToSection('home')}
            />
          </div>
        </div>

        <ul className="hidden md:flex items-center space-x-1">
          {sections.map((section) => (
            <li
              key={section}
              className="group cursor-pointer px-4 py-2 rounded-lg transition-all duration-300"
              onClick={() => scrollToSection(section.toLowerCase())}
            >
              <span className="relative text-gray-700 dark:text-gray-300 font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {section}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-3">
          {/* <button
            onClick={handleThemeToggle}
            className="group relative p-2.5 sm:p-3 bg-gray-100 dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md dark:shadow-lg hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 transform hover:scale-110 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-15 transition-opacity duration-300"></div>
            <span className="relative text-xl sm:text-2xl inline-block transition-transform duration-300" style={theme === 'light' ? { transform: 'rotate(0deg)' } : { transform: 'rotate(180deg)' }}>
              {theme === 'light' ? '🌙' : '☀️'}
            </span>
          </button> */}

          <button
            className="md:hidden p-3 bg-gray-100 dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md dark:shadow-lg transition-all duration-300 transform hover:scale-110"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className="text-2xl text-gray-700 dark:text-gray-300">
              {isMenuOpen ? '✖️' : '☰'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 animate-[fadeInUp_0.3s_ease-out]">
          <ul className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-2xl rounded-2xl p-6 space-y-2 border border-gray-200 dark:border-gray-800">
            {sections.map((section) => (
              <li
                key={section}
                className="group cursor-pointer px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 dark:hover:from-purple-900/20 dark:hover:to-blue-900/20 transition-all duration-300"
                onClick={() => {
                  scrollToSection(section.toLowerCase());
                  setIsMenuOpen(false);
                }}
              >
                <span className="relative text-gray-700 dark:text-gray-300 font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex items-center space-x-2">
                  <span className="w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-6 transition-all duration-300"></span>
                  <span>{section}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
