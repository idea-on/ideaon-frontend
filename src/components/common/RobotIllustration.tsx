import React from 'react';

export const RobotIllustration = () => (
  <div className="relative w-full h-full bg-gradient-to-br from-emerald-900 via-teal-800 to-slate-900 overflow-hidden">
    {/* Background elements */}
    <div className="absolute inset-0">
      {/* Pink spherical flowers scattered throughout */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-8 h-8 md:w-12 md:h-12 bg-pink-400 rounded-full opacity-80"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            filter: 'blur(0.5px)',
            boxShadow: '0 0 20px rgba(244, 114, 182, 0.6)'
          }}
        />
      ))}
      
      {/* Green stems and leaves */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 bg-green-600 opacity-70"
          style={{
            left: `${Math.random() * 70 + 15}%`,
            top: `${Math.random() * 60 + 20}%`,
            height: `${Math.random() * 100 + 50}px`,
            transform: `rotate(${Math.random() * 30 - 15}deg)`
          }}
        />
      ))}
    </div>

    {/* Robot figure */}
    <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
      {/* Robot head */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full shadow-2xl">
        {/* Orange visor */}
        <div className="absolute top-6 left-4 right-4 h-8 bg-gradient-to-r from-orange-400 to-amber-500 rounded-lg shadow-inner">
          <div className="w-full h-full bg-gradient-to-r from-orange-300 to-yellow-400 rounded-lg opacity-80 animate-pulse"></div>
        </div>
        
        {/* Side panel */}
        <div className="absolute left-2 top-4 w-6 h-6 bg-gray-300 rounded-full border-2 border-gray-400"></div>
        
        {/* Neck cables */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-8 bg-gray-400 rounded-full mx-1 inline-block"
              style={{ transform: `translateX(${(i - 1) * 8}px)` }}
            />
          ))}
        </div>
      </div>

      {/* Robot body */}
      <div className="relative w-24 h-32 md:w-28 md:h-36 bg-gradient-to-br from-blue-200 to-blue-300 rounded-t-3xl mx-auto mt-4 shadow-xl">
        {/* Body details */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-400 rounded-full"></div>
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-300 rounded-full border-2 border-gray-400"></div>
      </div>

      {/* Robot arms */}
      <div className="absolute top-20 -left-8 w-6 h-16 bg-gradient-to-b from-pink-200 to-pink-300 rounded-full transform rotate-12"></div>
      <div className="absolute top-20 -right-8 w-6 h-16 bg-gradient-to-b from-pink-200 to-pink-300 rounded-full transform -rotate-12"></div>

      {/* Robot hands holding device */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg shadow-lg">
        <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg m-1 opacity-80"></div>
      </div>
    </div>
  </div>
);