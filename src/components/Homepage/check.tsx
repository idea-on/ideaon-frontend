import React from 'react';

const SmoothPlusLayout = () => {
  return (
    <div className="min-h-screen  relative overflow-hidden flex items-center justify-center p-4">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Plus Shape Container */}
      <div className="relative w-full max-w-4xl aspect-square">
        
        {/* Main Plus Shape */}
        <div className="relative w-full h-full">
          
          {/* Top Rectangle */}
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-900 flex items-center justify-center"
            style={{
              width: '33.33%',
              height: '66.67%',
              borderRadius: '40px 40px 20px 20px'
            }}
          >
            {/* Glowing Orb */}
            <div className="absolute top-8 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
              <div className="w-6 h-6 bg-green-500/40 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
              </div>
            </div>
          </div>
          
          {/* Left Rectangle */}
          <div 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 flex items-center justify-center"
            style={{
              width: '66.67%',
              height: '33.33%',
              borderRadius: '40px 20px 20px 40px'
            }}
          >
            {/* Glowing Orb */}
            <div className="absolute left-8 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
              <div className="w-6 h-6 bg-green-500/40 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
              </div>
            </div>
          </div>
          
          {/* Right Rectangle */}
          <div 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 flex items-center justify-center"
            style={{
              width: '66.67%',
              height: '33.33%',
              borderRadius: '20px 40px 40px 20px'
            }}
          >
            {/* Glowing Orb */}
            <div className="absolute right-8 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
              <div className="w-6 h-6 bg-green-500/40 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
              </div>
            </div>
          </div>
          
          {/* Bottom Rectangle */}
          <div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-900 flex items-center justify-center"
            style={{
              width: '33.33%',
              height: '66.67%',
              borderRadius: '20px 20px 40px 40px'
            }}
          >
            {/* Glowing Orb */}
            <div className="absolute bottom-8 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
              <div className="w-6 h-6 bg-green-500/40 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
              </div>
            </div>
          </div>
          
          {/* Center Circle for Logo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 z-10">
            <div className="text-white text-4xl font-bold">H</div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default SmoothPlusLayout;