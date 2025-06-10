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
    <header className="min-h-screen bg-background relative overflow-hidden flex flex-col">
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
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 sm:px-6 py-6 ">
        {/* Vision Badge */}
        <div className="mb-8">
          <div className="bg-secondary bg-opacity-40 backdrop-blur-sm rounded-full px-6 py-2 flex items-center border border-gray-600">
            <span className="text-white text-sm font-medium">Secure Startup Ecosystem Platform</span>
          </div>
        </div>

        {/* Main Headline with Embedded Videos - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-12 max-w-6xl">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {/* Mobile: Completely different layout */}
            <div className="block sm:hidden">
              {/* Mobile - Simple clean headline */}
            <div className="space-y-6 max-w-[90%] mx-auto">
                <h1 className="text-2xl font-bold leading-tight px-2">
                  The trusted marketplace where ideas meet capital for startup success.
                </h1>

                {/* Mobile video showcase - horizontally centered */}
                <div className="mt-6">
                  <div className="flex gap-3 pb-4 px-2 mx-auto justify-center">
                    <VideoElement
                      className="w-24 h-20 flex-shrink-0 rounded-lg shadow-lg"
                      videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    />
                    <VideoElement
                      className="w-24 h-20 flex-shrink-0 rounded-lg shadow-lg"
                      videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                    />
                    <VideoElement
                      className="w-24 h-20 flex-shrink-0 rounded-lg shadow-lg"
                      videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                    />
                  </div>
                  <div className="text-xs text-gray-400 mt-2 px-2 text-center">← Swipe to explore</div>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Original inline style */}
            <div className="hidden sm:block">
              <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
                <span>The trusted marketplace</span>
                <VideoElement
                  className="w-24 h-12 md:w-28 md:h-14 lg:w-32 lg:h-16"
                  videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
                <span>where ideas</span>
                <VideoElement
                  className="w-24 h-12 md:w-28 md:h-14 lg:w-32 lg:h-16"
                  videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                />
                <span>meet capital</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6">
                <span>for startup success.</span>
                <VideoElement
                  className="w-24 h-12 md:w-28 md:h-14 lg:w-32 lg:h-16"
                  videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-base sm:text-lg md:text-xl text-gray-300 mt-6 sm:mt-8 max-w-4xl mx-auto px-2">
            Connect with investors, auditors, and consultants in a secure, NDA-protected environment designed for startup success.
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4 w-full max-w-md sm:max-w-none">
          <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-secondary transition-all duration-300 flex items-center shadow-lg w-full sm:w-auto justify-center text-sm sm:text-base">
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Start Your Journey
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center w-full sm:w-auto justify-center text-sm sm:text-base">
            <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Watch Demo
          </button>
        </div>

        {/* Trust Indicators - Fixed positioning and spacing */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 text-center px-4 ">
          <div className="flex flex-col items-center">
            <div className="text-white font-semibold flex items-center gap-2 text-sm sm:text-base">
              <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
              100% NDA Protected
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-white font-semibold flex items-center gap-2 text-sm sm:text-base">
              <Banknote className="w-4 h-4 sm:w-5 sm:h-5" />
              Escrow Secured
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-white font-semibold flex items-center gap-2 text-sm sm:text-base">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Verified Auditors
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;