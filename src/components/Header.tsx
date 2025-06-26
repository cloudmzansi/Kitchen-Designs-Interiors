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
    setIsServicesOpen(false);
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

  // Determine if on home page or specialty/policy pages
  const specialtyOrPolicyPages = [
    '/kitchens', '/bedrooms', '/bathrooms', '/commercial', '/privacy-policy', '/terms-of-service'
  ];
  const isHomePage = location.pathname === "/";
  const isSpecialtyOrPolicyPage = specialtyOrPolicyPages.includes(location.pathname);

  // Navigation menu item color logic
  const navLinkClasses = isHomePage
    ? (isScrolled ? 'text-black hover:text-black' : 'text-white hover:text-white')
    : 'text-black hover:text-black';

  const logoTextClasses = isScrolled ? 'text-forest-900' : 'text-white';
  
  // Phone number and icon color logic
  let phoneTextClasses = '';
  let phoneIconClass = '';
  if (isHomePage) {
    if (isScrolled) {
      phoneTextClasses = 'text-forest-700 hover:text-forest-700';
      phoneIconClass = 'text-forest-700';
    } else {
      phoneTextClasses = 'text-white hover:text-white';
      phoneIconClass = 'text-white';
    }
  } else {
    phoneTextClasses = 'text-forest-700 hover:text-forest-700';
    phoneIconClass = 'text-forest-700';
  }

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
              <Phone size={16} className={phoneIconClass} />
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
          <div className="fixed inset-0 z-[9999] bg-white flex flex-col min-h-screen w-screen lg:hidden">
            {/* Top Bar with Logo and Close */}
            <div className="w-full flex items-center justify-between p-4 border-b border-gray-200">
              <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
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
            <nav className="flex flex-col items-center justify-center gap-2 flex-1 w-full py-6">
              <a
                href="/#top"
                onClick={(e) => { handleScrollClick(e, 'top'); setIsMenuOpen(false); }}
                className="text-xl font-semibold text-black w-11/12 text-center py-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Home
              </a>
              <a
                href="/#about-us"
                onClick={(e) => { handleScrollClick(e, 'about-us'); setIsMenuOpen(false); }}
                className="text-xl font-semibold text-black w-11/12 text-center py-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                About Us
              </a>
              {/* Services Dropdown */}
              <button
                onClick={() => setIsMobileServicesOpen((open) => !open)}
                className="flex items-center justify-between w-11/12 text-xl font-semibold text-black py-4 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none"
                aria-expanded={isMobileServicesOpen}
              >
                <span>Services</span>
                <ChevronDown size={24} className={`ml-2 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileServicesOpen && (
                <div className="flex flex-col w-10/12 mx-auto mb-2">
                  <Link
                    to="/kitchens"
                    onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}
                    className="text-base font-medium text-black w-full text-left py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Kitchen Renovations
                  </Link>
                  <Link
                    to="/bedrooms"
                    onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}
                    className="text-base font-medium text-black w-full text-left py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Bedroom Renovations
                  </Link>
                  <Link
                    to="/bathrooms"
                    onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}
                    className="text-base font-medium text-black w-full text-left py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Bathroom Renovations
                  </Link>
                  <Link
                    to="/commercial"
                    onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}
                    className="text-base font-medium text-black w-full text-left py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Commercial Renovations
                  </Link>
                </div>
              )}
              <a
                href="/#contact-section"
                onClick={(e) => { handleScrollClick(e, 'contact-section'); setIsMenuOpen(false); }}
                className="text-xl font-semibold text-black w-11/12 text-center py-4 rounded-lg hover:bg-gray-100 transition-colors"
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
                className="w-full bg-forest-700 text-white text-lg font-semibold py-4 rounded-lg text-center border border-forest-700 hover:bg-forest-800 hover:text-white transition-colors flex items-center justify-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={20} className="text-white" />
                <span>Call Now: +27 79 935 2223</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;