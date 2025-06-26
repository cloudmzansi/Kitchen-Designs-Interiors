import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Phone } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useScrollTo } from '../hooks/useScrollTo';

const Bedrooms = () => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { handleScrollClick } = useScrollTo();

  const categories = [
    { id: 'all', name: 'All Bedrooms' },
    { id: 'master', name: 'Master Bedrooms' },
    { id: 'kids', name: "Children's Rooms" },
    { id: 'guest', name: 'Guest Rooms' }
  ];

  const bedroomGallery = [
    {
      id: 1,
      category: "master",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      id: 2,
      category: "kids",
      image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      id: 3,
      category: "guest",
      image: "https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      id: 4,
      category: "master",
      image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      id: 5,
      category: "kids",
      image: "https://images.pexels.com/photos/1571465/pexels-photo-1571465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      id: 6,
      category: "guest",
      image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      id: 7,
      category: "master",
      image: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      id: 8,
      category: "kids",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      id: 9,
      category: "guest",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    }
  ];

  const filteredGallery = selectedCategory === 'all' 
    ? bedroomGallery 
    : bedroomGallery.filter(bedroom => bedroom.category === selectedCategory);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const services = [
    "Custom Wardrobe Design & Installation",
    "Built-in Storage Solutions",
    "Bedroom Furniture Design",
    "Walk-in Closet Systems",
    "Headboard & Feature Wall Design",
    "Lighting Design & Installation",
    "Flooring & Carpeting",
    "Window Treatments",
    "En-suite Integration",
    "Smart Home Integration"
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
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
            alt="Bedroom Design"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Bedroom Renovations
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Create your perfect sanctuary with custom bedroom designs that combine comfort, style, and functionality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={(e) => handleScrollClick(e, 'contact-section')}
              className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Get a Free Quote</span>
              <ArrowRight size={20} />
            </button>
            <a 
              href="tel:+27799352223"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold text-lg inline-flex items-center justify-center space-x-2"
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
                Complete Bedroom Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Transform your bedroom into a personal retreat with our comprehensive design and installation services. From custom wardrobes to complete room makeovers, we create spaces that reflect your style and meet your needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-amber-600 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Bedroom Design Process"
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
              Our Bedroom Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover our collection of beautiful bedroom transformations designed for comfort and style.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-amber-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map((bedroom, index) => (
              <div key={bedroom.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer" onClick={() => handleImageClick(index)}>
                <div className="relative overflow-hidden">
                  <img
                    src={bedroom.image}
                    alt={`Bedroom Project ${bedroom.id}`}
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Ready to Create Your Dream Bedroom?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today for a free consultation and let's start designing the bedroom you've always wanted.
            </p>
            <button 
              onClick={(e) => handleScrollClick(e, 'contact-section')}
              className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold text-lg inline-flex items-center space-x-2 mt-6"
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

export default Bedrooms;