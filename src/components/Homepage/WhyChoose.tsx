"use client";
import React from 'react';
import { Trophy, Zap, Building, Shield, Users } from 'lucide-react';

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

const ChainexFeatures = () => {
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

  // Enhanced Diamond star component with brightness lines
  const DiamondStar = ({ className }: { className: string }) => (
    <div className={`absolute ${className} z-30`}>
      <div className="relative w-3 h-3 flex items-center justify-center">
        {/* Brightness lines - horizontal */}
        <div className="absolute w-8 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent animate-pulse" />
        {/* Brightness lines - vertical */}
        <div className="absolute h-8 w-px bg-gradient-to-b from-transparent via-white/90 to-transparent animate-pulse" />
        {/* Brightness lines - diagonal */}
        <div className="absolute w-6 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent rotate-45" />
        <div className="absolute w-6 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent -rotate-45" />
        
        {/* Diamond shape */}
        <div className="w-2 h-2 bg-white rotate-45 shadow-white/80 shadow-lg relative z-10" />
        
        {/* Glow effect */}
        <div className="absolute w-4 h-4 bg-white/30 rotate-45 blur-sm" />
      </div>
    </div>
  );

  // Enhanced connecting lines with smooth sperm-like curves
  const ConnectingLines = ({ position }: { position: string }) => {
    const getLineStyles = () => {
      switch (position) {
        case 'top':
          return (
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60" viewBox="0 0 300 300">
              <defs>
                <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                  <stop offset="30%" stopColor="rgba(16,185,129,0.8)" />
                  <stop offset="70%" stopColor="rgba(16,185,129,0.6)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
                </linearGradient>
              </defs>
              <path
                d="M 150 50 Q 140 80 130 110 Q 120 140 110 170 Q 100 200 90 230 Q 80 260 150 280"
                stroke="url(#lineGradient1)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                className="animate-pulse"
              />
              {/* Star at the end */}
              <circle cx="150" cy="280" r="3" fill="white" className="animate-pulse" />
            </svg>
          );
        case 'left':
          return (
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60" viewBox="0 0 300 300">
              <defs>
                <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                  <stop offset="30%" stopColor="rgba(16,185,129,0.8)" />
                  <stop offset="70%" stopColor="rgba(16,185,129,0.6)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
                </linearGradient>
              </defs>
              <path
                d="M 50 150 Q 80 140 110 130 Q 140 120 170 110 Q 200 100 230 90 Q 260 80 280 150"
                stroke="url(#lineGradient2)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                className="animate-pulse"
              />
              {/* Star at the end */}
              <circle cx="280" cy="150" r="3" fill="white" className="animate-pulse" />
            </svg>
          );
        case 'right':
          return (
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60" viewBox="0 0 300 300">
              <defs>
                <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                  <stop offset="30%" stopColor="rgba(16,185,129,0.8)" />
                  <stop offset="70%" stopColor="rgba(16,185,129,0.6)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
                </linearGradient>
              </defs>
              <path
                d="M 250 150 Q 220 140 190 130 Q 160 120 130 110 Q 100 100 70 90 Q 40 80 20 150"
                stroke="url(#lineGradient3)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                className="animate-pulse"
              />
              {/* Star at the end */}
              <circle cx="20" cy="150" r="3" fill="white" className="animate-pulse" />
            </svg>
          );
        case 'bottom':
          return (
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60" viewBox="0 0 300 300">
              <defs>
                <linearGradient id="lineGradient4" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                  <stop offset="30%" stopColor="rgba(16,185,129,0.8)" />
                  <stop offset="70%" stopColor="rgba(16,185,129,0.6)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
                </linearGradient>
              </defs>
              <path
                d="M 150 250 Q 140 220 130 190 Q 120 160 110 130 Q 100 100 90 70 Q 80 40 150 20"
                stroke="url(#lineGradient4)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                className="animate-pulse"
              />
              {/* Star at the end */}
              <circle cx="150" cy="20" r="3" fill="white" className="animate-pulse" />
            </svg>
          );
        default:
          return null;
      }
    };

    return <div className="absolute inset-0">{getLineStyles()}</div>;
  };

  const FeatureCard = ({ feature, isCenter = false, hasGradient = false }: FeatureCardProps) => {
    const Icon = feature.icon;
    
    return (
      <div className="relative group h-full">
        {/* Connecting lines */}
        <ConnectingLines position={feature.position} />
        
        {/* Diamond stars positioned at corners */}
        <DiamondStar className="top-3 left-3" />
        <DiamondStar className="top-3 right-3" />
        
        {/* Card */}
        <div className="relative bg-black/95 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 h-full flex flex-col items-center justify-center text-center transition-all duration-500 hover:transform hover:scale-105">
          {/* Icon with enhanced circles and green opacity */}
          <div className="relative mb-6 z-10">
            {/* Outer circle with green glow */}
            <div className="absolute inset-0 w-20 h-20 rounded-full border border-emerald-500/30 scale-110" />
            
            {/* Inner circle with enhanced green gradient */}
            <div className="w-20 h-20 rounded-full border border-emerald-500/40 flex items-center justify-center bg-gradient-to-br from-emerald-900/30 via-gray-900/80 to-black/90 relative overflow-hidden">
              {/* Enhanced gradient background with green tint */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-emerald-800/10 to-transparent rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-full" />
              
              <Icon className="w-8 h-8 text-white relative z-10 drop-shadow-sm" />
            </div>
          </div>
          
          {/* Content */}
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2 relative z-10">
            <Zap className="w-5 h-5 text-emerald-400" />
            {feature.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed relative z-10">
            {feature.description}
          </p>
        </div>
      </div>
    );
  };

  const CenterLogo = () => (
    <div className="relative flex items-center justify-center">
      {/* Diamond stars for center */}
      <DiamondStar className="top-1 right-1" />
      <DiamondStar className="bottom-1 left-1" />
      
      {/* Outer circle with enhanced green glow */}
      <div className="absolute inset-0 w-28 h-28 rounded-full border border-emerald-500/40 scale-110" />
      
      {/* Logo circle with enhanced gradient and green tint */}
      <div className="relative w-28 h-28 rounded-full border border-emerald-500/50 flex items-center justify-center bg-gradient-to-br from-emerald-900/40 via-gray-900/80 to-black/90 overflow-hidden">
        {/* Enhanced background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/25 via-emerald-800/15 to-transparent rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/15 to-transparent rounded-full" />
        
        <div className="text-5xl font-bold text-white tracking-wider relative z-10 drop-shadow-lg">
          H
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Grid lines background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {/* Vertical grid lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-500/30 to-transparent"
            style={{ left: `${(i + 1) * 5}%` }}
          />
        ))}
        {/* Horizontal grid lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500/30 to-transparent"
            style={{ top: `${(i + 1) * 5}%` }}
          />
        ))}
      </div>

      {/* Green gradient areas in corners - behind grid */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-emerald-900/12 to-transparent" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-emerald-900/12 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-emerald-900/12 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-emerald-900/12 to-transparent" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-emerald-400/10 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-8">
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

        {/* Features Grid - Desktop Plus Layout */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* Curved Plus Shape Container */}
          <div className="relative w-full h-[900px] flex items-center justify-center">
            
       {/* Orb Glow Effect Behind Plus Shape */}
<div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
  {/* Main bright orb */}
  <div className="w-[750px] h-[750px] bg-gradient-radial from-emerald-400/80 via-emerald-500/50 to-transparent rounded-full blur-[120px] opacity-90 animate-pulse"></div>
  {/* Extra subtle outer glow */}
  <div className="absolute w-[950px] h-[950px] bg-gradient-radial from-emerald-400/40 via-emerald-500/20 to-transparent rounded-full blur-[180px] opacity-70"></div>
  {/* Inner concentrated core */}
  <div className="absolute w-[350px] h-[350px] bg-gradient-radial from-emerald-400/90 via-emerald-500/80 to-transparent rounded-full blur-[40px] opacity-95"></div>
</div>

            {/* Grid lines within clipPath area */}
            <div className="absolute inset-0 z-5">
              <div className="w-full h-full relative">
                {/* Vertical grid lines for clipPath area */}
                {Array.from({ length: 30 }).map((_, i) => (
                  <div
                    key={`clip-v-${i}`}
                    className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-500/20 to-transparent"
                    style={{ left: `${(i + 1) * 3.33}%` }}
                  />
                ))}
                {/* Horizontal grid lines for clipPath area */}
                {Array.from({ length: 30 }).map((_, i) => (
                  <div
                    key={`clip-h-${i}`}
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent"
                    style={{ top: `${(i + 1) * 3.33}%` }}
                  />
                ))}
              </div>
            </div>
            
            {/* Plus Shape with Curved Insets and ClipPath - Proper sizing to cover 4 cards */}
            <div 
              className="absolute inset-0 bg-black backdrop-blur-sm border border-black  z-10"
              style={{
                clipPath: `polygon(
                  35% 0%, 65% 0%, 
                  65% 30%, 
                  100% 30%, 100% 35%, 
                  95% 40%, 100% 45%, 100% 50%, 
                  95% 55%, 100% 60%, 100% 65%, 
                  95% 70%, 100% 70%, 
                  65% 70%, 
                  65% 100%, 35% 100%, 
                  35% 70%, 
                  0% 70%, 0% 65%, 
                  5% 60%, 0% 55%, 0% 50%, 
                  5% 45%, 0% 40%, 0% 35%, 
                  5% 30%, 0% 30%, 
                  35% 30%
                )`
              }}
            >
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-emerald-600/5"></div>
            </div>
            
            {/* Grid Layout for Cards positioned over the plus shape */}
            <div className="relative grid grid-cols-3 grid-rows-3 gap-8 h-full w-full p-6 z-20">
              {/* Top */}
              <div className="col-start-2 row-start-1">
                <FeatureCard feature={features[0]} hasGradient={true} />
              </div>
              
              {/* Left */}
              <div className="col-start-1 row-start-2">
                <FeatureCard feature={features[1]} hasGradient={true} />
              </div>
              
              {/* Center Logo */}
              <div className="col-start-2 row-start-2 flex items-center justify-center">
                <CenterLogo />
              </div>
              
              {/* Right */}
              <div className="col-start-3 row-start-2">
                <FeatureCard feature={features[2]} hasGradient={true} />
              </div>
              
              {/* Bottom */}
              <div className="col-start-2 row-start-3">
                <FeatureCard feature={features[3]} hasGradient={true} />
              </div>
            </div>
          </div>
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

        {/* Enhanced CTA Button */}
        <div className="text-center mt-20">
          <button className="px-10 py-4 bg-gradient-to-r from-emerald-500 via-emerald-400 to-blue-500 hover:from-emerald-600 hover:via-emerald-500 hover:to-blue-600 text-white font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 border border-emerald-400/20">
            Get Started
          </button>
        </div>
      </div>
      
      {/* Add custom styles for radial gradient */}
      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default ChainexFeatures;