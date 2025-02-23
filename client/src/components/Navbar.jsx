import React, { useState, useContext, useEffect } from 'react';
import { assets } from '../assets/assets';
import { scrollToSection } from '../utils/scrollTo';
import { PortfolioContext } from '../context/PortfolioContext';
import classNames from 'classnames';

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

  const sections = [
    'Home',
    'About',
    'Services',
    'Skills',
    'Projects',
    'Contact',
  ];

  return (
    <nav
      className={classNames(
        'fixed top-0 left-0 w-full p-4 transition-all z-50',
        {
          'bg-white dark:bg-gray-900 shadow-lg': isScrolled,
          'bg-transparent': !isScrolled,
        }
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="w-16 h-16 mr-2 cursor-pointer"
            src={assets.logo}
            alt="Logo"
            onClick={() => scrollToSection('home')}
          />
        </div>

        <ul className="hidden md:flex items-center space-x-8">
          {sections.map((section) => (
            <li
              key={section}
              className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium"
              onClick={() => scrollToSection(section.toLowerCase())}
            >
              <span className="relative group">
                {section}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all"></span>
              </span>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md hover:scale-110 transition-transform"
            aria-label={`Switch to ${
              theme === 'light' ? 'dark' : 'light'
            } mode`}
          >
            {theme === 'light' ? '☀️' : '🌙'}
          </button>

          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✖️' : '☰'}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <ul className="md:hidden mt-4 bg-white dark:bg-gray-900 shadow-md rounded-lg p-4 space-y-4">
          {sections.map((section) => (
            <li
              key={section}
              className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium"
              onClick={() => {
                scrollToSection(section.toLowerCase());
                setIsMenuOpen(false);
              }}
            >
              <span className="relative group">
                {section}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all"></span>
              </span>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
