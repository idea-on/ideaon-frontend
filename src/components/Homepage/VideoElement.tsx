import React, { ReactNode } from 'react';

interface VideoElementProps {
  className?: string;
  children?: ReactNode;
  videoSrc?: string;
}

const VideoElement: React.FC<VideoElementProps> = ({
  className = '',
  children,
  videoSrc,
}) => {
  return (
    <div
      className={`inline-block rounded-full relative overflow-hidden ${className}`}
      style={{ aspectRatio: '2/1' }}
    >
      {/* Video element with src directly */}
      <video
        src={videoSrc}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        Sorry, your browser does not support embedded videos.
      </video>
      {/* Overlay and gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0  flex items-center justify-center">
          {children}
        </div>
      
      </div>
    </div>
  );
};
export default VideoElement;