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
      className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-[fadeInUp_1s_ease-out]">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start animate-[slideInLeft_1s_ease-out]">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <img
                src={assets.hackerMind}
                alt="Hacker Mindset"
                className="relative w-full max-w-md rounded-2xl shadow-2xl transform transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-6 animate-[slideInRight_1s_ease-out]">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/50 p-8 rounded-2xl shadow-lg border border-purple-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                    {calculateAge(birthDate)}
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  I am a {calculateAge(birthDate)}-year-old IT developer with a strong passion for technology and a commitment to continuous learning. My journey in the tech world began with a deep curiosity and a desire to understand how things work, which led me to pursue a career in IT development. I have honed my skills through various projects and experiences, always striving to stay at the forefront of technological advancements.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800/50 dark:to-gray-800 p-8 rounded-2xl shadow-lg border border-blue-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  My journey reflects a strong dedication to learning, growth, and creating meaningful contributions to the tech community. I am passionate about leveraging technology to solve real-world problems and create innovative solutions that make a positive impact.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-800/50 p-8 rounded-2xl shadow-lg border border-pink-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  With a strong foundation in IT development and a passion for technology, I am excited to continue growing and contributing to the ever-evolving tech landscape. I am committed to using my skills and knowledge to create innovative solutions that make a positive impact on the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
