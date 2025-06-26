import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Phone } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useScrollTo } from '../hooks/useScrollTo';

const Commercial = () => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { handleScrollClick } = useScrollTo();

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'office', name: 'Office Spaces' },
    { id: 'retail', name: 'Retail Stores' },
    { id: 'hospitality', name: 'Hospitality' }
  ];

  const commercialGallery = [
    {
      id: 1,
      category: "office",
      image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      id: 2,
      category: "retail",
      image: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      id: 3,
      category: "hospitality",
      image: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      id: 4,
      category: "office",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      id: 5,
      category: "hospitality",
      image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      id: 6,
      category: "retail",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      id: 7,
      category: "office",
      image: "https://images.pexels.com/photos/1181421/pexels-photo-1181421.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      id: 8,
      category: "hospitality",
      image: "https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      id: 9,
      category: "retail",
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    }
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
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
            alt="Commercial Renovations"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Commercial Renovations
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Expert commercial interior design and fit-out solutions for businesses of all sizes, creating functional and inspiring workspaces.
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
                Full-Service Commercial Interiors
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We provide end-to-end solutions for commercial spaces, from initial concept to final installation. Our goal is to create environments that enhance your brand, improve productivity, and leave a lasting impression.
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
                src="https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Commercial Design Process"
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
              className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold text-lg inline-flex items-center space-x-2"
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
