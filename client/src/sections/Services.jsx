import React from 'react';
import Service from '../components/Service';
import { assets } from '../assets/assets';

const Services = () => {
  const serviceInfo = [
    {
      icon: `${assets.responsive}`,
      title: 'Responsive',
      text1: 'My layouts work on any device, big or small.',
      text2: 'HTML, CSS',
    },
    {
      icon: `${assets.fast}`,
      title: 'Fast',
      text1: 'Fast load times and lag-free interaction, my highest priority..',
      text2: 'JavaScript, React',
    },
    {
      icon: `${assets.dynamic}`,
      title: 'Dynamic',
      text1: "Websites don't have to be static, I love making them dynamic.",
      text2: 'Components Based',
    },
    {
      icon: `${assets.social}`,
      title: 'Social',
      text1: 'I am a team player and enjoy working together.',
      text2: 'Communication Skills',
    },
  ];
  return (
    <section
      id="services"
      className="relative py-16 px-4 lg:py-20 text-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-50"></div>

      <div className="container relative mx-auto z-10">
        <h2 className="text-center text-3xl font-bold mb-6">Services</h2>
        <p className="text-center max-w-2xl mx-auto mb-12">
          The best way to learn and grow is by stepping out of your comfort
          zone. Here’s what getting out of mine has taught me:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceInfo.map((info, index) => (
            <Service
              key={index}
              image={info.icon}
              title={info.title}
              text1={info.text1}
              text2={info.text2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
