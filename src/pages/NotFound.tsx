import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
    <h1 className="text-6xl font-bold text-forest-700 mb-4">404</h1>
    <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-800">Page Not Found</h2>
    <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
      Sorry, the page you are looking for does not exist or has been moved.<br />
      Please check the URL or return to the home page.
    </p>
    <Link
      to="/"
      className="bg-forest-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-forest-800 transition-colors"
    >
      Back to Home
    </Link>
  </div>
);

export default NotFound; 