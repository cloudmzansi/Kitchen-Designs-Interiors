import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './hooks/ScrollToTop';

// Lazy load page components for code splitting
const Home = React.lazy(() => import('./pages/Home'));
const Kitchens = React.lazy(() => import('./pages/Kitchens'));
const Bedrooms = React.lazy(() => import('./pages/Bedrooms'));
const Bathrooms = React.lazy(() => import('./pages/Bathrooms'));
const Commercial = React.lazy(() => import('./pages/Commercial'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-white">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-forest-200 rounded-full animate-spin"></div>
      <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-forest-600 rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-8 h-8 bg-gradient-to-br from-forest-700 to-forest-600 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-sm">KD</span>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <ScrollToTop />
      <div id="top" className="bg-white">
        <Header />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/kitchens" element={<Kitchens />} />
              <Route path="/bedrooms" element={<Bedrooms />} />
              <Route path="/bathrooms" element={<Bathrooms />} />
              <Route path="/commercial" element={<Commercial />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;