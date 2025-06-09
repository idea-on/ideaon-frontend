"use client";
import React from 'react';
import { Trophy, Zap, Building, Shield, Users } from 'lucide-react';
import VectorLine from './WhyChooseSections/VectorLine';
import CenterLogo from './WhyChooseSections/CenterLogo';

interface Feature {
    id: string;
    icon: React.ComponentType<{ className?: string; size?: number; }>;
    title: string;
    description: string;
    position: string;
}

interface FeatureCardProps {
    feature: Feature;
    isCenter?: boolean;
    hasGradient?: boolean;
}

const features: Feature[] = [
    {
        id: 'speed',
        icon: Trophy,
        title: 'Unmatched Speed',
        description: 'Chainex processes transactions instantly, ensuring seamless and uninterrupted blockchain experiences with zero delays',
        position: 'top'
    },
    {
        id: 'scalable',
        icon: Building,
        title: 'Scalable for Every Need',
        description: 'From startups to enterprises, Chainex adapts to growing demands, providing a flexible and future-ready blockchain solution',
        position: 'left'
    },
    {
        id: 'security',
        icon: Shield,
        title: 'Advanced Security',
        description: 'With top-tier encryption and decentralized architecture, Chainex guarantees the highest level of security and trust',
        position: 'right'
    },
    {
        id: 'efficient',
        icon: Users,
        title: 'User-Friendly and Efficient',
        description: 'Chainex combines cutting-edge technology with intuitive interface and smooth integration for hassle-free blockchain transactions',
        position: 'bottom'
    }
];


const FeatureCard = ({ feature }: FeatureCardProps) => {
    const Icon = feature.icon;

    return (
        <div className="relative group h-full">
            {/* Connecting lines */}
            <VectorLine 
        position="top-left" 
        size={100} 
        brightness={0.4}
        className="z-10"
      />
              <VectorLine 
        position="top-right" 
        size={140} 
        brightness={0.4}
        className="z-10"
      />

            {/* Card */}
            <div className="relative bg-transparent border border-[#FFFFFF1A] backdrop-blur-sm rounded-3xl p-6 h-full flex flex-col items-center justify-center text-center transition-all duration-500 hover:transform hover:shadow-2xl hover:shadow-[#4EA62F]/20">
                {/* Icon with exact circular design like image */}
                <div className="relative mb-6 z-10">
                    {/* Outer glow orb - mild green */}
                    <div className="absolute inset-0 w-24 h-24 rounded-full bg-[#4EA62F]/20 blur-xl -translate-x-2 -translate-y-2" />
                    
                    {/* Outer subtle ring */}
                    <div className="absolute inset-0 w-20 h-20 rounded-full border border-gray-700/50" />
                    
                    {/* Inner circle - dark with subtle brand color hint */}
                    <div className="w-20 h-20 rounded-full border border-gray-600/30 flex items-center justify-center bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black relative overflow-hidden">
                        {/* Very subtle brand color accent */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#4EA62F]/5 to-transparent rounded-full" />
                        
                        <Icon className="w-8 h-8 text-white relative z-10 drop-shadow-sm" />
                    </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2 relative z-10">
                    <Zap className="w-5 h-5 text-[#4EA62F]" />
                    {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed relative z-10">
                    {feature.description}
                </p>
            </div>
        </div>
    );
};

interface NonFeatureCardProps {
    positionNumber: number;
}

const NonFeatureCard = ({ positionNumber }: NonFeatureCardProps) => {
    // Determine glow position class based on position number
    const glowPosition = {
        1: "bottom-0 right-0",
        3: "bottom-0 left-0",
        7: "top-0 right-0",
        9: "top-0 left-0",
    }[positionNumber];

    return (
        <div className="h-full bg-[#101014] rounded-3xl relative overflow-hidden">
            {/* Grid lines */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-10">
                {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="border border-[#ffffff10]" />
                ))}
            </div>

            {/* Radial gradient glow with brand color */}
            <div
                className={`absolute ${glowPosition} w-40 h-40 opacity-10 rounded-full blur-2xl pointer-events-none`}
                style={{ backgroundColor: '#4EA62F' }}
            />
        </div>
    );
};


const WhyChoose = () => {
    return (
        <section className='bg-[#101014] w-full py-10'>
            <div className="min-h-screen w-[90%] sm:w-[80%] mx-auto relative overflow-hidden">
                {/* Header - moved to top */}
                <div className="relative z-10 container mx-auto px-4 pt-10 pb-10">
                    <div className="text-center">
                        <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#4EA62F]/20 to-[#4EA62F]/10 border border-[#4EA62F]/30 rounded-full text-[#4EA62F] text-sm font-medium mb-8">
                            Market
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-xl">
                            Why Choose Chainex
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                            Chainex delivers fast, secure, and reliable blockchain transactions with seamless scalability,
                            trust, efficiency, and cutting-edge technology
                        </p>
                    </div>
                </div>

                {/* Desktop 3x3 Grid */}
                <div className="hidden lg:grid relative z-10 grid-cols-3 grid-rows-3 gap-4 mb-10">
                    {Array.from({ length: 9 }, (_, i) => {
                        const position = i + 1;
                        const featurePositions = [2, 4, 6, 8];
                        const centerPosition = 5;

                        if (featurePositions.includes(position)) {
                            const featureIndex = featurePositions.indexOf(position);
                            return <FeatureCard key={i} feature={features[featureIndex]} />;
                        } else if (position === centerPosition) {
                            return <CenterLogo key={i} />;
                        } else {
                            return <NonFeatureCard key={i} positionNumber={position} />;
                        }
                    })}
                </div>

                {/* Features Grid - Tablet 2x2 Layout */}
                <div className="hidden md:block lg:hidden relative max-w-4xl mx-auto">
                    <div className="grid grid-cols-2 grid-rows-2 gap-8 mb-12">
                        <FeatureCard feature={features[0]} hasGradient={true} />
                        <FeatureCard feature={features[1]} hasGradient={true} />
                        <FeatureCard feature={features[2]} hasGradient={true} />
                        <FeatureCard feature={features[3]} hasGradient={true} />
                    </div>
                    <div className="flex justify-center">
                        <CenterLogo />
                    </div>
                </div>

                {/* Features Grid - Mobile Single Column */}
                <div className="block md:hidden space-y-8">
                    <div className="flex justify-center mb-12">
                        <CenterLogo />
                    </div>
                    {features.map((feature) => (
                        <div key={feature.id} className="max-w-sm mx-auto">
                            <FeatureCard feature={feature} hasGradient={true} />
                        </div>
                    ))}
                </div>

                {/* Enhanced CTA Button with brand colors */}
                <div className="text-center mt-10">
                    <button className="px-10 py-4 bg-gradient-to-r from-[#4EA62F] via-[#4EA62F] to-[#3d8b26] hover:from-[#3d8b26] hover:via-[#4EA62F] hover:to-[#4EA62F] text-white font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-[#4EA62F]/30 hover:shadow-[#4EA62F]/50 border border-[#4EA62F]/20">
                        Get Started
                    </button>
                </div>

                {/* Add custom styles for radial gradient */}
                <style jsx>{`
                    .bg-gradient-radial {
                        background: radial-gradient(circle, var(--tw-gradient-stops));
                    }
                `}</style>
            </div>
        </section>
    );
};

export default WhyChoose;