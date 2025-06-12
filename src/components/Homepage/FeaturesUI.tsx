'use client';

import React, { useState, useEffect } from 'react';
import {
  Megaphone,
  BarChart4,
  PackageSearch,
  Type,
  Brush
} from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: <Megaphone className="w-5 h-5" />,
    title: 'Digital marketing',
    description: 'Drive impact and growth with our strategic digital marketing solutions',
    image: 'data:image/svg+xml;base64,' + btoa(`
      <svg width="400" height="280" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4F46E5;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#7C3AED;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="280" fill="url(#grad1)" rx="16"/>
        <circle cx="100" cy="80" r="30" fill="rgba(255,255,255,0.2)"/>
        <circle cx="300" cy="60" r="20" fill="rgba(255,255,255,0.1)"/>
        <rect x="60" y="140" width="280" height="8" fill="rgba(255,255,255,0.3)" rx="4"/>
        <rect x="60" y="160" width="200" height="6" fill="rgba(255,255,255,0.2)" rx="3"/>
        <rect x="60" y="180" width="240" height="6" fill="rgba(255,255,255,0.2)" rx="3"/>
        <text x="200" y="220" font-size="14" fill="rgba(255,255,255,0.8)" font-family="sans-serif" text-anchor="middle">Digital Marketing</text>
      </svg>
    `)
  },
  {
    id: 2,
    icon: <BarChart4 className="w-5 h-5" />,
    title: 'Sales Operation',
    description: 'Maximize revenue and drive growth with our comprehensive sales solutions',
    image: 'data:image/svg+xml;base64,' + btoa(`
      <svg width="400" height="280" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#059669;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#0D9488;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="280" fill="url(#grad2)" rx="16"/>
        <rect x="80" y="180" width="20" height="60" fill="rgba(255,255,255,0.3)" rx="2"/>
        <rect x="120" y="150" width="20" height="90" fill="rgba(255,255,255,0.4)" rx="2"/>
        <rect x="160" y="120" width="20" height="120" fill="rgba(255,255,255,0.5)" rx="2"/>
        <rect x="200" y="100" width="20" height="140" fill="rgba(255,255,255,0.6)" rx="2"/>
        <rect x="240" y="80" width="20" height="160" fill="rgba(255,255,255,0.7)" rx="2"/>
        <text x="200" y="220" font-size="14" fill="rgba(255,255,255,0.8)" font-family="sans-serif" text-anchor="middle">Sales Operation</text>
      </svg>
    `)
  },
  {
    id: 3,
    icon: <PackageSearch className="w-5 h-5" />,
    title: '3d animations',
    description: 'Captivate audiences with our immersive 3D animation services',
    image: 'data:image/svg+xml;base64,' + btoa(`
      <svg width="400" height="280" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#DC2626;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#EA580C;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="280" fill="url(#grad3)" rx="16"/>
        <polygon points="200,60 160,120 240,120" fill="rgba(255,255,255,0.3)"/>
        <polygon points="200,120 240,120 220,160" fill="rgba(255,255,255,0.4)"/>
        <polygon points="160,120 200,120 180,160" fill="rgba(255,255,255,0.2)"/>
        <circle cx="320" cy="80" r="25" fill="rgba(255,255,255,0.2)"/>
        <text x="200" y="220" font-size="14" fill="rgba(255,255,255,0.8)" font-family="sans-serif" text-anchor="middle">3D Animations</text>
      </svg>
    `)
  },
  {
    id: 4,
    icon: <Type className="w-5 h-5" />,
    title: 'Brand Strategy',
    description: 'Build powerful brand presence with our comprehensive strategy solutions',
    image: 'data:image/svg+xml;base64,' + btoa(`
      <svg width="400" height="280" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#7C2D12;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#A16207;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="280" fill="url(#grad4)" rx="16"/>
        <rect x="80" y="80" width="240" height="12" fill="rgba(255,255,255,0.4)" rx="6"/>
        <rect x="80" y="110" width="180" height="8" fill="rgba(255,255,255,0.3)" rx="4"/>
        <rect x="80" y="135" width="200" height="8" fill="rgba(255,255,255,0.3)" rx="4"/>
        <rect x="80" y="160" width="160" height="8" fill="rgba(255,255,255,0.3)" rx="4"/>
        <circle cx="320" cy="200" r="15" fill="rgba(255,255,255,0.3)"/>
        <text x="200" y="220" font-size="14" fill="rgba(255,255,255,0.8)" font-family="sans-serif" text-anchor="middle">Brand Strategy</text>
      </svg>
    `)
  },
  {
    id: 5,
    icon: <Brush className="w-5 h-5" />,
    title: 'Creative Design',
    description: 'Transform ideas into stunning visual experiences that engage and inspire',
    image: 'data:image/svg+xml;base64,' + btoa(`
      <svg width="400" height="280" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#BE185D;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#9333EA;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="280" fill="url(#grad5)" rx="16"/>
        <circle cx="150" cy="100" r="35" fill="rgba(255,255,255,0.2)"/>
        <circle cx="250" cy="130" r="25" fill="rgba(255,255,255,0.3)"/>
        <circle cx="300" cy="90" r="20" fill="rgba(255,255,255,0.25)"/>
        <path d="M100 180 Q200 160 300 180" stroke="rgba(255,255,255,0.4)" stroke-width="3" fill="none"/>
        <text x="200" y="220" font-size="14" fill="rgba(255,255,255,0.8)" font-family="sans-serif" text-anchor="middle">Creative Design</text>
      </svg>
    `)
  }
];

const FeaturesUI: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % features.length;
      cards.push({ ...features[index], displayIndex: i });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Side - Header and Image */}
          <div className="lg:order-1">
            {/* Header Section */}
            <div className="mb-8 md:mb-12 text-center lg:text-left">
              <p className="text-[#6B7280] text-sm font-medium mb-4 tracking-wide uppercase">Stay Updated</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Special features
              </h1>
              <p className="text-[#9CA3AF] text-base sm:text-lg max-w-md mx-auto lg:mx-0">
                Standout elements for superior experience.
              </p>
            </div>
            
            <div className="relative w-full h-[280px] sm:h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={visibleCards[0].image}
                alt={visibleCards[0].title}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="lg:order-2 lg:pt-[60px] space-y-3 md:space-y-4">
            {visibleCards.map((feature, index) => (
              <div
                key={`${feature.id}-${activeIndex}`}
                className="transition-all duration-700 ease-in-out"
              >
                <div
                  className={`p-4 sm:p-5 md:p-6 rounded-2xl border transition-all duration-700 ease-in-out ${
                    index === 0
                      ? 'bg-[#2A2A2A] border-[#3F3F3F]'
                      : 'bg-[#1A1A1A] border-[#2A2A2A]'
                  }`}
                >
                  <div className="flex items-start gap-4 md:gap-5">
                    {/* Circular Icon */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <div className="text-black">
                        {feature.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 md:mb-3 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed mb-3 md:mb-4">
                        {feature.description}
                      </p>
                      
                      {/* Learn More Link */}
                      <div className="flex items-center gap-2">
                        <span className="text-secondary text-sm sm:text-base font-medium">
                          Learn more
                        </span>
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-secondary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Get Started Button */}
        <div className="mt-12 md:mt-16 text-center">
          <button className="bg-secondary hover:to-[#047857] text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesUI;