import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const { handleScrollClick } = useScrollTo();
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

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
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  // Reset mobile dropdown when menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setIsMobileServicesOpen(false);
    }
  }, [isMenuOpen]);

  // Determine if on home page or specialty/policy pages
  const specialtyOrPolicyPages = [
    '/kitchens', '/bedrooms', '/bathrooms', '/commercial', '/privacy-policy', '/terms-of-service'
  ];
  const isHomePage = location.pathname === "/";

  // Navigation menu item color logic
  const navLinkClasses = isHomePage
    ? (isScrolled ? 'text-black hover:text-black' : 'text-white hover:text-white')
    : 'text-black hover:text-black';

  // Phone number and icon color logic
  let phoneTextClasses = '';
  let phoneIconClass = '';
  let phoneContainerClasses = '';
  
  if (isHomePage) {
    if (isScrolled) {
      phoneTextClasses = 'text-forest-700 hover:text-forest-800 font-bold';
      phoneIconClass = 'text-forest-700';
      phoneContainerClasses = 'bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm border border-forest-100';
    } else {
      phoneTextClasses = 'text-white hover:text-forest-100 font-bold';
      phoneIconClass = 'text-white';
      phoneContainerClasses = 'bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg';
    }
  } else {
    phoneTextClasses = 'text-forest-700 hover:text-forest-800 font-bold';
    phoneIconClass = 'text-forest-700';
    phoneContainerClasses = 'bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm border border-forest-100';
  }

  const ctaButtonClasses = "bg-gradient-to-r from-forest-700 to-forest-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:from-forest-800 hover:to-forest-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl";

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-transparent'
    } ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center group" onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              handleScrollClick(e, 'top');
            }
          }}>
            <div className="w-12 h-12 bg-gradient-to-br from-forest-700 to-forest-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
              <span className="text-white font-bold text-2xl tracking-tighter" style={{letterSpacing: '-0.15em'}}>KD</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a 
              href="/#top" 
              onClick={(e) => handleScrollClick(e, 'top')}
              className={`font-semibold transition-all duration-300 hover:scale-105 ${navLinkClasses}`}
            >
              Home
            </a>
            <a 
              href="/#about-us" 
              onClick={(e) => handleScrollClick(e, 'about-us')}
              className={`font-semibold transition-all duration-300 hover:scale-105 ${navLinkClasses}`}
            >
              About Us
            </a>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className={`flex items-center space-x-1 font-semibold transition-all duration-300 hover:scale-105 ${navLinkClasses}`}>
                <span>Services</span>
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform-gpu z-50 p-3">
                <div className="flex flex-col gap-1">
                  <Link to="/kitchens" className={`block px-5 py-3 rounded-xl font-semibold transition-all duration-300 text-gray-700 hover:bg-forest-50 hover:text-forest-700 hover:scale-105 focus:bg-forest-50 focus:text-forest-700 outline-none` + (isActive('/kitchens') ? ' bg-forest-50 text-forest-700' : '')}>
                    Kitchen Renovations
                  </Link>
                  <Link to="/bedrooms" className={`block px-5 py-3 rounded-xl font-semibold transition-all duration-300 text-gray-700 hover:bg-forest-50 hover:text-forest-700 hover:scale-105 focus:bg-forest-50 focus:text-forest-700 outline-none` + (isActive('/bedrooms') ? ' bg-forest-50 text-forest-700' : '')}>
                    Bedroom Renovations
                  </Link>
                  <Link to="/bathrooms" className={`block px-5 py-3 rounded-xl font-semibold transition-all duration-300 text-gray-700 hover:bg-forest-50 hover:text-forest-700 hover:scale-105 focus:bg-forest-50 focus:text-forest-700 outline-none` + (isActive('/bathrooms') ? ' bg-forest-50 text-forest-700' : '')}>
                    Bathroom Renovations
                  </Link>
                  <Link to="/commercial" className={`block px-5 py-3 rounded-xl font-semibold transition-all duration-300 text-gray-700 hover:bg-forest-50 hover:text-forest-700 hover:scale-105 focus:bg-forest-50 focus:text-forest-700 outline-none` + (isActive('/commercial') ? ' bg-forest-50 text-forest-700' : '')}>
                    Commercial Renovations
                  </Link>
                </div>
              </div>
            </div>

            <a 
              href="/#contact-section" 
              onClick={(e) => handleScrollClick(e, 'contact-section')}
              className={`font-semibold transition-all duration-300 hover:scale-105 ${navLinkClasses}`}
            >
              Contact Us
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:+27799352223" className={`flex items-center space-x-2 transition-all duration-300 hover:scale-105 ${phoneContainerClasses} ${phoneTextClasses}`}>
              <Phone size={16} className={phoneIconClass} />
              <span className="tracking-wide">+27 79 935 2223</span>
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
          <div className="fixed inset-0 z-[9999] bg-white flex flex-col min-h-screen w-screen lg:hidden">
            {/* Top Bar with Logo and Close */}
            <div className="w-full flex items-center justify-between p-4 border-b border-gray-200">
              <Link to="/" className="flex items-center" onClick={(e) => {
                setIsMenuOpen(false);
                if (location.pathname === '/') {
                  e.preventDefault();
                  handleScrollClick(e, 'top');
                }
              }}>
                <div className="w-12 h-12 bg-gradient-to-br from-forest-700 to-forest-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl tracking-tighter" style={{letterSpacing: '-0.15em'}}>KD</span>
                </div>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full bg-gray-100 text-forest-800 shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-700"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            {/* Menu Items */}
            <nav className="flex flex-col w-full py-6">
              <a
                href="/#top"
                onClick={(e) => { handleScrollClick(e, 'top'); setIsMenuOpen(false); }}
                className="text-xl font-semibold text-black w-11/12 mx-auto text-center py-4 rounded-lg hover:bg-gray-100 transition-colors mb-2"
              >
                Home
              </a>
              <a
                href="/#about-us"
                onClick={(e) => { handleScrollClick(e, 'about-us'); setIsMenuOpen(false); }}
                className="text-xl font-semibold text-black w-11/12 mx-auto text-center py-4 rounded-lg hover:bg-gray-100 transition-colors mb-2"
              >
                About Us
              </a>
              {/* Services Dropdown */}
              <div className="w-11/12 mx-auto mb-2 flex flex-col items-center">
                <button
                  className="w-full text-xl font-semibold text-black py-4 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none flex justify-center items-center"
                  aria-expanded={isMobileServicesOpen}
                  onClick={() => setIsMobileServicesOpen((open) => !open)}
                >
                  <span>Services</span>
                  <ChevronDown size={24} className={`ml-2 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="flex flex-col bg-gray-50 rounded-lg mt-2 mb-2 w-full">
                    <Link
                      to="/kitchens"
                      onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}
                      className="text-base font-medium text-black w-full py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors text-center"
                    >
                      Kitchen Renovations
                    </Link>
                    <Link
                      to="/bedrooms"
                      onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}
                      className="text-base font-medium text-black w-full py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors text-center"
                    >
                      Bedroom Renovations
                    </Link>
                    <Link
                      to="/bathrooms"
                      onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}
                      className="text-base font-medium text-black w-full py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors text-center"
                    >
                      Bathroom Renovations
                    </Link>
                    <Link
                      to="/commercial"
                      onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}
                      className="text-base font-medium text-black w-full py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors text-center"
                    >
                      Commercial Renovations
                    </Link>
                  </div>
                )}
              </div>
              <a
                href="/#contact-section"
                onClick={(e) => { handleScrollClick(e, 'contact-section'); setIsMenuOpen(false); }}
                className="text-xl font-semibold text-black w-11/12 mx-auto text-center py-4 rounded-lg hover:bg-gray-100 transition-colors mb-2"
              >
                Contact Us
              </a>
            </nav>
            {/* Footer CTA & Contact */}
            <div className="flex flex-col gap-2 w-full p-4 border-t border-gray-100">
              <a
                href="/#contact-section"
                onClick={(e) => { handleScrollClick(e, 'contact-section'); setIsMenuOpen(false); }}
                className="w-full bg-forest-700 text-white text-lg font-bold py-4 rounded-lg text-center shadow-lg hover:bg-forest-800 transition-colors"
              >
                Get Free Quote
              </a>
              <a
                href="tel:+27799352223"
                className="w-full bg-gradient-to-r from-forest-600 to-forest-700 text-white text-lg font-bold py-4 rounded-lg text-center shadow-lg hover:from-forest-700 hover:to-forest-800 transition-all duration-300 flex items-center justify-center gap-3 border-2 border-forest-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={22} className="text-white" />
                <span className="tracking-wide">+27 79 935 2223</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;