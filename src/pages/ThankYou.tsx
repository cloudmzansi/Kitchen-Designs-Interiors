import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Phone, Mail } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-100 via-forest-50 to-forest-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-forest-500 to-forest-600 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle size={48} className="text-white" />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Thank You!
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-2">
            Your submission has been received successfully.
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            We'll contact you within 2 hours. No obligations.
          </p>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Need Immediate Assistance?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27799352223"
                className="flex items-center justify-center gap-2 bg-forest-600 hover:bg-forest-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold"
              >
                <Phone size={20} />
                Call: +27 79 935 2223
              </a>
              <a
                href="mailto:info@kdinteriors.co.za"
                className="flex items-center justify-center gap-2 border-2 border-forest-600 text-forest-600 hover:bg-forest-50 px-6 py-3 rounded-lg transition-colors duration-300 font-semibold"
              >
                <Mail size={20} />
                Email Us
              </a>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/landing"
              className="inline-flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg transition-colors duration-300 font-semibold"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <Link
              to="/kitchens"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;

