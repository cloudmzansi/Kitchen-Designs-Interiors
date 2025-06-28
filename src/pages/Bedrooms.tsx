import React from 'react';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';
import { usePageMeta } from '../hooks/usePageMeta';
import ImageSlider from '../components/ImageSlider';
import bedroomHero from '../assets/bedrooms/bedroom-hero.jpg';

// Import all bedroom slider images
// Slider 1
import bedroomMasterSuite from '../assets/bedrooms/Slider 1/bedroom-master-suite.jpg';
import bedroomMasterSuiteAvif from '../assets/bedrooms/Slider 1/bedroom-master-suite.avif';
import bedroomCustomWardrobe from '../assets/bedrooms/Slider 1/bedroom-custom-wardrobe.jpg';
import bedroomCustomWardrobeAvif from '../assets/bedrooms/Slider 1/bedroom-custom-wardrobe.avif';
import bedroomBuiltInStorage from '../assets/bedrooms/Slider 1/bedroom-built-in-storage.jpg';
import bedroomBuiltInStorageAvif from '../assets/bedrooms/Slider 1/bedroom-built-in-storage.avif';
import bedroomWalkInCloset from '../assets/bedrooms/Slider 1/bedroom-walk-in-closet.jpg';
import bedroomWalkInClosetAvif from '../assets/bedrooms/Slider 1/bedroom-walk-in-closet.avif';
import bedroomHeadboardDesign from '../assets/bedrooms/Slider 1/bedroom-headboard-design.jpg';
import bedroomHeadboardDesignAvif from '../assets/bedrooms/Slider 1/bedroom-headboard-design.avif';
import bedroomFeatureWall from '../assets/bedrooms/Slider 1/bedroom-feature-wall.jpg';
import bedroomFeatureWallAvif from '../assets/bedrooms/Slider 1/bedroom-feature-wall.avif';
import bedroomLightingDesign from '../assets/bedrooms/Slider 1/bedroom-lighting-design.jpg';
import bedroomLightingDesignAvif from '../assets/bedrooms/Slider 1/bedroom-lighting-design.avif';
import bedroomEnSuite from '../assets/bedrooms/Slider 1/bedroom-en-suite.jpg';
import bedroomEnSuiteAvif from '../assets/bedrooms/Slider 1/bedroom-en-suite.avif';
import bedroomStorageSolutions from '../assets/bedrooms/Slider 1/bedroom-storage-solutions.jpg';
import bedroomStorageSolutionsAvif from '../assets/bedrooms/Slider 1/bedroom-storage-solutions.avif';

// Slider 2
import bedroomLuxuryDesign from '../assets/bedrooms/Slider 2/bedroom-luxury-design.jpg';
import bedroomLuxuryDesignAvif from '../assets/bedrooms/Slider 2/bedroom-luxury-design.avif';
import bedroomCustomFurniture from '../assets/bedrooms/Slider 2/bedroom-custom-furniture.jpg';
import bedroomCustomFurnitureAvif from '../assets/bedrooms/Slider 2/bedroom-custom-furniture.avif';
import bedroomStorageSystem from '../assets/bedrooms/Slider 2/bedroom-storage-system.jpg';
import bedroomStorageSystemAvif from '../assets/bedrooms/Slider 2/bedroom-storage-system.avif';
import bedroomMirrorDoors from '../assets/bedrooms/Slider 2/bedroom-mirror-doors.jpg';
import bedroomMirrorDoorsAvif from '../assets/bedrooms/Slider 2/bedroom-mirror-doors.avif';
import bedroomSlidingDoors from '../assets/bedrooms/Slider 2/bedroom-sliding-doors.jpg';
import bedroomSlidingDoorsAvif from '../assets/bedrooms/Slider 2/bedroom-sliding-doors.avif';
import bedroomBifoldDoors from '../assets/bedrooms/Slider 2/bedroom-bifold-doors.jpg';
import bedroomBifoldDoorsAvif from '../assets/bedrooms/Slider 2/bedroom-bifold-doors.avif';
import bedroomCustomShelving from '../assets/bedrooms/Slider 2/bedroom-custom-shelving.jpg';
import bedroomCustomShelvingAvif from '../assets/bedrooms/Slider 2/bedroom-custom-shelving.avif';
import bedroomDrawerSystem from '../assets/bedrooms/Slider 2/bedroom-drawer-system.jpg';
import bedroomDrawerSystemAvif from '../assets/bedrooms/Slider 2/bedroom-drawer-system.avif';
import bedroomAccessoryStorage from '../assets/bedrooms/Slider 2/bedroom-accessory-storage.jpg';
import bedroomAccessoryStorageAvif from '../assets/bedrooms/Slider 2/bedroom-accessory-storage.avif';

