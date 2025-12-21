import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './hooks/ScrollToTop';

// Lazy load page components for code splitting
const Home = React.lazy(() => import('./pages/Home'));
const Landing = React.lazy(() => import('./pages/Landing'));
const LandingBedroom = React.lazy(() => import('./pages/LandingBedroom'));
const LandingBathroom = React.lazy(() => import('./pages/LandingBathroom'));
const LandingCommercial = React.lazy(() => import('./pages/LandingCommercial'));
const ThankYou = React.lazy(() => import('./pages/ThankYou'));
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

// WhatsApp Button Component
const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '27799352223';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-20 sm:bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <svg 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="w-6 h-6"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>
    </button>
  );
};

function AppContent() {
  const location = useLocation();
  // Hide header/footer on all landing pages
  const isLandingPage = location.pathname.startsWith('/landing');

  return (
    <div id="top" className="bg-white">
      {!isLandingPage && <Header />}
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/landing/bedroom" element={<LandingBedroom />} />
            <Route path="/landing/bathroom" element={<LandingBathroom />} />
            <Route path="/landing/commercial" element={<LandingCommercial />} />
            <Route path="/thank-you" element={<ThankYou />} />
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
      {!isLandingPage && <Footer />}
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;