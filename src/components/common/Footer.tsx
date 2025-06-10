import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className=" bg-black text-white relative overflow-hidden">
     
      {/* Main Content */}
      <div className="relative z-10 flex flex-col ">
   
        {/* Navigation Bar */}
        <nav className="bg-black/90 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-white font-semibold text-lg">Chainex</span>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Explore
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Prices
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Earn
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Why Chainex
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Support
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Footer */}
        <footer className="bg-black py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
              {/* Individuals */}
              <div>
                <h3 className="text-white font-semibold mb-4">Individuals</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Buy & Sell</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Earn Free</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Create Account</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">ID Verification</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Payment Methods</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-white font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Create Account</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">ID Verification</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Payment Methods</a></li>
                </ul>
              </div>

              {/* Businesses */}
              <div>
                <h3 className="text-white font-semibold mb-4">Businesses</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Institutional</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Prime</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Listing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Commerce</a></li>
                </ul>
              </div>

              {/* Follow us at */}
              <div>
                <h3 className="text-white font-semibold mb-4">Follow us at</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center space-x-2 justify-center md:justify-start">
                    <span>📱</span>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                  </li>
                  <li className="flex items-center space-x-2 justify-center md:justify-start">
                    <span>📷</span>
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                  </li>
                  <li className="flex items-center space-x-2 justify-center md:justify-start">
                    <span>💼</span>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 mt-8 pt-8">
              <p className="text-center text-gray-400">
                © Chainex Inc. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>

    
    </div>
  );
};

export default Footer;