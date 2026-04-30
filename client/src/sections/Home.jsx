import { assets } from '../assets/assets';
import { scrollToSection } from '../utils/scrollTo';

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen text-gray-800 dark:text-gray-100 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 flex items-center pt-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-[float_7s_ease-in-out_infinite]"></div>
      </div>

      <div className="container relative mx-auto h-full px-6 sm:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between z-10">
        <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left animate-[slideInLeft_1s_ease-out]">
          <p className="text-lg sm:text-xl font-semibold uppercase tracking-wider bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Hi, I'm
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 dark:from-purple-400 dark:via-blue-400 dark:to-pink-400 bg-clip-text text-transparent">
            Ahmed Elbehary
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 dark:text-gray-200">
            Full Stack Developer
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl">
            Powering AI to build beautiful websites with precision and modern technology..
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start mt-8 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-purple-600 dark:text-purple-400 bg-white dark:bg-gray-800 border-2 border-purple-600 dark:border-purple-400 rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl hover:bg-purple-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
            >
              Work
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0 animate-[slideInRight_1s_ease-out]">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-300 animate-[pulse-slow_3s_ease-in-out_infinite]"></div>
            <img
              src={assets.meBlackAndWhite}
              alt="Ahmed Elbehary"
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-700 transition-all duration-500 ease-in-out transform group-hover:scale-105 group-hover:rotate-3"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-[pulse_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
