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
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">KD</span>
              </div>
              <div>
                <span className="text-2xl font-bold">KD Interiors</span>
                <div className="text-xs text-amber-400 font-medium">Custom Design Solutions</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              With over 30 years of experience, we provide exceptional design and craftsmanship across Cape Town & Surrounding Areas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/kitchens" className="text-gray-400 hover:text-amber-400 transition-colors">Kitchens</Link></li>
              <li><Link to="/bedrooms" className="text-gray-400 hover:text-amber-400 transition-colors">Bedrooms</Link></li>
              <li><Link to="/bathrooms" className="text-gray-400 hover:text-amber-400 transition-colors">Bathrooms</Link></li>
              <li><Link to="/commercial" className="text-gray-400 hover:text-amber-400 transition-colors">Commercial</Link></li>
              <li><Link to="#about-us" className="text-gray-400 hover:text-amber-400 transition-colors">About</Link></li>
              <li><Link to="#contact-section" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/kitchens" className="text-gray-400 hover:text-amber-400 transition-colors">Kitchens</Link></li>
              <li><Link to="/bedrooms" className="text-gray-400 hover:text-amber-400 transition-colors">Bedrooms</Link></li>
              <li><Link to="/bathrooms" className="text-gray-400 hover:text-amber-400 transition-colors">Bathrooms</Link></li>
              <li><Link to="/commercial" className="text-gray-400 hover:text-amber-400 transition-colors">Commercial</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-amber-400" />
                <span className="text-gray-400">+27 79 935 2223</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-amber-400" />
                <a href="mailto:info@kdinteriors.co.za" className="text-gray-400 hover:text-amber-400 transition-colors">info@kdinteriors.co.za</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-amber-400 mt-1" />
                <span className="text-gray-400">Cape Town & Surrounding Areas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} KD Interiors. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;