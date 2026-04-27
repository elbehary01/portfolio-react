import { assets } from '../assets/assets';
import Skill from '../components/Skill';

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
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-[float_7s_ease-in-out_infinite]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-[fadeInUp_1s_ease-out]">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A diverse skill set that combines technical expertise with creative problem-solving. From front-end development to back-end technologies, I have the tools and knowledge to bring your ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center items-center">
          {skillsData.map((skill, index) => (
            <div key={skill.name} className="animate-[fadeInUp_1s_ease-out]" style={{ animationDelay: `${index * 0.05}s` }}>
              <Skill
                name={skill.name}
                value={skill.value}
                image={skill.image}
                color={skill.color}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
