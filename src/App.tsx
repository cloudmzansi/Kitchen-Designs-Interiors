import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Kitchens from './pages/Kitchens';
import Bedrooms from './pages/Bedrooms';
import Bathrooms from './pages/Bathrooms';
import Commercial from './pages/Commercial';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ScrollToTop from './hooks/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div id="top" className="bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kitchens" element={<Kitchens />} />
            <Route path="/bedrooms" element={<Bedrooms />} />
            <Route path="/bathrooms" element={<Bathrooms />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;