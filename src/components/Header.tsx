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
            <a href="tel:+27799352223" className="flex items-center space-x-2 font-semibold transition-colors duration-300 text-white">
              <Phone size={16} className="text-white" />
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
          <div className="lg:hidden bg-white border-t border-gray-100">
            <nav className="py-4 space-y-1">
              <a 
                href="/#top" 
                onClick={(e) => { handleScrollClick(e, 'top'); setIsMenuOpen(false); }}
                className={`block px-4 py-3 font-medium transition-colors text-forest-700 hover:bg-forest-50`}
              >
                Home
              </a>
              <a 
                href="/#about-us" 
                onClick={(e) => { handleScrollClick(e, 'about-us'); setIsMenuOpen(false); }}
                className={`block px-4 py-3 font-medium transition-colors text-forest-700 hover:bg-forest-50`}
              >
                About Us
              </a>
              
              {/* Mobile Services */}
              <div>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 font-medium text-forest-700 hover:bg-forest-50"
                >
                  <span>Services</span>
                  <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="bg-forest-50">
                    <Link 
                      to="/kitchens" 
                      className={`block px-8 py-2 text-sm font-medium transition-colors ${
                        isActive('/kitchens') ? 'text-forest-600' : 'text-forest-600 hover:text-forest-600'
                      }`}
                    >
                      Kitchen Renovations
                    </Link>
                    <Link 
                      to="/bedrooms" 
                      className={`block px-8 py-2 text-sm font-medium transition-colors ${
                        isActive('/bedrooms') ? 'text-forest-600' : 'text-forest-600 hover:text-forest-600'
                      }`}
                    >
                      Bedroom Renovations
                    </Link>
                    <Link 
                      to="/bathrooms" 
                      className={`block px-8 py-2 text-sm font-medium transition-colors ${
                        isActive('/bathrooms') ? 'text-forest-600' : 'text-forest-600 hover:text-forest-600'
                      }`}
                    >
                      Bathroom Renovations
                    </Link>
                    <Link 
                      to="/commercial" 
                      className={`block px-8 py-2 text-sm font-medium transition-colors ${
                        isActive('/commercial') ? 'text-forest-600' : 'text-forest-600 hover:text-forest-600'
                      }`}
                    >
                      Commercial Renovations
                    </Link>
                  </div>
                )}
              </div>

              <a 
                href="/#contact-section" 
                onClick={(e) => { handleScrollClick(e, 'contact-section'); setIsMenuOpen(false); }}
                className={`block px-4 py-3 font-medium transition-colors text-forest-700 hover:bg-forest-50`}
              >
                Contact Us
              </a>
              
              <div className="px-4 py-3">
                <a 
                  href="/#contact-section"
                  onClick={(e) => { handleScrollClick(e, 'contact-section'); setIsMenuOpen(false); }}
                  className={ctaButtonClasses}
                >
                  Get Free Quote
                </a>
              </div>
              <div className="px-4 py-3 text-center">
                <a href="tel:+27799352223" className="font-medium text-forest-600 hover:text-forest-700">
                  Call Now: +27 79 935 2223
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;