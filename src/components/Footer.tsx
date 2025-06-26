import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-forest-700 to-forest-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl tracking-tighter" style={{letterSpacing: '-0.15em'}}>KD</span>
              </div>
              <div>
                <span className="text-lg font-bold">Kitchen Designs & Interiors</span>
              </div>
            </div>
            <p className="text-white mb-6">
              With over 30 years of experience, we provide exceptional design and craftsmanship across Cape Town & Surrounding Areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white hover:text-gray-200 transition-colors">Home</Link></li>
              <li><Link to="/kitchens" className="text-white hover:text-gray-200 transition-colors">Kitchens</Link></li>
              <li><Link to="/bedrooms" className="text-white hover:text-gray-200 transition-colors">Bedrooms</Link></li>
              <li><Link to="/bathrooms" className="text-white hover:text-gray-200 transition-colors">Bathrooms</Link></li>
              <li><Link to="/commercial" className="text-white hover:text-gray-200 transition-colors">Commercial</Link></li>
              <li><Link to="#about-us" className="text-white hover:text-gray-200 transition-colors">About</Link></li>
              <li><Link to="#contact-section" className="text-white hover:text-gray-200 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/kitchens" className="text-white hover:text-gray-200 transition-colors">Kitchens</Link></li>
              <li><Link to="/bedrooms" className="text-white hover:text-gray-200 transition-colors">Bedrooms</Link></li>
              <li><Link to="/bathrooms" className="text-white hover:text-gray-200 transition-colors">Bathrooms</Link></li>
              <li><Link to="/commercial" className="text-white hover:text-gray-200 transition-colors">Commercial</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-white" />
                <span className="text-white">+27 79 935 2223</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-white" />
                <a href="mailto:info@kdinteriors.co.za" className="text-white hover:text-gray-200 transition-colors">info@kdinteriors.co.za</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-white mt-1" />
                <span className="text-white">Cape Town & Surrounding Areas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-row space-x-6 order-1 md:order-2 mb-2 md:mb-0">
              <Link to="/privacy-policy" className="text-white hover:text-gray-200 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-white hover:text-gray-200 text-sm transition-colors">Terms of Service</Link>
            </div>
            <p className="text-white text-sm text-center w-full order-2 md:order-1 md:w-auto">
              Copyright © 2025 Kitchen Designs & Interiors. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;