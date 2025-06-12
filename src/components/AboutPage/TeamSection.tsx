import React from 'react';
import { X, MessageCircle } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Eddy Denison",
      role: "",
      description: "Our CEO brings strategic vision and financial expertise, guiding our growth and delivering long-term stability.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Mark Robben",
      role: "CEO",
      description: "Mark leads with vision and passion, driving innovation and inspiring our team to achieve new heights.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "John J Dawson",
      role: "",
      description: "Our CTO spearheads technology and innovation, ensuring our solutions are cutting-edge and future-ready.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-gray-400 text-sm font-medium tracking-widest uppercase mb-6">
            FUTURE-FOCUSED
          </p>
          <h1 className="text-6xl md:text-7xl font-bold">The Team</h1>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ">
       {teamMembers.map((member) => (
            <div key={member.id} className="rounded-3xl overflow-hidden">
              {/* Mobile: Image first, content below for all members */}
              <div className="block lg:hidden">
                <div className="h-[400px] relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      {member.role && (
                        <p className="text-gray-400 text-sm font-medium">{member.role}</p>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <X className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                      <MessageCircle className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>

              {/* Desktop: Original layout with special case for CEO */}
              <div className="hidden lg:block">
                {member.id === 2 ? (
                  <>
                    {/* Content Above Image for CEO */}
                    <div className="p-6 pb-0">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-secondary mb-1">{member.name}</h3>
                          {member.role && (
                            <p className="text-secondary text-sm font-medium">{member.role}</p>
                          )}
                        </div>
                        <div className="flex gap-3">
                          <X className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                          <MessageCircle className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed mb-6">{member.description}</p>
                    </div>
                    {/* Image Below Content for CEO */}
                    <div className="h-[400px] relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Standard layout for other team members - Image first, then content */}
                    <div className="h-[400px] relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                    </div>
                    {/* Content Below Image */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                          {member.role && (
                            <p className="text-gray-400 text-sm font-medium">{member.role}</p>
                          )}
                        </div>
                        <div className="flex gap-3">
                          <X className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                          <MessageCircle className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;