import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Tanda Market Place',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/500x300',
    },
    {
      title: 'Cimax App',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/500x300',
    },
    {
      title: 'Live Chat App',
      isInProgress: true,
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-3xl mx-auto">
            A selection of some work, showcasing creativity, dedication, and
            technical expertise.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
