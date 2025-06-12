import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';

interface Service {
  number: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    number: '001',
    title: 'AI Model Development',
    description: 'Build customized AI models tailored to your specific business needs, driving innovation and efficiency.'
  },
  {
    number: '002',
    title: 'Predictive Analytics',
    description: 'Leverage data to forecast trends, make informed decisions, and stay ahead of the competition.'
  },
  {
    number: '003',
    title: 'Natural Language Processing',
    description: 'Enable machines to understand, interpret, and respond to human language with precision.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          {/* Our Services Label */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Plus className="w-4 h-4 text-[#6B7280]" />
            <span className="text-[#6B7280] text-sm font-medium tracking-wide uppercase">
              Our Services
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl  font-bold leading-tight">
            <span className="text-white">We Offer the Best </span>
            <span className="bg-gradient-to-r from-[#6B7280] to-[#9CA3AF] bg-clip-text text-transparent">
              AI Solutions
            </span>
            <br />
            <span className="text-white">to Our Clients</span>
          </h1>
        </div>

        {/* Services List */}
        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {services.map((service) => (
            <div 
              key={service.number}
              className="group cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-6 sm:py-8 md:py-10 border-b border-[#2A2A2A] hover:border-[#3F3F3F] transition-all duration-300">
                {/* Left Side - Number and Title */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 md:gap-12 mb-4 sm:mb-0">
                  {/* Service Number */}
                  <div className="text-[#6B7280] text-sm font-medium tracking-wider">
                    {service.number}
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white group-hover:text-[#E5E7EB] transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Right Side - Description and Arrow */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 md:gap-12 sm:max-w-md lg:max-w-lg">
                  {/* Service Description */}
                  <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed flex-1">
                    {service.description}
                  </p>
                  
                  {/* Arrow Icon */}
                  <div className="flex-shrink-0 self-start sm:self-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-[#3F3F3F] flex items-center justify-center group-hover:border-[#6B7280] group-hover:bg-[#1A1A1A] transition-all duration-300">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#6B7280] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;