import React from 'react';
import { Brain, Code, BarChart3, Users, Phone, Mail } from 'lucide-react';

const AboutColinMunro: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - About Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-[#4EA62F] text-black px-4 py-2 rounded-full text-sm font-medium">
                AI/ML Mentor
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              About Colin Munro
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg">
              Passionate AI/ML educator with 10 years of experience in simplifying 
              complex concepts. Guided thousands of students through hands-on 
              projects, real-world applications, and industry insights. Dedicated to 
              making AI/ML learning accessible, engaging, and career-focused. 🚀
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8 py-8">
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">50k+</h3>
                <p className="text-gray-400 text-sm sm:text-base mt-1">Students Taught</p>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">50+</h3>
                <p className="text-gray-400 text-sm sm:text-base mt-1">Webinars Hosted</p>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">250+</h3>
                <p className="text-gray-400 text-sm sm:text-base mt-1">Projects Mentored</p>
              </div>
            </div>

            {/* Contact Button */}
            <div>
              <button className="bg-[#4EA62F] hover:bg-[#3d8525] text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Contact now
              </button>
            </div>
          </div>

          {/* Right Side - Skills Grid and Contact */}
          <div className="space-y-8 lg:ml-20">
            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md">
              {/* Deep & Machine Learning */}
              <div className="bg-[#111111] border border-gray-800 rounded-2xl p-4 hover:border-gray-700 transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-10 h-10 bg-[#4EA62F] rounded-xl flex items-center justify-center">
                    <Brain className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Deep & Machine</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Learning</p>
                  </div>
                </div>
              </div>

              {/* Python & AI Frameworks */}
              <div className="bg-[#111111] border border-gray-800 rounded-2xl p-4 hover:border-gray-700 transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-10 h-10 bg-[#4EA62F] rounded-xl flex items-center justify-center">
                    <Code className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Python &</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">AI Frameworks</p>
                  </div>
                </div>
              </div>

              {/* Data Science & Analytics */}
              <div className="bg-[#111111] border border-gray-800 rounded-2xl p-4 hover:border-gray-700 transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-10 h-10 bg-[#4EA62F] rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Data Science &</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Analytics</p>
                  </div>
                </div>
              </div>

              {/* Teaching & Curriculum Design */}
              <div className="bg-[#111111] border border-gray-800 rounded-2xl p-4 hover:border-gray-700 transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-10 h-10 bg-[#4EA62F] rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Teaching &</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Curriculum Design</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-4 lg:ml-6">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">+1 6623-3510-22</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">colinml@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutColinMunro;