import React from 'react';

const Service = ({ image, title, text1, text2 }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 text-center text-gray-900 transition-transform transform hover:-translate-y-3 hover:shadow-2xl hover:scale-105 duration-300 ease-in-out">
      <div className="flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 shadow-md">
        <img
          src={image}
          alt={title}
          className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
        />
      </div>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
        {title}
      </h3>
      <p className="text-sm sm:text-base lg:text-lg text-gray-700">{text1}</p>
      <p className="text-xs sm:text-sm lg:text-base text-gray-500 mt-4">
        {text2}
      </p>
    </div>
  );
};

export default Service;
