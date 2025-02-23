import React from 'react';

const ProjectCard = ({ title, link, image, isInProgress }) => {
  return (
    <div className="relative group w-full h-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {isInProgress ? (
          <p className="mt-2 text-yellow-400 font-medium">
            <span className="inline-block animate-ellipsis">In Progress</span>
          </p>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-all"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
