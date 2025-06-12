"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight} from 'lucide-react';

const DataHandlingFeatures = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      id: 1,
      title: "NDA Assurance",
      description: "Complete confidentiality and non-disclosure protection",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=face",
      alt: "Professional signing NDA document"
    },
    {
      id: 2,
      title: "Encryption Policies", 
      description: "Advanced encryption and access control measures",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&crop=face",
      alt: "Security expert working on encryption"
    },
    {
      id: 3,
      title: "GDPR Compliance",
      description: "Full compliance with data protection regulations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=face",
      alt: "Legal compliance professional"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentSlide + i) % features.length;
      cards.push(features[index]);
    }
    return cards;
  };

  return (
    <div className="min-h-screen text-white overflow-hidden py-20">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row lg:h-screen">
        
        {/* Left Side - Content with padding */}
        <div className="lg:w-1/2 px-6 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-0 lg:flex lg:items-center">
          <div className="max-w-lg space-y-8">
            <div>
              <div className="text-green-400 text-sm font-medium mb-4 tracking-wider uppercase">
                Imagine More
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Our features
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                Unlock exclusive tools designed to give you unparalleled 
                advantages and superior performance
              </p>
            </div>

            {/* Navigation Arrows - Desktop */}
            <div className="hidden lg:flex gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200 border border-gray-700"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200 border border-gray-700"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Cards Carousel (Full width to edge) */}
        <div className="lg:w-1/2 lg:h-screen relative bg-[#201f1f] px-6 md:px-8 lg:pl-8 lg:pr-0 py-16 lg:py-0 lg:flex lg:items-center rounded-tl-2xl rounded-tb-2xl">
          <div className="w-full max-w-none">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {getVisibleCards().map((feature, index) => (
                <div
                  key={`${feature.id}-${currentSlide}`}
                  className={`${index === 0 ? 'bg-white' : 'bg-[#2e2e2e] border border-gray-700'} rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 w-full h-[400px] lg:h-[450px] flex flex-col`}
                  style={{
                    opacity: index === 0 ? 1 : 0.8,
                    transform: index === 0 ? 'scale(1)' : 'scale(0.95)'
                  }}
                >
                  {/* Card Image - Fixed height */}
                  <div className="h-48 lg:h-56 overflow-hidden flex-shrink-0">
                    <img
                      src={feature.image}
                      alt={feature.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Card Content - Flexible height */}
                  <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className={`text-xl lg:text-2xl font-bold mb-3 ${index === 0 ? 'text-gray-900' : 'text-white'}`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm lg:text-base mb-4 leading-relaxed ${index === 0 ? 'text-gray-600' : 'text-gray-300'}`}>
                        {feature.description}
                      </p>
                    </div>
                    <div className={`flex items-center gap-2 font-medium text-sm lg:text-base ${index === 0 ? 'text-gray-800' : 'text-gray-200'}`}>
                      <span>Case study</span>
                      <ChevronRight className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 lg:mt-12 gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-white' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Below content on small screens */}
      <div className="lg:hidden px-6 pb-8">
        <div className="flex justify-center gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200 border border-gray-700"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200 border border-gray-700"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataHandlingFeatures;