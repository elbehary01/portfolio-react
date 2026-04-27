
const ProjectCard = ({ title, link, image, isInProgress }) => {
  return (
    <div className="group relative w-full h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 dark:border-gray-700">
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 dark:to-black opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <h3 className="text-2xl font-bold text-white mb-3 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">{title}</h3>
        {isInProgress ? (
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <p className="text-yellow-400 font-semibold">In Progress</p>
          </div>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 mt-4 px-6 py-3 text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 group/btn"
          >
            <span>View Project</span>
            <svg className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>

      {/* Top corner decoration */}
      <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">   <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 mt-4 px-6 py-3 text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 group/btn"
          >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
