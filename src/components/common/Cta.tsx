import React from 'react';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';
import { images } from '../../../public/assets/assets';

const ChainexCTA = () => {
  return (
    <div className="relative overflow-hidden flex items-center justify-center">
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto sm:py-8">
        
        <div className="relative bg-[#111111] backdrop-blur-lg rounded-3xl p-8 lg:p-16">
          <div className="absolute inset-0">
            {/* Grid Pattern */}
            <div 
              className="w-full h-full opacity-15"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(78, 166, 47, 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(78, 166, 47, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
              }}
            />
            
            {/* Reduced Subtle Orb Glows */}
            <div className="absolute top-32 left-24 w-16 h-16 md:w-24 md:h-24 bg-[#4EA62F] rounded-full opacity-3 md:opacity-5 blur-2xl animate-pulse" />
            <div className="absolute bottom-40 right-28 w-20 h-20 md:w-28 md:h-28 bg-[#4EA62F] rounded-full opacity-4 md:opacity-6 blur-2xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/3 w-12 h-12 md:w-20 md:h-20 bg-[#4EA62F] rounded-full opacity-2 md:opacity-4 blur-xl animate-pulse delay-1500" />
          </div>

          {/* Trust Indicators - Repositioned to top center in a row */}
          {/* <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-6">
            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 border border-[#4EA62F]/15 rounded-xl p-3 backdrop-blur-sm shadow-lg">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-[#4EA62F]" />
                <div>
                  <div className="text-white text-sm font-medium">Bank-Grade</div>
                  <div className="text-gray-400 text-xs">Security</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 border border-[#4EA62F]/15 rounded-xl p-3 backdrop-blur-sm shadow-lg">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#4EA62F]" />
                <div>
                  <div className="text-white text-sm font-medium">24/7</div>
                  <div className="text-gray-400 text-xs">Trading</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 border border-[#4EA62F]/15 rounded-xl p-3 backdrop-blur-sm shadow-lg">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-[#4EA62F]" />
                <div>
                  <div className="text-white text-sm font-medium">Advanced</div>
                  <div className="text-gray-400 text-xs">Analytics</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 border border-[#4EA62F]/15 rounded-xl p-3 backdrop-blur-sm shadow-lg">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-[#4EA62F]" />
                <div>
                  <div className="text-white text-sm font-medium">1M+</div>
                  <div className="text-gray-400 text-xs">Traders</div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Title with increased top margin to accommodate trust indicators */}
          <div className="relative mt-8 md:mt-12">
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
              <div className="relative opacity-60">
                <img 
                  src={images.png.leftLines.src} 
                  alt="Left decorative lines"
                  className="w-96 h-40 object-cover hover:opacity-90 transition-opacity duration-500"
                  style={{ filter: 'hue-rotate(45deg) brightness(1.2)' }}
                />
              </div>
            </div>

            {/* Right Lines Image - Properly Sized and Positioned */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-64 hidden lg:block">
              <div className="relative opacity-60">
                <img 
                  src={images.png.rightLines.src} 
                  alt="Right decorative lines"
                  className="w-96 h-48 object-cover hover:opacity-90 transition-opacity duration-500"
                  style={{ filter: 'hue-rotate(45deg) brightness(1.2)' }}
                />
              </div>
            </div>

            {/* Enhanced Get Started Button with refined styling */}
            <button className="relative px-12 py-5 bg-gradient-to-r from-[#4EA62F] to-[#5CB73A] text-white font-semibold rounded-full text-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(78,166,47,0.3)] focus:outline-none focus:ring-4 focus:ring-[#4EA62F]/30 group overflow-hidden mt-4">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              
              {/* Refined button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#5CB73A] to-[#4EA62F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Subtle animated border */}
              <div className="absolute inset-0 rounded-full border border-[#4EA62F]/20 group-hover:border-[#4EA62F]/40 transition-colors duration-300" />
            </button>
          </div>

          {/* Mobile Trust Indicators - Refined styling */}
          <div className="flex flex-wrap justify-center gap-3 mt-12 md:hidden">
            <div className="flex items-center space-x-2 bg-gray-900/60 px-3 py-2 rounded-lg border border-[#4EA62F]/15 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-[#4EA62F]" />
              <span className="text-white text-sm font-medium">Secure</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-900/60 px-3 py-2 rounded-lg border border-[#4EA62F]/15 backdrop-blur-sm">
              <Clock className="w-4 h-4 text-[#4EA62F]" />
              <span className="text-white text-sm font-medium">24/7</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-900/60 px-3 py-2 rounded-lg border border-[#4EA62F]/15 backdrop-blur-sm">
              <Users className="w-4 h-4 text-[#4EA62F]" />
              <span className="text-white text-sm font-medium">1M+ Users</span>
            </div>
          </div>
        </div>
      </div>

      {/* Much more subtle floating orb glows */}
      <div className="absolute top-16 left-1/2 w-8 h-8 md:w-16 md:h-16 bg-[#4EA62F] rounded-full opacity-2 md:opacity-4 blur-2xl animate-pulse delay-300" />
      <div className="absolute bottom-16 left-1/2 w-10 h-10 md:w-18 md:h-18 bg-[#4EA62F] rounded-full opacity-3 md:opacity-5 blur-2xl animate-pulse delay-1200" />
    </div>
  );
};

export default ChainexCTA;