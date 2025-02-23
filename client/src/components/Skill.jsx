import React, { useEffect, useState } from 'react';

const Skill = ({ name, value, image, color }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value);
    }, 300); // Delay for animation
    return () => clearTimeout(timer);
  }, [value]);

  const radius = 45;
  const stroke = 6;
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex justify-center items-center group rounded-lg shadow-md gap-4 w-[140px] h-[180px] md:w-[160px] md:h-[180px] lg:w-[180px] lg:h-[200px] bg-gradient-to-tr from-gray-100 via-white to-gray-300 transition-transform duration-300 hover:shadow-lg hover:scale-105">
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <div className="w-full h-full  relative group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-white to-gray-200 shadow-lg group-hover:shadow-xl">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <img
              src={image}
              alt={`${name} logo`}
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain mb-2"
            />
            <div className="relative">
              <svg
                height={radius * 2}
                width={radius * 2}
                className="rotate-[-90deg] transform"
              >
                <circle
                  stroke="#e5e7eb"
                  fill="transparent"
                  strokeWidth={stroke}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                />
                <circle
                  stroke={color}
                  fill="transparent"
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-1000 ease-in-out"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs md:text-sm lg:text-base font-bold text-gray-800">
                  {progress}%
                </span>
              </div>
            </div>
            <h3 className="text-xs md:text-sm lg:text-base font-medium text-gray-800 mt-1">
              {name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
