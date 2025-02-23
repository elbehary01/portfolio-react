import React, { useState } from 'react';
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
      className="py-16 px-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center lg:justify-start">
          <img
            src={assets.hackerMind}
            alt="Hacker Mindset"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-95 hover:shadow-md active:scale-90 transform-origin-center"
            loading="lazy"
          />
        </div>

        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800 dark:text-gray-100">
            About
          </h2>

          <p className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-300">
            I'm {calculateAge(birthDate)} years old and have been living in
            Berlin since 2016. I began exploring programming independently out
            of curiosity and quickly discovered a strong passion for it. This
            led me to enroll in a one-year intensive training program to deepen
            my knowledge in a structured and guided manner.
          </p>

          <p className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-300">
            During this time, I gained valuable skills while collaborating with
            peers and sharing ideas, further reinforcing my commitment to the
            field. Following the program, I transitioned into a professional
            role as an IT developer, where I apply and expand my expertise in
            real-world projects.
          </p>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            My journey reflects a strong dedication to learning, growth, and
            creating meaningful contributions to the tech community.
          </p>

          <hr className="border-t-2 border-dotted border-gray-400 dark:border-gray-600 mt-6" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
