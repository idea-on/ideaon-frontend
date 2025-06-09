import React from 'react'

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface VectorLineProps {
  position: Position;
  className?: string;
  size?: number;
  brightness?: number;
}

const VectorLine: React.FC<VectorLineProps> = ({ 
  position, 
  className = '', 
  size = 100, 
  brightness = 0.2 
}) => {
  const getPositionClasses = () => {
    const baseClasses = 'absolute pointer-events-none';
    switch (position) {
      case 'top-left':
        return `${baseClasses} top-0 left-0`;
      case 'top-right':
        return `${baseClasses} top-0 right-0`;
      case 'bottom-left':
        return `${baseClasses} bottom-0 left-0`;
      case 'bottom-right':
        return `${baseClasses} bottom-0 right-0`;
      default:
        return baseClasses;
    }
  };

  const getLineConfig = () => {
    const halfSize = size / 2;
    switch (position) {
      case 'top-left':
        return {
          path: `M 0 ${halfSize} L ${halfSize} ${halfSize} L ${halfSize} 0`,
          diamond: { cx: halfSize, cy: halfSize },
          rotation: 0
        };
      case 'top-right':
        return {
          path: `M ${size} ${halfSize} L ${halfSize} ${halfSize} L ${halfSize} 0`,
          diamond: { cx: halfSize, cy: halfSize },
          rotation: 0
        };
      case 'bottom-left':
        return {
          path: `M 0 ${halfSize} L ${halfSize} ${halfSize} L ${halfSize} ${size}`,
          diamond: { cx: halfSize, cy: halfSize },
          rotation: 0
        };
      case 'bottom-right':
        return {
          path: `M ${size} ${halfSize} L ${halfSize} ${halfSize} L ${halfSize} ${size}`,
          diamond: { cx: halfSize, cy: halfSize },
          rotation: 0
        };
      default:
        return {
          path: `M 0 ${halfSize} L ${halfSize} ${halfSize} L ${halfSize} 0`,
          diamond: { cx: halfSize, cy: halfSize },
          rotation: 0
        };
    }
  };

  const config = getLineConfig();
  const opacity = Math.min(Math.max(brightness, 0.1), 1);
  const glowOpacity = opacity * 0.6;

  return (
    <div className={`${getPositionClasses()} ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-full"
      >
        <defs>
          {/* Glow filter for the diamond */}
          <filter id={`glow-${position}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Gradient for the line */}
          <linearGradient id={`lineGradient-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="50%" stopColor={`rgba(255,255,255,${opacity})`} />
            <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
          </linearGradient>
        </defs>
        
        {/* Vector line */}
        <path
          d={config.path}
          fill="none"
          stroke={`url(#lineGradient-${position})`}
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          opacity={opacity}
        />
        
        {/* Diamond shape */}
        <g transform={`translate(${config.diamond.cx}, ${config.diamond.cy})`}>
          {/* Outer glow */}
          <polygon
            points="0,-8 6,0 0,8 -6,0"
            fill={`rgba(255,255,255,${glowOpacity})`}
            filter={`url(#glow-${position})`}
            className="animate-pulse"
          />
          {/* Main diamond */}
          <polygon
            points="0,-6 4,0 0,6 -4,0"
            fill={`rgba(255,255,255,${opacity})`}
            className="drop-shadow-sm"
          />
          {/* Inner highlight */}
          <polygon
            points="0,-3 2,0 0,3 -2,0"
            fill={`rgba(255,255,255,${Math.min(opacity + 0.3, 1)})`}
          />
        </g>
      </svg>
    </div>
  );
};
 export default VectorLine;
