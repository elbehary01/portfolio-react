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
      title: 'Future Muscles',
      link: 'https://futuremuscles.com/',
      image: `${assets.futuremuscles}`,
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
      className="py-20 md:py-28 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Enhanced background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-[float_8s_ease-in-out_infinite]"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-20 animate-[fadeInUp_1s_ease-out]">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full uppercase tracking-widest border border-purple-200 dark:border-purple-700">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Featured Websites
          </h2>
          <div className="flex gap-2 justify-center mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
            A selection of some work, showcasing creativity, dedication, and
            a commitment to delivering high-quality web solutions.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
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
