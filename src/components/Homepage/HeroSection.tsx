import React from 'react';
import VideoElement from './VideoElement';
import {
  Rocket,
  PlayCircle,
  Lock,
  Banknote,
  CheckCircle,
  ArrowRight
} from 'lucide-react';


const HeroSection = () => {
  return (
    <div className="h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Grid pattern background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />
      
      {/* Floating diamond decorations */}
      <div className="absolute top-32 left-20 w-3 h-3 bg-gray-500 rotate-45 opacity-40"></div>
      <div className="absolute top-60 right-32 w-4 h-4 bg-gray-400 rotate-45 opacity-50"></div>
      <div className="absolute bottom-60 left-16 w-3 h-3 bg-gray-500 rotate-45 opacity-40"></div>
      <div className="absolute top-80 right-20 w-4 h-4 bg-gray-400 rotate-45 opacity-50"></div>
      <div className="absolute bottom-40 right-40 w-3 h-3 bg-gray-500 rotate-45 opacity-40"></div>
      <div className="absolute top-40 left-1/3 w-3 h-3 bg-gray-400 rotate-45 opacity-30"></div>
      <div className="absolute bottom-80 left-1/2 w-4 h-4 bg-gray-500 rotate-45 opacity-40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-6">
        {/* Vision Badge */}
        <div className="mb-8">
          <div className="bg-secondary bg-opacity-40 backdrop-blur-sm rounded-full px-6 py-2 flex items-center border border-gray-600">
          
            <span className="text-white text-sm font-medium">Secure Startup Ecosystem Platform</span>
          </div>
        </div>

        {/* Main Headline with Embedded Videos */}
        <div className="text-center mb-12 max-w-6xl">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
              <span>The trusted marketplace</span>
              <VideoElement 
                className="w-24 h-12 md:w-28 md:h-14 lg:w-32 lg:h-16"
                // bgColor="bg-orange-600"
                videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              >

              </VideoElement>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
              <span>where ideas</span>
              <VideoElement 
                className="w-24 h-12 md:w-28 md:h-14 lg:w-32 lg:h-16"
              
                videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              >
             
              </VideoElement>
              <span>meet capital</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6">
              <span>for startup success.</span>
              <VideoElement 
                className="w-24 h-12 md:w-28 md:h-14 lg:w-32 lg:h-16"
            
                videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              >

              </VideoElement>
            </div>
          </div>
          
          {/* Description */}
          <div className="text-lg md:text-xl text-gray-300 mt-8 max-w-4xl mx-auto">
            Connect with investors, auditors, and consultants in a secure, NDA-protected environment designed for startup success.
          </div>
        </div>

     <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
        <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-secondary transition-all duration-300 flex items-center shadow-lg">
          <Rocket className="w-5 h-5 mr-2" />
          Start Your Journey
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
        <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center">
          <PlayCircle className="w-5 h-5 mr-2" />
          Watch Demo
        </button>
      </div>

      {/* Trust Indicators */}
      <div className="flex flex-wrap justify-center gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="text-white font-semibold flex items-center gap-2">
            <Lock className="w-5 h-5" />
            100% NDA Protected
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-white font-semibold flex items-center gap-2">
            <Banknote className="w-5 h-5" />
            Escrow Secured
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-white font-semibold flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Verified Auditors
          </div>
        </div>
      </div>
      </div>

  
   
    </div>
  );
};

export default HeroSection;