import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Phone } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useScrollTo } from '../hooks/useScrollTo';
import commercialHero from '../assets/commercial/commercial-1.jpeg';
import commercial2 from '../assets/commercial/commercial-2.jpeg';
import commercial3 from '../assets/commercial/commercial-3.jpeg';
import commercial4 from '../assets/commercial/commercial-4.jpeg';
import commercial5 from '../assets/commercial/commercial-5.jpeg';
import commercial6 from '../assets/commercial/commercial-6.jpeg';
import commercial7 from '../assets/commercial/commercial-7.jpeg';
import commercial8 from '../assets/commercial/commercial-8.jpeg';
import commercial9 from '../assets/commercial/commercial-9.jpeg';
import commercial10 from '../assets/commercial/commercial-10.jpeg';

const Commercial = () => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { handleScrollClick } = useScrollTo();

  const categories: { id: string; name: string }[] = [];

  const commercialGallery = [
    { id: 1, category: 'gallery', image: commercial2 },
    { id: 2, category: 'gallery', image: commercial3 },
    { id: 3, category: 'gallery', image: commercial4 },
    { id: 4, category: 'gallery', image: commercial5 },
    { id: 5, category: 'gallery', image: commercial6 },
    { id: 6, category: 'gallery', image: commercial7 },
    { id: 7, category: 'gallery', image: commercial8 },
    { id: 8, category: 'gallery', image: commercial9 },
    { id: 9, category: 'gallery', image: commercial10 },
  ];

  const filteredGallery = selectedCategory === 'all'
    ? commercialGallery
    : commercialGallery.filter(item => item.category === selectedCategory);

  const services = [
    "Commercial Space Planning",
    "Office Design & Fit-out",
    "Retail Store Design",
    "Restaurant & Cafe Interiors",
    "Hospitality & Hotel Design",
    "Custom Joinery & Cabinetry",
    "Project Management",
    "Lighting & Electrical Layouts",
    "Flooring & Finishes",
    "Brand Integration"
  ];

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  return (
    <div className="pt-20">
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={filteredGallery.map(item => ({ src: item.image }))}
        index={selectedIndex}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-forest-900 to-forest-700 text-white">
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Commercial Renovations
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-forest-100">
            Expert commercial interior design and fit-out solutions for businesses of all sizes, creating functional and inspiring workspaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={(e) => handleScrollClick(e, 'contact-section')}
              className="bg-gradient-to-r from-forest-700 to-forest-600 text-white px-8 py-4 rounded-lg hover:from-forest-800 hover:to-forest-900 transition-colors font-semibold text-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Get a Free Quote</span>
              <ArrowRight size={20} />
            </button>
            <a
              href="tel:+27799352223"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-forest-900 transition-colors font-semibold text-lg inline-flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call: +27 79 935 2223</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Full-Service Commercial Interiors
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We provide end-to-end solutions for commercial spaces, from initial concept to final installation. Our goal is to create environments that enhance your brand, improve productivity, and leave a lasting impression.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-forest-600 flex-shrink-0" />
                    <span className="text-forest-900">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={commercialHero}
                alt="Commercial Design Process"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Commercial Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore a selection of our successfully completed commercial projects.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-forest-700 text-white'
                      : 'bg-white text-forest-700 hover:bg-forest-100 border border-forest-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredGallery.map((item, index) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer" onClick={() => handleImageClick(index)}>
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Commercial Project ${item.id}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Elevate Your Business Space?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can bring your vision to life. Contact us for a free, no-obligation consultation.
            </p>
            <button
              onClick={(e) => handleScrollClick(e, 'contact-section')}
              className="bg-gradient-to-r from-forest-700 to-forest-600 text-white px-8 py-4 rounded-lg hover:from-forest-800 hover:to-forest-900 transition-all duration-300 font-semibold text-lg inline-flex items-center space-x-2"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commercial;
