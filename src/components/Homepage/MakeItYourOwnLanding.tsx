"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Square, Target, Trophy } from 'lucide-react';

const MakeItYourOwnLanding = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Auto-move to next step every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => prev === 3 ? 1 : prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Sign Up",
      description: "Join thousands to access all features and start your journey.",
      icon: <ArrowRight className="w-6 h-6" />,
      buttonText: "Learn more"
    },
    {
      id: 2,
      title: "Choose Your Service",
      description: "Select and select the perfect solution tailored to your needs.",
      icon: <Square className="w-6 h-6" />,
      buttonText: "Learn more"
    },
    {
      id: 3,
      title: "Achieve Results",
      description: "Complete the process and reach your goals effortlessly.",
      icon: <Target className="w-6 h-6" />,
      buttonText: "Learn more"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="px-8 pt-12 pb-8">
        <div className="text-sm mb-4 text-secondary" >
          How It Works
        </div>
        <div className="flex justify-between items-start">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Make It Your Own
          </h1>
          <div className="text-sm max-w-xs" style={{ color: '#666666' }}>
            Begin your journey with a seamless<br />
            onboarding process.
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 pb-16">
        <div className="flex gap-8 max-w-6xl">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              {/* Step Card */}
              <div 
                className="relative rounded-2xl p-8 w-80 h-72 transition-all duration-500 "
                style={{ 
                  backgroundColor: activeStep >= step.id ? '#111111' : '#0B0B0B',
              
                }}
              >
                {/* Icon and Number */}
                <div className="flex items-start justify-between mb-6">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500"
                    style={{ 
                      backgroundColor: activeStep >= step.id ? '#4EA62F' : '#333333',
                      color: activeStep >= step.id ? '#000000' : '#666666'
                    }}
                  >
                    {step.icon}
                  </div>
                  <div 
                    className="text-8xl font-bold transition-all duration-500"
                    style={{ 
                      color: activeStep >= step.id ? '#ffffff' : '#333333'
                    }}
                  >
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 
                    className="text-xl font-semibold transition-all duration-500"
                    style={{ 
                      color: activeStep >= step.id ? '#ffffff' : '#666666'
                    }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed transition-all duration-500"
                    style={{ 
                      color: activeStep >= step.id ? '#999999' : '#555555'
                    }}
                  >
                    {step.description}
                  </p>
                  
                  {/* Learn More Button */}
                  <button 
                    className="inline-flex items-center space-x-2 text-sm font-medium transition-all duration-500 group"
                    style={{ 
                      color: activeStep >= step.id ? '#4EA62F' : '#555555'
                    }}
                  >
                    <span>{step.buttonText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Animated Connector */}
              {index < steps.length - 1 && (
                <div className="relative mx-4">
                  {/* Base connector line */}
                  <div 
                    className="w-16 h-0.5 transition-all duration-500"
                    style={{ backgroundColor: '#333333' }}
                  />
                  
                  {/* Animated progress line */}
                  <div 
                    className="absolute top-0 left-0 h-0.5 transition-all duration-1000 ease-in-out"
                    style={{ 
                      backgroundColor: '#4EA62F',
                      width: activeStep > step.id ? '100%' : '0%'
                    }}
                  />
                  
                  {/* Moving dot */}
                  <div 
                    className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-1000 ease-in-out"
                    style={{ 
                      backgroundColor: activeStep > step.id ? '#4EA62F' : '#333333',
                      left: activeStep > step.id ? 'calc(100% - 4px)' : '0px'
                    }}
                  />
                  
                  {/* Animated pulse effect */}
                  {activeStep === step.id + 1 && (
                    <div 
                      className="absolute top-1/2 right-0 transform -translate-y-1/2 w-3 h-3 rounded-full animate-ping"
                      style={{ backgroundColor: '#4EA62F', opacity: 0.4 }}
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Clean black background - no pattern */}
    </div>
  );
};

export default MakeItYourOwnLanding;