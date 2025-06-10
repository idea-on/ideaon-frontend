import React from 'react';
import { Star, TrendingUp, Shield, ArrowRight,} from 'lucide-react';
import { images } from '../../../public/assets/assets';

const ChainexCTA = () => {



  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center ">
  
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Glowing Content Box Border */}
      
        
        <div className="relative bg-[#111111] backdrop-blur-lg rounded-3xl p-8 lg:p-16  ">
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div 
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(78, 166, 47, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(78, 166, 47, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Enhanced Orb Glows */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-[#4EA62F] rounded-full opacity-10 blur-3xl animate-pulse" />
        <div className="absolute top-40 right-32 w-32 h-32 bg-[#4EA62F] rounded-full opacity-15 blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-32 w-36 h-36 bg-[#4EA62F] rounded-full opacity-12 blur-3xl animate-pulse delay-500" />
        <div className="absolute bottom-20 right-20 w-44 h-44 bg-[#4EA62F] rounded-full opacity-8 blur-3xl animate-pulse delay-1500" />
        <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-[#4EA62F] rounded-full opacity-10 blur-2xl animate-pulse delay-2000" />
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-[#4EA62F] rounded-full opacity-12 blur-3xl animate-pulse delay-700" />
      </div>
     

          {/* Title with animated sparkles */}
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Join Chainex now
            </h1>
          
           
          </div>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed">
            Begin your Trading Journey now and experience the power of Chainex
          </p>

          {/* Get Started Button Container */}
          <div className="relative inline-block">
            {/* Left Lines Image - Properly Sized and Positioned */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-64 hidden lg:block">
              <div className="relative">
                <img 
                  src={images.png.leftLines.src} 
                  alt="Left decorative lines"
                  className="w-96 h-40 object-cover  hover:opacity-90 transition-opacity duration-500"
                  style={{ filter: 'hue-rotate(45deg) brightness(1.5)' }}
                />
               
              </div>
            </div>

            {/* Right Lines Image - Properly Sized and Positioned */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-64 hidden lg:block">
              <div className="relative">
                <img 
                  src={images.png.rightLines.src} 
                  alt="Right decorative lines"
                  className="w-96 h-48 object-cover  hover:opacity-90 transition-opacity duration-500"
                  style={{ filter: 'hue-rotate(45deg) brightness(1.5)' }}
                />
              
              </div>
            </div>

            {/* Enhanced Get Started Button */}
            <button className="relative px-12 py-5 bg-gradient-to-r from-[#4EA62F] to-[#5CB73A] text-white font-bold rounded-full text-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(78,166,47,0.6)] focus:outline-none focus:ring-4 focus:ring-[#4EA62F]/50 group overflow-hidden mt-4">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              
              {/* Enhanced button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#5CB73A] to-[#4EA62F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-full border-2 border-[#4EA62F] animate-pulse opacity-50" />
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
            </button>
            
            
          </div>
        </div>
      </div>

      {/* Mobile Feature Indicators */}
      <div className="absolute inset-0 lg:hidden xl:hidden z-20 pointer-events-none">
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-2 border border-[#4EA62F]/30">
            <Shield className="w-6 h-6 text-[#4EA62F]" />
          </div>
          <div className="absolute inset-0 bg-[#4EA62F] rounded-lg opacity-15 blur-sm animate-pulse" />
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-2 border border-[#4EA62F]/30">
            <TrendingUp className="w-6 h-6 text-[#4EA62F]" />
          </div>
          <div className="absolute inset-0 bg-[#4EA62F] rounded-lg opacity-15 blur-sm animate-pulse delay-500" />
        </div>
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-2 border border-[#4EA62F]/30">
            <Star className="w-6 h-6 text-[#4EA62F]" />
          </div>
          <div className="absolute inset-0 bg-[#4EA62F] rounded-lg opacity-15 blur-sm animate-pulse delay-1000" />
        </div>
      </div>

      {/* Additional enhanced floating orb glows */}
      <div className="absolute top-10 left-1/2 w-24 h-24 bg-[#4EA62F] rounded-full opacity-8 blur-3xl animate-pulse delay-300" />
      <div className="absolute bottom-10 left-1/2 w-28 h-28 bg-[#4EA62F] rounded-full opacity-10 blur-3xl animate-pulse delay-1200" />
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#4EA62F] rounded-full animate-bounce opacity-60" />
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#4EA62F] rounded-full animate-bounce opacity-40 delay-700" />
      <div className="absolute top-1/2 right-1/2 w-1 h-1 bg-[#4EA62F] rounded-full animate-bounce opacity-80 delay-1400" />
    </div>
  );
};

export default ChainexCTA;