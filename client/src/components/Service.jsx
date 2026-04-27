
const Service = ({ image, title, text1, text2 }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 overflow-hidden">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        <div className="flex justify-center items-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 shadow-lg group-hover:shadow-purple-500/50 transition-shadow duration-300 group-hover:scale-110 transform">
          <img
            src={image}
            alt={title}
            className="w-12 h-12 object-contain filter brightness-0 invert"
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-300 mb-3">{text1}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg inline-block">
          {text2}
        </p>
      </div>
    </div>
  );
};

export default Service;
