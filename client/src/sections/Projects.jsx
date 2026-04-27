import { assets } from '../assets/assets';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Das Investment',
      link: 'https://www.dasinvestment.com/',
      image: `${assets.dasInvestment}`,
    },
    {
      title: 'Tanda Lite store',
      link: 'https://tanda.fit',
      image: `${assets.tandaLiteStore}`,
    },
    {
      title: 'Cinimax',
      link: 'not available yet',
      image: `${assets.cinimax}`,
      isInProgress: true,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-[float_6s_ease-in-out_infinite]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 animate-[fadeInUp_1s_ease-out]">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Websites
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            A selection of some work, showcasing creativity, dedication, and
            a commitment to delivering high-quality web solutions.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="animate-[fadeInUp_1s_ease-out]" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
