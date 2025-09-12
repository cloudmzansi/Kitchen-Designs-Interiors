import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-forest-600 to-forest-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white font-bold text-xl">KD</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Kitchen Designs & Interiors</h3>
              </div>
            </div>
            <p className="text-white text-base leading-relaxed">
              Specialising in bespoke kitchen, bedroom, bathroom, and commercial interior solutions. 
              We bring your vision to life with precision craftsmanship and innovative design.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/kitchens" className="text-white hover:text-forest-200 transition-all duration-300 hover:translate-x-2 inline-block text-base">Kitchen Renovations</Link></li>
              <li><Link to="/bedrooms" className="text-white hover:text-forest-200 transition-all duration-300 hover:translate-x-2 inline-block text-base">Bedroom Renovations</Link></li>
              <li><Link to="/bathrooms" className="text-white hover:text-forest-200 transition-all duration-300 hover:translate-x-2 inline-block text-base">Bathroom Renovations</Link></li>
              <li><Link to="/commercial" className="text-white hover:text-forest-200 transition-all duration-300 hover:translate-x-2 inline-block text-base">Commercial Renovations</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start group">
                <svg className="w-5 h-5 text-forest-200 mt-0.5 mr-3 flex-shrink-0 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-white text-base group-hover:text-forest-200 transition-colors duration-300">Cape Town & Surrounding Areas</p>
                </div>
              </div>
              <div className="flex items-center group">
                <svg className="w-5 h-5 text-forest-200 mr-3 flex-shrink-0 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+27799352223" className="text-white hover:text-forest-200 transition-all duration-300 text-base group-hover:translate-x-1 inline-block">+27 79 935 2223</a>
              </div>
              <div className="flex items-center group">
                <svg className="w-5 h-5 text-forest-200 mr-3 flex-shrink-0 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@kdinteriors.co.za" className="text-white hover:text-forest-200 transition-all duration-300 text-base group-hover:translate-x-1 inline-block">info@kdinteriors.co.za</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-forest-700 mt-16 pt-8">
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center space-y-4">
            <div className="flex space-x-8 text-sm">
              <Link to="/privacy-policy" className="text-white hover:text-forest-200 transition-all duration-300 hover:translate-x-1 inline-block">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-white hover:text-forest-200 transition-all duration-300 hover:translate-x-1 inline-block">Terms of Service</Link>
            </div>
            <p className="text-white text-sm text-center">
              Copyright © 2025 Kitchen Designs & Interiors. All Rights Reserved.
              <br />
              Made with <Heart size={12} className="inline text-red-400" /> by{' '}
              <a 
                href="https://cloudmzansi.co.za" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-forest-200 hover:text-white transition-colors duration-300"
              >
                Cloud Mzansi
              </a>
            </p>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-row justify-between items-center">
            <p className="text-white text-sm">
              Copyright © 2025 Kitchen Designs & Interiors. All Rights Reserved.
              <br />
              Made with <Heart size={12} className="inline text-red-400" /> by{' '}
              <a 
                href="https://cloudmzansi.co.za" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-forest-200 hover:text-white transition-colors duration-300"
              >
                Cloud Mzansi
              </a>
            </p>
            <div className="flex space-x-8 text-sm">
              <Link to="/privacy-policy" className="text-white hover:text-forest-200 transition-all duration-300 hover:translate-x-1 inline-block">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-white hover:text-forest-200 transition-all duration-300 hover:translate-x-1 inline-block">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;