const Bedrooms = () => {
  const { handleScrollClick } = useScrollTo();

  // Page-specific meta tags
  usePageMeta({
    title: "Bedroom Renovations Cape Town - Custom Wardrobes & Bedroom Design | KD Interiors",
    description: "Transform your bedroom with custom wardrobes, built-in storage, and complete bedroom renovations in Cape Town. Create your perfect sanctuary today!",
    keywords: "bedroom renovation Cape Town, custom wardrobes, built-in storage, bedroom design, Cape Town bedroom contractor, walk-in closet",
    ogTitle: "Bedroom Renovations Cape Town - Custom Wardrobes & Design",
    ogDescription: "Expert bedroom renovations in Cape Town. Custom wardrobes, built-in storage, and complete bedroom makeovers. Free consultation available.",
    ogImage: "/src/assets/bedrooms/bedroom-hero.jpg",
    canonical: "https://kdinteriors.co.za/bedrooms"
  });

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

  // Bedroom sliders data
  const bedroomSliders = [
    {
      id: "master-bedrooms",
      images: [
        { avif: bedroomMasterSuiteAvif, jpg: bedroomMasterSuite, alt: "Master bedroom suite design" },
        { avif: bedroomCustomWardrobeAvif, jpg: bedroomCustomWardrobe, alt: "Custom bedroom wardrobe" },
        { avif: bedroomBuiltInStorageAvif, jpg: bedroomBuiltInStorage, alt: "Built-in bedroom storage" },
        { avif: bedroomWalkInClosetAvif, jpg: bedroomWalkInCloset, alt: "Walk-in closet design" },
        { avif: bedroomHeadboardDesignAvif, jpg: bedroomHeadboardDesign, alt: "Custom headboard design" },
        { avif: bedroomFeatureWallAvif, jpg: bedroomFeatureWall, alt: "Bedroom feature wall" },
        { avif: bedroomLightingDesignAvif, jpg: bedroomLightingDesign, alt: "Bedroom lighting design" },
        { avif: bedroomEnSuiteAvif, jpg: bedroomEnSuite, alt: "Bedroom en-suite design" },
        { avif: bedroomStorageSolutionsAvif, jpg: bedroomStorageSolutions, alt: "Bedroom storage solutions" }
      ]
    },
    {
      id: "storage-solutions",
      images: [
        { avif: bedroomLuxuryDesignAvif, jpg: bedroomLuxuryDesign, alt: "Luxury bedroom design" },
        { avif: bedroomCustomFurnitureAvif, jpg: bedroomCustomFurniture, alt: "Custom bedroom furniture" },
        { avif: bedroomStorageSystemAvif, jpg: bedroomStorageSystem, alt: "Bedroom storage system" },
        { avif: bedroomMirrorDoorsAvif, jpg: bedroomMirrorDoors, alt: "Mirror doors for bedroom" },
        { avif: bedroomSlidingDoorsAvif, jpg: bedroomSlidingDoors, alt: "Sliding doors for bedroom" },
        { avif: bedroomBifoldDoorsAvif, jpg: bedroomBifoldDoors, alt: "Bifold doors for bedroom" },
        { avif: bedroomCustomShelvingAvif, jpg: bedroomCustomShelving, alt: "Custom bedroom shelving" },
        { avif: bedroomDrawerSystemAvif, jpg: bedroomDrawerSystem, alt: "Bedroom drawer system" },
        { avif: bedroomAccessoryStorageAvif, jpg: bedroomAccessoryStorage, alt: "Bedroom accessory storage" }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-forest-900 to-forest-700 text-white overflow-hidden">
        {/* Add subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        </div>
        
        {/* Add floating elements for visual interest */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        
        {/* Enhanced content with better spacing */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Bedroom Renovations
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-forest-100 leading-relaxed">
              Create your perfect sanctuary with custom bedroom designs that combine comfort, style, and functionality.
            </p>
            {/* Enhanced CTA buttons with better visual hierarchy */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <button 
                onClick={(e) => handleScrollClick(e, 'contact-section')}
                className="group bg-gradient-to-r from-forest-700 to-forest-600 text-white px-8 py-4 md:px-12 md:py-5 rounded-2xl hover:from-forest-800 hover:to-forest-900 transition-all duration-500 font-semibold text-lg md:text-xl inline-flex items-center justify-center space-x-3 shadow-2xl hover:shadow-forest-900/25 transform hover:scale-105"
              >
                <span>Get a Free Quote</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <a 
                href="tel:+27799352223"
                className="group border-2 border-white/80 text-white px-8 py-4 md:px-12 md:py-5 rounded-2xl hover:bg-white hover:text-forest-900 transition-all duration-500 font-semibold text-lg md:text-xl inline-flex items-center justify-center space-x-3 backdrop-blur-sm hover:backdrop-blur-none"
              >
                <Phone size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Call: +27 79 935 2223</span>
              </a>
            </div>
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
                    <CheckCircle size={20} className="text-forest-600 flex-shrink-0" />
                    <span className="text-forest-900">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <picture>
                <img
                  src={bedroomHero}
                  alt="Bedroom Design Process"
                  className="rounded-2xl shadow-2xl"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section with Sliders */}
      <ImageSlider 
        sliders={bedroomSliders}
        title="Our Bedroom Portfolio"
        description="Discover our collection of beautiful bedroom transformations designed for comfort and style."
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-forest-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Ready to Create Your Dream Bedroom?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Contact us today for a free consultation and let's start designing the bedroom you've always wanted.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={(e) => handleScrollClick(e, 'contact-section')}
                    className="bg-gradient-to-r from-forest-700 to-forest-600 text-white px-8 py-4 rounded-xl hover:from-forest-800 hover:to-forest-900 transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Get Free Consultation</span>
                    <ArrowRight size={20} />
                  </button>
                  <a 
                    href="tel:+27799352223"
                    className="border-2 border-forest-600 text-forest-600 px-8 py-4 rounded-xl hover:bg-forest-600 hover:text-white transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center space-x-2"
                  >
                    <Phone size={20} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-forest-600 flex-shrink-0" />
                    <span className="text-gray-700">30+ years of experience</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-forest-600 flex-shrink-0" />
                    <span className="text-gray-700">Free consultation & quote</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-forest-600 flex-shrink-0" />
                    <span className="text-gray-700">Complete project management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-forest-600 flex-shrink-0" />
                    <span className="text-gray-700">Custom storage solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bedrooms;