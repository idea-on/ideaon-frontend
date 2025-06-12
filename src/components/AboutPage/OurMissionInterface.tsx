import React from 'react';
import { TrendingUp, Shield, BarChart3, ArrowUpDown } from 'lucide-react';

const OurMissionInterface = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 overflow-hidden">
      <div className="relative w-full max-w-5xl">
        {/* Central Hub with H logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-secondary flex items-center justify-center shadow-2xl border border-secondary/40">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/30 flex items-center justify-center backdrop-blur-sm border border-white/10">
                <span className="text-white text-3xl md:text-4xl font-bold tracking-wider">H</span>
              </div>
            </div>
            {/* Animated glow rings */}
            <div className="absolute inset-0 rounded-full border-2 border-secondary/60 animate-pulse"></div>
            <div className="absolute inset-[-4px] rounded-full border border-secondary/30 animate-ping"></div>
            <div className="absolute inset-[-12px] rounded-full border border-secondary/10 animate-pulse delay-700"></div>
          </div>
        </div>

        {/* Feature Cards Grid - Fixed Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Innovation - Top Left */}
          <div className="group relative h-64 md:h-72">
            <div className="relative h-full bg-[#111111] rounded-3xl p-8   hover:border-secondary transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/30 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 shadow-lg shadow-secondary/40 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Innovation</h3>
              </div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                To pioneer cutting-edge solutions that transform how people interact with technology.
              </p>
              {/* Connecting line to center */}
              <div className="absolute top-1/2 right-0 w-12 md:w-20 h-0.5 bg-gradient-to-r from-secondary to-transparent transform translate-x-full -translate-y-1/2 hidden md:block opacity-60"></div>
            </div>
          </div>

          {/* Trust & Security - Top Right */}
          <div className="group relative h-64 md:h-72 md:ml-auto">
            <div className="relative h-full bg-[#111111] rounded-3xl p-8   hover:border-secondary transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/30 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 shadow-lg shadow-secondary/40 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Trust & Security</h3>
              </div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                To build unwavering trust through transparent practices and secure solutions.
              </p>
              {/* Connecting line to center */}
              <div className="absolute top-1/2 left-0 w-12 md:w-20 h-0.5 bg-gradient-to-l from-secondary to-transparent transform -translate-x-full -translate-y-1/2 hidden md:block opacity-60"></div>
            </div>
          </div>

          {/* Growth & Impact - Bottom Left */}
          <div className="group relative h-64 md:h-72">
            <div className="relative h-full bg-[#111111] rounded-3xl p-8   hover:border-secondary transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/30 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 shadow-lg shadow-secondary/40 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Growth & Impact</h3>
              </div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                To drive meaningful growth and create positive impact in communities worldwide.
              </p>
              {/* Connecting line to center */}
              <div className="absolute top-1/2 right-0 w-12 md:w-20 h-0.5 bg-gradient-to-r from-secondary to-transparent transform translate-x-full -translate-y-1/2 hidden md:block opacity-60"></div>
            </div>
          </div>

          {/* Excellence & Quality - Bottom Right */}
          <div className="group relative h-64 md:h-72 md:ml-auto">
            <div className="relative h-full bg-[#111111] rounded-3xl p-8   hover:border-secondary transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/30 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 shadow-lg shadow-secondary/40 group-hover:scale-110 transition-transform duration-300">
                  <ArrowUpDown className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Excellence & Quality</h3>
              </div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                To deliver exceptional quality in every solution and exceed expectations consistently.
              </p>
              {/* Connecting line to center */}
              <div className="absolute top-1/2 left-0 w-12 md:w-20 h-0.5 bg-gradient-to-l from-secondary to-transparent transform -translate-x-full -translate-y-1/2 hidden md:block opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Connecting lines with enhanced styling */}
        <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-secondary/40 to-transparent transform -translate-x-1/2 hidden md:block"></div>
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-secondary/40 to-transparent transform -translate-y-1/2 hidden md:block"></div>

        {/* Enhanced ambient glow effects */}
        <div className="absolute top-1/6 left-1/6 w-96 h-96 bg-secondary/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/6 right-1/6 w-96 h-96 bg-secondary/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-secondary/4 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 right-2/3 w-64 h-64 bg-secondary/4 rounded-full blur-3xl animate-pulse delay-3000"></div>
        
  
      </div>
    </div>
  );
};

export default OurMissionInterface;