import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Phone } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useScrollTo } from '../hooks/useScrollTo';
import bathroomHero from '../assets/bathrooms/bathrooms-1.jpeg';
import bathroom2 from '../assets/bathrooms/bathrooms-2.jpeg';
import bathroom3 from '../assets/bathrooms/bathrooms-3.jpeg';
import bathroom4 from '../assets/bathrooms/bathrooms-4.jpeg';
import bathroom5 from '../assets/bathrooms/bathrooms-5.jpeg';
import bathroom6 from '../assets/bathrooms/bathrooms-6.jpeg';
import bathroom7 from '../assets/bathrooms/bathrooms-7.jpeg';
import bathroom8 from '../assets/bathrooms/bathrooms-8.jpeg';
import bathroom9 from '../assets/bathrooms/bathrooms-9.jpeg';
import bathroom10 from '../assets/bathrooms/bathrooms-10.jpeg';

const Bathrooms = () => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { handleScrollClick } = useScrollTo();

  const categories: { id: string; name: string }[] = [];

  const bathroomGallery = [
    { id: 1, category: 'gallery', image: bathroom2 },
    { id: 2, category: 'gallery', image: bathroom3 },
    { id: 3, category: 'gallery', image: bathroom4 },
    { id: 4, category: 'gallery', image: bathroom5 },
    { id: 5, category: 'gallery', image: bathroom6 },
    { id: 6, category: 'gallery', image: bathroom7 },
    { id: 7, category: 'gallery', image: bathroom8 },
    { id: 8, category: 'gallery', image: bathroom9 },
    { id: 9, category: 'gallery', image: bathroom10 },
  ];

  const filteredGallery = selectedCategory === 'all'
    ? bathroomGallery
    : bathroomGallery.filter(bathroom => bathroom.category === selectedCategory);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const services = [
    "Complete Bathroom Renovations",
    "Custom Vanity Design",
    "Shower & Bathtub Installation",
    "Tiling & Flooring",
    "Lighting Design",
    "Plumbing & Fixtures",
    "Heated Flooring Systems",
    "Waterproofing",
    "Ventilation Solutions",
    "Accessible Bathroom Design"
  ];

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
            Bathroom Renovations
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-forest-100">
            Design luxurious bathrooms that combine style, functionality, and lasting quality.
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
                Transform Your Bathroom
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From spa-like retreats to functional family bathrooms, we offer complete renovation services. We handle everything from design to installation, ensuring a beautiful and practical result.
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
                src={bathroomHero}
                alt="Bathroom Design Process"
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
              Our Bathroom Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our gallery of stunning bathroom transformations, from modern to traditional.
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
          <div className="grid grid-cols-2 gap-2 md:gap-8">
            {filteredGallery.map((bathroom, index) => (
              <div key={bathroom.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer" onClick={() => handleImageClick(index)}>
                <div className="relative overflow-hidden">
                  <img
                    src={bathroom.image}
                    alt={`Bathroom Project ${bathroom.id}`}
                    className="w-full aspect-[1/1] object-cover group-hover:scale-105 transition-transform duration-300"
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
              Ready for Your Dream Bathroom?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's create a beautiful and functional bathroom that you'll love. Contact us today for a free consultation.
            </p>
            <button 
              onClick={(e) => handleScrollClick(e, 'contact-section')}
              className="bg-gradient-to-r from-forest-700 to-forest-600 text-white px-8 py-4 rounded-lg hover:from-forest-800 hover:to-forest-900 transition-all duration-300 font-semibold text-lg inline-flex items-center space-x-2 mt-6"
            >
              <span>Get Free Consultation</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bathrooms;