import React from 'react';
import Skill from '../components/Skill';
import { assets } from '../assets/assets';

const Skills = () => {
  const skillsData = [
    { name: 'HTML', value: 90, image: assets.html, color: '#FF4500' },
    { name: 'CSS', value: 85, image: assets.css, color: '#1B72BA' },
    { name: 'JavaScript', value: 80, image: assets.js, color: '#F7DF1E' },
    { name: 'NodeJS', value: 75, image: assets.nodeJS, color: '#8CC84B' },
    { name: 'Nginx', value: 70, image: assets.nginx, color: '#009639' },
    { name: 'Python', value: 60, image: assets.python, color: '#3572A5' },
    { name: 'React', value: 60, image: assets.react, color: '#61DBFB' },
    { name: 'Docker', value: 60, image: assets.docker, color: '#3B8CB4' },
  ];

  return (
    <section
      id="skills"
      className="py-10 bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-6 text-gray-800">
          Skills
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600">
          Here are the technologies I work with, each polished like a diamond,
          representing my journey and expertise.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center items-center">
          {skillsData.map((skill) => (
            <Skill
              key={skill.name}
              name={skill.name}
              value={skill.value}
              image={skill.image}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
