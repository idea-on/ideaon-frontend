'use client'

import React from 'react'
import { IconType } from "react-icons";
import { FaLock, FaRocket, FaUsers } from "react-icons/fa";

export interface HighlightFeature {
    title: string;
    icon: IconType;
    description: string;
}


const features: HighlightFeature[] = [
    {
        title: "Smart & Instant Collaboration",
        icon: FaUsers,
        description:
            "Startup-Investor Matching with NDA Protection. Easily match with investors, patent agents, and business consultants based on your startup stage and industry — with every interaction protected by automatic NDAs.",
    },

    {
        title: "Hire Verified Experts Anytime",
        icon: FaUsers,
        description:
            "Startup Gig Marketplace for Legal, Pitch, and Branding Services. Post or browse expert gigs for pitch deck creation, legal consulting, patent filing, and more — with escrow-secured payments and verified professionals.",
    },
    {
        title: "NDA-Enforced Startup Platform",
        icon: FaLock,
        description:
            "Confidential Idea Sharing with Full IP Protection. Every document, chat, pitch, or business idea is protected under platform-wide, auto-enforced NDA policies — your intellectual property is safe by design.",
    },
    {
        title: "Scalable for Startups & Enterprises",
        icon: FaRocket,
        description:
            "From Seed Funding to Corporate Innovation. Whether you're an early-stage founder, growth-stage startup, or innovation-scouting enterprise — Ideaon adapts to your vision and investment goals.",
    },
];

const FeatureCard: React.FC<HighlightFeature> = ({ title, icon: Icon, description }) => (
    <div className="bg-[#0e0f12] rounded-xl border border-[#1e1f24] p-6 text-white flex flex-col items-center text-center shadow-md hover:shadow-lg transition-all">
        <div className="mb-4 text-3xl text-primary">
            <Icon />
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
    </div>
);

const FeatureGrid: React.FC = () => {
    return (
        <section className="bg-black py-16 px-4 lg:px-24">
            <div className="grid grid-cols-3 grid-rows-3 gap-6 justify-items-center items-center">
                {/* Top Center (Row 1, Col 2) */}
                <div className="col-start-2 row-start-1">
                    <FeatureCard {...features[0]} />
                </div>

                {/* Left Center (Row 2, Col 1) */}
                <div className="col-start-1 row-start-2">
                    <FeatureCard {...features[1]} />
                </div>

                {/* Center Logo or Empty (Row 2, Col 2) */}
                <div className="col-start-2 row-start-2">
                    {/* Optional center content here */}
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                        🚀
                    </div>
                </div>

                {/* Right Center (Row 2, Col 3) */}
                <div className="col-start-3 row-start-2">
                    <FeatureCard {...features[2]} />
                </div>

                {/* Bottom Center (Row 3, Col 2) */}
                <div className="col-start-2 row-start-3">
                    <FeatureCard {...features[3]} />
                </div>
            </div>

        </section>
    );
};


const WhyChoose = () => {
    return (
        <section className='bg-lightDark py-10 px-10 flex flex-col items-center'>
            <header className='space-y-8 text-center font-poppins'>
                <div className="space-y-4">
                    <div className='bg-[#3FB1851A] w-fit mx-auto text-[#3FB185] rounded-3xl py-2 px-5 border border-[#FFFFFF1A]'>
                        Market
                    </div>
                    <h2 className='text-white font-extrabold font-poppins text-2xl md:text-4xl lg:text-7xl'>
                        Why Choose IDEAON
                    </h2>
                </div>
                <p className='text-[#FFFFFF99] text-lg font-normal'>
                    {"The All-in-One Startup Collaboration Platform for"} <strong className='text-white'>Innovators, Investors & Experts </strong>{"Ideaon helps startup founders, business owners, and investors securely connect, collaborate, and grow through a trusted platform that combines NDA-enforced privacy, a verified gig marketplace, and investor matchmaking — all in one place."}
                </p>
            </header>
            <FeatureGrid />
        </section>
    )
}

export default WhyChoose