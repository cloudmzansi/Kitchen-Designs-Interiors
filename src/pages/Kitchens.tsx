import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Phone } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useScrollTo } from '../hooks/useScrollTo';
import kitchenHero from '../assets/kitchens/kitchens-1.jpg';
import kitchen2 from '../assets/kitchens/kitchens-2.jpg';
import kitchen3 from '../assets/kitchens/kitchens-3.jpg';
import kitchen4 from '../assets/kitchens/kitchens-4.jpg';
import kitchen5 from '../assets/kitchens/kitchens-5.jpg';
import kitchen6 from '../assets/kitchens/kitchens-6.jpg';
import kitchen7 from '../assets/kitchens/kitchens-7.jpg';
import kitchen8 from '../assets/kitchens/kitchens-8.jpg';
import kitchen9 from '../assets/kitchens/kitchens-9.jpg';
import kitchen10 from '../assets/kitchens/kitchens-10.jpg';

const Kitchens = () => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { handleScrollClick } = useScrollTo();

  const categories: { id: string; name: string }[] = [];

  const kitchenGallery = [
    { id: 1, category: 'gallery', image: kitchen2 },
    { id: 2, category: 'gallery', image: kitchen3 },
    { id: 3, category: 'gallery', image: kitchen4 },
    { id: 4, category: 'gallery', image: kitchen5 },
    { id: 5, category: 'gallery', image: kitchen6 },
    { id: 6, category: 'gallery', image: kitchen7 },
    { id: 7, category: 'gallery', image: kitchen8 },
    { id: 8, category: 'gallery', image: kitchen9 },
    { id: 9, category: 'gallery', image: kitchen10 },
  ];

  const filteredGallery = selectedCategory === 'all' 
    ? kitchenGallery 
    : kitchenGallery.filter(kitchen => kitchen.category === selectedCategory);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const services = [
    "Complete Kitchen Renovations",
    "Custom Cabinet Design & Installation",
    "Countertop Installation (Quartz, Granite, Marble)",
    "Kitchen Island Design",
    "Appliance Integration",
    "Lighting Design & Installation",
    "Plumbing & Electrical Work",
    "Backsplash Installation",
    "Storage Solutions",
    "Project Management"
  ];

  const testimonials = [
    {
      name: "John & Mary Smith",
      location: "Stellenbosch, Western Cape",
      text: "KD Interiors completely transformed our kitchen. It's now the heart of our home. We couldn't be happier!",
      rating: 5
    },
    {
      name: "Thabo Cele",
      location: "Camps Bay, Cape Town",
      text: "The team was professional, and the craftsmanship is second to none. Our new kitchen is both beautiful and functional.",
      rating: 5
    }
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
            Kitchen Renovations
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-forest-100">
            Discover the heart of your home with our bespoke kitchen designs, crafted for style and functionality.
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
                Complete Kitchen Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From complete kitchen makeovers to custom cabinetry and countertops, we provide a full range of services to bring your vision to life.
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
                src={kitchenHero}
                alt="Kitchen Design Process"
                className="rounded-2xl shadow-2xl"
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
              Our Kitchen Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our collection of stunning kitchen transformations across Cape Town.
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
            {filteredGallery.map((kitchen, index) => (
              <div key={kitchen.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer" onClick={() => handleImageClick(index)}>
                <div className="relative overflow-hidden">
                  <img
                    src={eval(`kitchen${kitchen.id + 1}`)}
                    alt={`Kitchen Project ${kitchen.id}`}
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
              Ready for Your Dream Kitchen?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create a kitchen that perfectly suits your lifestyle and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={(e) => handleScrollClick(e, 'contact-section')}
                className="bg-gradient-to-r from-forest-700 to-forest-600 text-white px-8 py-4 rounded-lg hover:from-forest-800 hover:to-forest-900 transition-colors font-semibold text-lg inline-flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kitchens;