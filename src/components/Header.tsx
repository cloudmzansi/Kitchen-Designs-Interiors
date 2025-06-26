import React, { useState, useEffect, useRef } from 'react';
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
  const menuRef = useRef<HTMLDivElement>(null);

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
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
            {isMenuOpen ? <X size={24} className={isScrolled ? 'text-forest-800' : 'text-white'} /> : <Menu size={24} className={isScrolled ? 'text-forest-800' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
            <div ref={menuRef} className="absolute top-0 right-0 w-80 h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-forest-900">Menu</h3>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={24} className="text-forest-800" />
                </button>
              </div>
              
              <nav className="py-6">
                <div className="space-y-2">
                  <a 
                    href="/#top" 
                    onClick={(e) => { handleScrollClick(e, 'top'); setIsMenuOpen(false); }}
                    className="flex items-center px-6 py-4 text-lg font-medium text-forest-700 hover:bg-forest-50 transition-colors"
                  >
                    Home
                  </a>
                  <a 
                    href="/#about-us" 
                    onClick={(e) => { handleScrollClick(e, 'about-us'); setIsMenuOpen(false); }}
                    className="flex items-center px-6 py-4 text-lg font-medium text-forest-700 hover:bg-forest-50 transition-colors"
                  >
                    About Us
                  </a>
                  
                  {/* Mobile Services */}
                  <div>
                    <button 
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between w-full px-6 py-4 text-lg font-medium text-forest-700 hover:bg-forest-50 transition-colors"
                    >
                      <span>Services</span>
                      <ChevronDown size={20} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isServicesOpen && (
                      <div className="bg-forest-50 border-l-4 border-forest-200">
                        <Link 
                          to="/kitchens" 
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-center px-8 py-3 text-base font-medium transition-colors ${
                            isActive('/kitchens') ? 'text-forest-600 bg-forest-100' : 'text-forest-600 hover:text-forest-700 hover:bg-forest-100'
                          }`}
                        >
                          Kitchen Renovations
                        </Link>
                        <Link 
                          to="/bedrooms" 
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-center px-8 py-3 text-base font-medium transition-colors ${
                            isActive('/bedrooms') ? 'text-forest-600 bg-forest-100' : 'text-forest-600 hover:text-forest-700 hover:bg-forest-100'
                          }`}
                        >
                          Bedroom Renovations
                        </Link>
                        <Link 
                          to="/bathrooms" 
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-center px-8 py-3 text-base font-medium transition-colors ${
                            isActive('/bathrooms') ? 'text-forest-600 bg-forest-100' : 'text-forest-600 hover:text-forest-700 hover:bg-forest-100'
                          }`}
                        >
                          Bathroom Renovations
                        </Link>
                        <Link 
                          to="/commercial" 
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-center px-8 py-3 text-base font-medium transition-colors ${
                            isActive('/commercial') ? 'text-forest-600 bg-forest-100' : 'text-forest-600 hover:text-forest-700 hover:bg-forest-100'
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
                    className="flex items-center px-6 py-4 text-lg font-medium text-forest-700 hover:bg-forest-50 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
                
                <div className="mt-8 px-6 space-y-4">
                  <a 
                    href="/#contact-section"
                    onClick={(e) => { handleScrollClick(e, 'contact-section'); setIsMenuOpen(false); }}
                    className="block w-full bg-forest-700 text-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-forest-800 transition-colors"
                  >
                    Get Free Quote
                  </a>
                  <a 
                    href="tel:+27799352223" 
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center space-x-2 font-medium text-forest-600 hover:text-forest-700"
                  >
                    <Phone size={20} />
                    <span>+27 79 935 2223</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;