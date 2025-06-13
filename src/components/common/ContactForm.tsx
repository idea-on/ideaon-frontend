"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Github, ArrowRight, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px] bg-[#111111] rounded-2xl overflow-hidden shadow-2xl border border-[#1b1b1c]">
          
          {/* Left Side - Contact Info */}
          <div className="bg-[#111111] p-8 md:p-12 flex flex-col justify-between relative">
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-secondary rounded-full mb-8">
                  <span className="text-black text-sm font-semibold">Get In Touch</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {"Let's create"}<br />
                <span className="text-secondary">something</span><br />
                amazing
              </h1>
              
              <div className="mb-12">
                <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                  Ready to bring your vision to life?<br />
                  <span className="text-white">{"Let's start the conversation."}</span>
                </p>
              </div>

              <div className="space-y-6 mb-12">
                <div className="group cursor-pointer">
                  <div className="flex items-center space-x-4 p-6 bg-[#1e1e1e] hover:bg-[#1a1a1a] transition-all duration-300 border border-[#333333] hover:border-secondary rounded-xl">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Phone</p>
                      <p className="text-lg font-semibold text-white">+01 578-365-379</p>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex items-center space-x-4 p-6 bg-[#1e1e1e] hover:bg-[#1a1a1a] transition-all duration-300 border border-[#333333] hover:border-secondary rounded-xl">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                      <p className="text-lg font-semibold text-white">hello@blabe.com</p>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex items-center space-x-4 p-6 bg-[#1e1e1e] hover:bg-[#1a1a1a] transition-all duration-300 border border-[#333333] hover:border-secondary rounded-xl">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">Office</p>
                      <p className="text-lg font-semibold text-white mb-2">
                        230 Norman Street New York,<br />
                        QC (USA) H8R 1A1
                      </p>
                      <p className="text-sm text-secondary hover:text-green-400 cursor-pointer flex items-center transition-colors">
                        View on Google Maps <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin, Github].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-12 h-12 bg-[#1e1e1e]  hover:bg-secondary border border-[#333333] hover:border-secondary rounded-xl flex items-center justify-center transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-[#111111] p-8 md:p-12 flex flex-col">
            
            {/* Top Section - Description */}
            <div className="mb-8">
              <div className="flex items-start p-6 bg-[#1e1e1e] rounded-xl border border-[#333333]">
                <div className="flex-shrink-0 mr-4 mt-1">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-black" />
                  </div>
                </div>
                <div className="text-gray-400 leading-relaxed">
                  <p className="mb-2">Ready to turn your ideas into reality?</p>
                  <p className="mb-2">{"We're here to make it happen together."}</p>
                  <p className="text-white font-medium">{"Let's discuss your project."}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1 bg-[#1e1e1e] p-8 rounded-xl border border-[#333333]">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-white text-2xl font-bold">Send Message</h2>
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                  <Send className="w-4 h-4 text-black" />
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-3">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-[#111111] border border-[#444444] rounded-lg text-white placeholder-gray-500 py-4 px-4 focus:border-secondary focus:outline-none transition-colors duration-300"
                        placeholder="Enter your name"
                      />
                      {focusedField === 'name' && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"></div>
                      )}
                    </div>
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-3">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-[#111111] border border-[#444444] rounded-lg text-white placeholder-gray-500 py-4 px-4 focus:border-secondary focus:outline-none transition-colors duration-300"
                        placeholder="Enter your email"
                      />
                      {focusedField === 'email' && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"></div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="phone" className="block text-white text-sm font-medium mb-3">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-[#111111] border border-[#444444] rounded-lg text-white placeholder-gray-500 py-4 px-4 focus:border-secondary focus:outline-none transition-colors duration-300"
                        placeholder="Enter your phone"
                      />
                      {focusedField === 'phone' && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"></div>
                      )}
                    </div>
                  </div>
                  <div className="group">
                    <label htmlFor="subject" className="block text-white text-sm font-medium mb-3">
                      Subject
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-[#111111] border border-[#444444] rounded-lg text-white placeholder-gray-500 py-4 px-4 focus:border-secondary focus:outline-none transition-colors duration-300"
                        placeholder="Enter subject"
                      />
                      {focusedField === 'subject' && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"></div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-3">
                    Tell us about your project
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-[#111111] border border-[#444444] rounded-lg text-white placeholder-gray-500 py-4 px-4 resize-none focus:border-secondary focus:outline-none transition-colors duration-300"
                      placeholder="Describe your project or inquiry..."
                    ></textarea>
                    {focusedField === 'message' && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"></div>
                    )}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-secondary hover:bg-green-600 text-black font-bold py-4 px-6 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg flex items-center justify-center space-x-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;