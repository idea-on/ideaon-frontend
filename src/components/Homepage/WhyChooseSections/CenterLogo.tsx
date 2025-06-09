import React from 'react'

export default function CenterLogo() {
  return (
    <div className="relative flex items-center justify-center">
        {/* Diamond stars for center */}
          {/* <VectorLine 
        position="top-right" 
        size={180} 
        brightness={0.7}
        className="z-10"
      />
        <VectorLine 
        position="top-left" 
        size={150} 
        brightness={0.9}
        className="z-10"
      /> */}

        {/* Large outer glow orb - mild green like image */}
        <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-[#4EA62F]/15 blur-2xl -translate-x-1/2 -translate-y-1/2" />

        {/* Multiple concentric circles like the image */}
        <div className="absolute top-1/2 left-1/2 w-36 h-36 rounded-full border border-gray-700/40 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full border border-gray-600/30 -translate-x-1/2 -translate-y-1/2" />

        {/* Main logo circle - exact design from image */}
        <div className="relative w-28 h-28 rounded-full border border-gray-600/40 flex items-center justify-center bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black overflow-hidden">
            {/* Very subtle brand color accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4EA62F]/8 to-transparent rounded-full" />

            <div className="text-5xl font-bold text-white tracking-wider relative z-10 drop-shadow-lg">
                H
            </div>
        </div>
    </div>
  )
}