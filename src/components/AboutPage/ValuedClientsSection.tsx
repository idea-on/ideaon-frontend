import React from 'react';

const ValuedClientsSection: React.FC = () => {
  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary text-black text-sm font-medium px-4 py-2 rounded-full mb-6">
            Join Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our Valued Clients
          </h2>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 items-center justify-items-center">
          {/* Client Logo 1 - Geometric squares */}
          <div className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
            <div className="mb-4">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="20" height="20" fill="currentColor" opacity="0.8"/>
                <rect x="32" y="8" width="20" height="20" fill="currentColor" opacity="0.6"/>
                <rect x="8" y="32" width="20" height="20" fill="currentColor" opacity="0.6"/>
                <rect x="32" y="32" width="20" height="20" fill="currentColor" opacity="0.4"/>
              </svg>
            </div>
            <p className="text-xs font-medium tracking-wider uppercase">Company</p>
          </div>

          {/* Client Logo 2 - Lightning bolt */}
          <div className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
            <div className="mb-4">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 8L18 28H26L20 52L42 24H28L32 8Z" fill="currentColor"/>
              </svg>
            </div>
            <p className="text-xs font-medium tracking-wider uppercase">Company</p>
          </div>

          {/* Client Logo 3 - Stacked bars */}
          <div className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
            <div className="mb-4">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="40" width="30" height="8" fill="currentColor"/>
                <rect x="20" y="30" width="20" height="8" fill="currentColor" opacity="0.8"/>
                <rect x="25" y="20" width="10" height="8" fill="currentColor" opacity="0.6"/>
                <rect x="15" y="12" width="30" height="6" fill="currentColor" opacity="0.4"/>
              </svg>
            </div>
            <p className="text-xs font-medium tracking-wider uppercase">Company</p>
          </div>

          {/* Client Logo 4 - Circular design */}
          <div className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
            <div className="mb-4">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="22" stroke="currentColor" strokeWidth="3" fill="none"/>
                <circle cx="30" cy="30" r="15" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7"/>
                <circle cx="30" cy="30" r="8" fill="currentColor" opacity="0.5"/>
                <path d="M22 22L38 38M38 22L22 38" stroke="currentColor" strokeWidth="2" opacity="0.8"/>
              </svg>
            </div>
            <p className="text-xs font-medium tracking-wider uppercase">Company</p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default ValuedClientsSection;