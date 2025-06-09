'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { images } from '../../../public/assets/assets';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsScrolled(scrollTop > viewportHeight * 0.8); // Trigger earlier for smoother transition
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when scrolling (but keep mobile menu open)
  useEffect(() => {
    const handleScroll = () => {
      if (isExploreOpen) {
        setIsExploreOpen(false);
      }
    };

    if (isScrolled) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isScrolled, isExploreOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsExploreOpen(false); // Close explore dropdown when toggling menu
  };

  const toggleExplore = () => {
    setIsExploreOpen(!isExploreOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsExploreOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const isExploreActive = () => {
    return pathname.startsWith('/explore') || pathname.startsWith('/roles');
  };

  return (
    <>
      <nav className={`bg-background w-full top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'fixed shadow-lg backdrop-blur-md bg-opacity-95' : 'relative'
      }`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}>
          <div className={`flex items-center transition-all duration-500 ${
            isScrolled 
              ? 'flex-row justify-center h-16' 
              : 'flex-col justify-center gap-4 h-auto'
          }`}>
            
            {/* Logo - Desktop (only shown when not scrolled) */}
            <Link 
              href="/" 
              className={`items-center space-x-2 text-white transition-all duration-500 ${
                isScrolled ? 'hidden' : 'hidden md:block'
              }`}
            >
              <img 
                src={images.png.logoDarkTheme.src} 
                alt="Logo"
                className="w-24 h-12"
              />
            </Link>

            {/* Desktop Navigation - Centered when scrolled */}
            <div className={`hidden md:flex items-center bg-white rounded-full px-8 py-3 transition-all duration-500 shadow-sm ${
              isScrolled ? 'mx-auto' : ''
            }`}>
              {/* Logo inside navbar when scrolled */}
              {isScrolled && (
                <>
                  <Link 
                    href="/" 
                    className="flex items-center mr-6"
                  >
                    <img 
                      src={images.png.logoWhiteTheme.src} 
                      alt="Logo"
                      className="w-20 h-10"
                    />
                  </Link>
                  <div className="w-px h-6 bg-gray-300 mr-6"></div>
                </>
              )}
              
              <div className="flex items-center space-x-8">
                <Link 
                  href="/" 
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive('/') 
                      ? 'text-black' 
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  Home
                  {isActive('/') && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-background rounded-full"></div>
                  )}
                </Link>
                
                <Link 
                  href="/about" 
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive('/about') 
                      ? 'text-black' 
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  About Us
                  {isActive('/about') && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-background rounded-full"></div>
                  )}
                </Link>

                <div className="relative">
                  <button
                    onClick={toggleExplore}
                    className={`relative flex items-center px-3 py-2 text-sm font-medium transition-all duration-200 ${
                      isExploreActive() 
                        ? 'text-black' 
                        : 'text-gray-700 hover:text-black'
                    }`}
                  >
                    Explore Roles
                    <ChevronDown 
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        isExploreOpen ? 'rotate-180' : ''
                      }`} 
                    />
                    {isExploreActive() && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-background rounded-full"></div>
                    )}
                  </button>
                  
                  {/* Explore Roles Dropdown */}
                  {isExploreOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-fadeIn">
                      <Link 
                        href="/roles/ideator" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setIsExploreOpen(false)}
                      >
                        Ideator
                      </Link>
                      <Link 
                        href="/roles/investor" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setIsExploreOpen(false)}
                      >
                        Investor
                      </Link>
                      <Link 
                        href="/roles/consultant" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setIsExploreOpen(false)}
                      >
                        Consultant
                      </Link>
                      <Link 
                        href="/roles/patent-agent" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setIsExploreOpen(false)}
                      >
                        Patent Agent
                      </Link>
                      <Link 
                        href="/roles/corporate" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setIsExploreOpen(false)}
                      >
                        Corporate
                      </Link>
                    </div>
                  )}
                </div>

                <Link 
                  href="/pricing" 
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive('/pricing') 
                      ? 'text-black' 
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  Pricing
                  {isActive('/pricing') && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-background rounded-full"></div>
                  )}
                </Link>

                <Link 
                  href="/contact" 
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive('/contact') 
                      ? 'text-black' 
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  Contact
                  {isActive('/contact') && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-background rounded-full"></div>
                  )}
                </Link>

                {/* Auth Buttons with Enhanced Hover Effects */}
                <div className="flex items-center space-x-3 ml-4 border-l border-gray-300 pl-4">
                  <Link 
                    href="/login" 
                    className="group relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-all duration-300 overflow-hidden rounded-full"
                  >
                    <span className="relative z-10">Login</span>
                    <div className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></div>
                  </Link>
                  <Link 
                    href="/signup" 
                    className="group relative px-4 py-2 text-sm font-medium bg-background text-white rounded-full transition-all duration-300 overflow-hidden hover:shadow-lg"
                  >
                    <span className="relative z-10">Sign Up</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Layout - Absolute positioning when scrolled to avoid layout shifts */}
            <div className={`md:hidden transition-all duration-500 ${
              isScrolled 
                ? 'absolute top-0 left-0 right-0 flex items-center justify-between bg-white rounded-full mx-4 my-3 px-4 py-2 shadow-lg' 
                : 'flex items-center justify-between w-full'
            }`}>
              {/* Mobile Logo */}
              <Link 
                href="/" 
                className={`flex items-center space-x-2 transition-all duration-300 ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                <img 
                  src={isScrolled ? images.png.logoWhiteTheme.src : images.png.logoDarkTheme.src} 
                  alt="Logo"
                  className={`transition-all duration-300 ${isScrolled ? 'w-16 h-8' : 'w-24 h-12'}`}
                />
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className={`p-2 transition-all duration-300 rounded-full ${
                  isScrolled 
                    ? 'text-black hover:text-gray-600 hover:bg-gray-100' 
                    : 'text-white hover:text-gray-300 hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Fixed positioning to avoid scroll issues */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 z-40 pt-20">
          <div className="bg-white rounded-lg mx-4 shadow-2xl border border-gray-200 animate-slideDown">
            <div className="px-4 py-6 space-y-1">
              <Link 
                href="/" 
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  isActive('/') 
                    ? 'text-black bg-gray-100 border-l-4 border-background' 
                    : 'text-gray-700 hover:text-black hover:bg-gray-50'
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>

              <Link 
                href="/about" 
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  isActive('/about') 
                    ? 'text-black bg-gray-100 border-l-4 border-background' 
                    : 'text-gray-700 hover:text-black hover:bg-gray-50'
                }`}
                onClick={closeMenu}
              >
                About Us
              </Link>
              
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleExplore();
                  }}
                  className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 text-left ${
                    isExploreActive() 
                      ? 'text-black bg-gray-100 border-l-4 border-background' 
                      : 'text-gray-700 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  Explore Roles
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isExploreOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {/* Mobile Explore Roles Submenu */}
                {isExploreOpen && (
                  <div className="pl-4 py-2 space-y-1 animate-fadeIn">
                    <Link 
                      href="/roles/ideator" 
                      className="block text-gray-600 hover:text-black hover:bg-gray-50 px-4 py-2 text-sm rounded-lg transition-all duration-200"
                      onClick={closeMenu}
                    >
                      Ideator
                    </Link>
                    <Link 
                      href="/roles/investor" 
                      className="block text-gray-600 hover:text-black hover:bg-gray-50 px-4 py-2 text-sm rounded-lg transition-all duration-200"
                      onClick={closeMenu}
                    >
                      Investor
                    </Link>
                    <Link 
                      href="/roles/consultant" 
                      className="block text-gray-600 hover:text-black hover:bg-gray-50 px-4 py-2 text-sm rounded-lg transition-all duration-200"
                      onClick={closeMenu}
                    >
                      Consultant
                    </Link>
                    <Link 
                      href="/roles/patent-agent" 
                      className="block text-gray-600 hover:text-black hover:bg-gray-50 px-4 py-2 text-sm rounded-lg transition-all duration-200"
                      onClick={closeMenu}
                    >
                      Patent Agent
                    </Link>
                    <Link 
                      href="/roles/corporate" 
                      className="block text-gray-600 hover:text-black hover:bg-gray-50 px-4 py-2 text-sm rounded-lg transition-all duration-200"
                      onClick={closeMenu}
                    >
                      Corporate
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/pricing" 
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  isActive('/pricing') 
                    ? 'text-black bg-gray-100 border-l-4 border-background' 
                    : 'text-gray-700 hover:text-black hover:bg-gray-50'
                }`}
                onClick={closeMenu}
              >
                Pricing
              </Link>
              
              <Link 
                href="/contact" 
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  isActive('/contact') 
                    ? 'text-black bg-gray-100 border-l-4 border-background' 
                    : 'text-gray-700 hover:text-black hover:bg-gray-50'
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>

              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Link 
                  href="/login" 
                  className="group relative block w-full text-center px-4 py-3 text-base font-medium text-gray-700 hover:text-black transition-all duration-300 overflow-hidden rounded-lg border border-gray-200"
                  onClick={closeMenu}
                >
                  <span className="relative z-10">Login</span>
                  <div className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-lg"></div>
                </Link>
                <Link 
                  href="/signup" 
                  className="group relative block w-full text-center px-4 py-3 text-base font-medium bg-background text-white rounded-lg transition-all duration-300 overflow-hidden hover:shadow-lg"
                  onClick={closeMenu}
                >
                  <span className="relative z-10">Sign Up</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-lg"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dark overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30 md:hidden animate-fadeIn" 
          onClick={closeMenu}
        />
      )}

      {/* Overlay for explore dropdown */}
      {isExploreOpen && (
        <div 
          className="fixed inset-0 z-40 hidden md:block" 
          onClick={() => setIsExploreOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from { 
            opacity: 0;
            transform: translateY(-10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;