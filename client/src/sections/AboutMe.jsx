import { useState } from 'react';
import { assets } from '../assets/assets';

const AboutMe = () => {
  const [birthDate] = useState('1988-11-13');

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
    <section
      id="about"
      className="py-20 md:py-28 px-4 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-[float_8s_ease-in-out_infinite]"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20 animate-[fadeInUp_1s_ease-out]">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full uppercase tracking-widest border border-purple-200 dark:border-purple-700">
              Story
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="flex gap-2 justify-center mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center lg:justify-start animate-[slideInLeft_1s_ease-out]">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-300 animate-[pulse-slow_3s_ease-in-out_infinite]"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-1">
                <img
                  src={assets.hackerMind}
                  alt="Hacker Mindset"
                  className="relative w-full max-w-sm md:max-w-md rounded-2xl shadow-2xl transform transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-[slideInRight_1s_ease-out]">
            <div className="group bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg dark:shadow-2xl border border-gray-100 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-xl dark:hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:shadow-purple-500/50">
                    {calculateAge(birthDate)}
                  </div>
                </div>
                <div className="flex-1">
                <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    I am a {calculateAge(birthDate)}-year-old IT developer with a strong passion for technology and a commitment to continuous learning. My journey in the tech world began with a deep curiosity and a desire to understand how things work.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg dark:shadow-2xl border border-gray-100 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl dark:hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    My journey reflects a strong dedication to learning, growth, and creating meaningful contributions to the tech community.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg dark:shadow-2xl border border-gray-100 dark:border-gray-700 hover:border-pink-400 dark:hover:border-pink-500 hover:shadow-xl dark:hover:shadow-pink-500/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-pink-500/50 transition-all">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M7 12a5 5 0 1110 0M15 12a3 3 0 11-6 0 3 3 0 016 0Z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    I am passionate about leveraging technology to solve real-world problems and create innovative solutions that make a positive impact on the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
