import React from 'react';
import { assets } from '../assets/assets';
import { scrollToSection } from '../utils/scrollTo';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen text-gray-800 dark:text-gray-100 bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 flex items-center pt-20"
    >
      <div className="container mx-auto h-full px-6 sm:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
          <p className="text-lg sm:text-xl font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Hi, here is
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Ahmed Elbehary
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-700 dark:text-gray-300">
            Developer
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mt-4">
            Crafting digital experiences with passion and precision.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-block mt-6 px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700 transition duration-300"
          >
            Contact Me
          </button>
        </div>

        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={assets.meBlackAndWhite}
            alt="Ahmed Elbehary"
            className="w-3/4 sm:w-2/3 md:w-1/2 lg:max-w-sm xl:max-w-md rounded-full shadow-lg border-4 border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3 hover:shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
