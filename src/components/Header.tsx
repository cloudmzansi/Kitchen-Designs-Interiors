import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const { handleScrollClick } = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  // Determine if on home page
  const isHomePage = location.pathname === "/";

  const navLinkClasses = isHomePage
    ? (isScrolled ? 'text-gray-700 hover:text-black' : 'text-white hover:text-gray-200')
    : (isScrolled ? 'text-gray-700 hover:text-black' : 'text-gray-800 hover:text-black');

  const logoTextClasses = isScrolled ? 'text-forest-900' : 'text-white';
  
  const phoneTextClasses = isScrolled ? 'text-forest-600 hover:text-forest-700' : 'text-forest-100 hover:text-white';

  const ctaButtonClasses = "bg-forest-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-forest-800 transition-all duration-300";

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    } ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-forest-700 to-forest-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl tracking-tighter" style={{letterSpacing: '-0.15em'}}>KD</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <a 
              href="/#top" 
              onClick={(e) => handleScrollClick(e, 'top')}
              className={`font-semibold transition-colors duration-300 ${navLinkClasses}`}
            >
              Home
            </a>
            <a 
              href="/#about-us" 
              onClick={(e) => handleScrollClick(e, 'about-us')}
              className={`font-semibold transition-colors duration-300 ${navLinkClasses}`}
            >
              About Us
            </a>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className={`flex items-center space-x-1 font-semibold transition-colors duration-300 ${navLinkClasses}`}>
                <span>Services</span>
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform-gpu z-50 p-2">
                <div className="flex flex-col gap-1">
                  <Link to="/kitchens" className={`block px-5 py-3 rounded-lg font-semibold transition-colors text-gray-700 hover:bg-forest-50 hover:text-forest-700 focus:bg-forest-50 focus:text-forest-700 outline-none` + (isActive('/kitchens') ? ' bg-forest-50 text-forest-700' : '')}>
                    Kitchen Renovations
                  </Link>
                  <Link to="/bedrooms" className={`block px-5 py-3 rounded-lg font-semibold transition-colors text-gray-700 hover:bg-forest-50 hover:text-forest-700 focus:bg-forest-50 focus:text-forest-700 outline-none` + (isActive('/bedrooms') ? ' bg-forest-50 text-forest-700' : '')}>
                    Bedroom Renovations
                  </Link>
                  <Link to="/bathrooms" className={`block px-5 py-3 rounded-lg font-semibold transition-colors text-gray-700 hover:bg-forest-50 hover:text-forest-700 focus:bg-forest-50 focus:text-forest-700 outline-none` + (isActive('/bathrooms') ? ' bg-forest-50 text-forest-700' : '')}>
                    Bathroom Renovations
                  </Link>
                  <Link to="/commercial" className={`block px-5 py-3 rounded-lg font-semibold transition-colors text-gray-700 hover:bg-forest-50 hover:text-forest-700 focus:bg-forest-50 focus:text-forest-700 outline-none` + (isActive('/commercial') ? ' bg-forest-50 text-forest-700' : '')}>
                    Commercial Renovations
                  </Link>
                </div>
              </div>
            </div>

            <a 
              href="/#contact-section" 
              onClick={(e) => handleScrollClick(e, 'contact-section')}
              className={`font-semibold transition-colors duration-300 ${navLinkClasses}`}
            >
              Contact Us
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:+27799352223" className={`flex items-center space-x-2 font-semibold transition-colors duration-300 ${phoneTextClasses}`}>
              <Phone size={16} className={isScrolled ? 'text-forest-600' : 'text-white'} />
              <span>+27 79 935 2223</span>
            </a>
            <a 
              href="/#contact-section"
              onClick={(e) => handleScrollClick(e, 'contact-section')}
              className={ctaButtonClasses}
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-forest-800" /> : <Menu size={24} className="text-forest-800" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white bg-opacity-95 backdrop-blur-md flex flex-col">
            <div className="flex justify-end p-6">
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="p-3 rounded-full bg-forest-100 text-forest-800 shadow-lg hover:bg-forest-200 transition-all focus:outline-none focus:ring-2 focus:ring-forest-700"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center items-center px-6">
              <div className="w-full max-w-sm space-y-6 bg-white bg-opacity-100 rounded-2xl p-8 shadow-xl">
                <a 
                  href="/#top" 
                  onClick={(e) => { handleScrollClick(e, 'top'); setIsMenuOpen(false); }} 
                  className="block text-2xl font-bold text-forest-800 text-center hover:text-forest-600 transition-colors py-2"
                >
                  Home
                </a>
                <a 
                  href="/#about-us" 
                  onClick={(e) => { handleScrollClick(e, 'about-us'); setIsMenuOpen(false); }} 
                  className="block text-2xl font-bold text-forest-800 text-center hover:text-forest-600 transition-colors py-2"
                >
                  About Us
                </a>
                <div className="text-center">
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-center w-full text-2xl font-bold text-forest-800 hover:text-forest-600 transition-colors py-2 focus:outline-none"
                  >
                    <span>Services</span>
                    <ChevronDown size={24} className={`ml-2 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="mt-2 space-y-2 bg-forest-50 rounded-lg p-4">
                      <Link 
                        to="/kitchens" 
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-lg text-forest-800 hover:text-forest-600 transition-colors py-1"
                      >
                        Kitchen Renovations
                      </Link>
                      <Link 
                        to="/bedrooms" 
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-lg text-forest-800 hover:text-forest-600 transition-colors py-1"
                      >
                        Bedroom Renovations
                      </Link>
                      <Link 
                        to="/bathrooms" 
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-lg text-forest-800 hover:text-forest-600 transition-colors py-1"
                      >
                        Bathroom Renovations
                      </Link>
                      <Link 
                        to="/commercial" 
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-lg text-forest-800 hover:text-forest-600 transition-colors py-1"
                      >
                        Commercial Renovations
                      </Link>
                    </div>
                  )}
                </div>
                <a 
                  href="/#contact-section" 
                  onClick={(e) => { handleScrollClick(e, 'contact-section'); setIsMenuOpen(false); }} 
                  className="block text-2xl font-bold text-forest-800 text-center hover:text-forest-600 transition-colors py-2"
                >
                  Contact Us
                </a>
              </div>
            </nav>
            <div className="p-6 flex flex-col items-center space-y-4">
              <a 
                href="/#contact-section" 
                onClick={(e) => { handleScrollClick(e, 'contact-section'); setIsMenuOpen(false); }} 
                className="w-full max-w-sm bg-forest-700 text-white text-lg font-bold py-4 rounded-lg text-center shadow-lg hover:bg-forest-800 transition-colors"
              >
                Get Free Quote
              </a>
              <a 
                href="tel:+27799352223" 
                className="block text-center text-base text-forest-700 hover:text-forest-900 font-medium transition-colors"
              >
                Call Now: +27 79 935 2223
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;