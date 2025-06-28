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
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-forest-600"></div>
  </div>
);

function App() {
  return (
    <Router>
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