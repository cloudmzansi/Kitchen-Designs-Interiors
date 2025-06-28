import React from 'react';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';
import { usePageMeta } from '../hooks/usePageMeta';
import ImageSlider from '../components/ImageSlider';
import bathroomHero from '../assets/bathrooms/bathroom-hero.jpg';

// Import all bathroom slider images
// Slider 1
import bathroomLuxuryDesign from '../assets/bathrooms/Slider 1/bathroom-luxury-design.jpg';
import bathroomLuxuryDesignAvif from '../assets/bathrooms/Slider 1/bathroom-luxury-design.avif';
import bathroomMarbleTiles from '../assets/bathrooms/Slider 1/bathroom-marble-tiles.jpg';
import bathroomMarbleTilesAvif from '../assets/bathrooms/Slider 1/bathroom-marble-tiles.avif';
import bathroomCustomVanity from '../assets/bathrooms/Slider 1/bathroom-custom-vanity.jpg';
import bathroomCustomVanityAvif from '../assets/bathrooms/Slider 1/bathroom-custom-vanity.avif';
import bathroomFreestandingBath from '../assets/bathrooms/Slider 1/bathroom-freestanding-bath.jpg';
import bathroomFreestandingBathAvif from '../assets/bathrooms/Slider 1/bathroom-freestanding-bath.avif';
import bathroomWalkInShower from '../assets/bathrooms/Slider 1/bathroom-walk-in-shower.jpg';
import bathroomWalkInShowerAvif from '../assets/bathrooms/Slider 1/bathroom-walk-in-shower.avif';
import bathroomGlassEnclosure from '../assets/bathrooms/Slider 1/bathroom-glass-enclosure.jpg';
import bathroomGlassEnclosureAvif from '../assets/bathrooms/Slider 1/bathroom-glass-enclosure.avif';
import bathroomCustomLighting from '../assets/bathrooms/Slider 1/bathroom-custom-lighting.jpg';
import bathroomCustomLightingAvif from '../assets/bathrooms/Slider 1/bathroom-custom-lighting.avif';
import bathroomStorageSolutions from '../assets/bathrooms/Slider 1/bathroom-storage-solutions.jpg';
import bathroomStorageSolutionsAvif from '../assets/bathrooms/Slider 1/bathroom-storage-solutions.avif';
import bathroomMosaicTiles from '../assets/bathrooms/Slider 1/bathroom-mosaic-tiles.jpg';
import bathroomMosaicTilesAvif from '../assets/bathrooms/Slider 1/bathroom-mosaic-tiles.avif';

// Slider 2
import bathroomModernDesign from '../assets/bathrooms/Slider 2/bathroom-modern-design.jpg';
import bathroomModernDesignAvif from '../assets/bathrooms/Slider 2/bathroom-modern-design.avif';
import bathroomQuartzCountertop from '../assets/bathrooms/Slider 2/bathroom-quartz-countertop.jpg';
import bathroomQuartzCountertopAvif from '../assets/bathrooms/Slider 2/bathroom-quartz-countertop.avif';
import bathroomCustomCabinets from '../assets/bathrooms/Slider 2/bathroom-custom-cabinets.jpg';
import bathroomCustomCabinetsAvif from '../assets/bathrooms/Slider 2/bathroom-custom-cabinets.avif';
import bathroomDoubleVanity from '../assets/bathrooms/Slider 2/bathroom-double-vanity.jpg';
import bathroomDoubleVanityAvif from '../assets/bathrooms/Slider 2/bathroom-double-vanity.avif';
import bathroomMirrorDesign from '../assets/bathrooms/Slider 2/bathroom-mirror-design.jpg';
import bathroomMirrorDesignAvif from '../assets/bathrooms/Slider 2/bathroom-mirror-design.avif';
import bathroomTowelRack from '../assets/bathrooms/Slider 2/bathroom-towel-rack.jpg';
import bathroomTowelRackAvif from '../assets/bathrooms/Slider 2/bathroom-towel-rack.avif';
import bathroomShelvingUnit from '../assets/bathrooms/Slider 2/bathroom-shelving-unit.jpg';
import bathroomShelvingUnitAvif from '../assets/bathrooms/Slider 2/bathroom-shelving-unit.avif';
import bathroomAccessoryStorage from '../assets/bathrooms/Slider 2/bathroom-accessory-storage.jpg';
import bathroomAccessoryStorageAvif from '../assets/bathrooms/Slider 2/bathroom-accessory-storage.avif';
import bathroomCustomLighting2 from '../assets/bathrooms/Slider 2/bathroom-custom-lighting.jpg';
import bathroomCustomLighting2Avif from '../assets/bathrooms/Slider 2/bathroom-custom-lighting.avif';

// Slider 3
import bathroomLuxurySuite from '../assets/bathrooms/Slider 3/bathroom-luxury-suite.jpg';
import bathroomLuxurySuiteAvif from '../assets/bathrooms/Slider 3/bathroom-luxury-suite.avif';
import bathroomSpaDesign from '../assets/bathrooms/Slider 3/bathroom-spa-design.jpg';
import bathroomSpaDesignAvif from '../assets/bathrooms/Slider 3/bathroom-spa-design.avif';
import bathroomSteamShower from '../assets/bathrooms/Slider 3/bathroom-steam-shower.jpg';
import bathroomSteamShowerAvif from '../assets/bathrooms/Slider 3/bathroom-steam-shower.avif';
import bathroomJacuzziTub from '../assets/bathrooms/Slider 3/bathroom-jacuzzi-tub.jpg';
import bathroomJacuzziTubAvif from '../assets/bathrooms/Slider 3/bathroom-jacuzzi-tub.avif';
import bathroomSaunaRoom from '../assets/bathrooms/Slider 3/bathroom-sauna-room.jpg';
import bathroomSaunaRoomAvif from '../assets/bathrooms/Slider 3/bathroom-sauna-room.avif';
import bathroomChromatherapy from '../assets/bathrooms/Slider 3/bathroom-chromatherapy.jpg';
import bathroomChromatherapyAvif from '../assets/bathrooms/Slider 3/bathroom-chromatherapy.avif';
import bathroomHeatedFloors from '../assets/bathrooms/Slider 3/bathroom-heated-floors.jpg';
import bathroomHeatedFloorsAvif from '../assets/bathrooms/Slider 3/bathroom-heated-floors.avif';
import bathroomTowelWarmer from '../assets/bathrooms/Slider 3/bathroom-towel-warmer.jpg';
import bathroomTowelWarmerAvif from '../assets/bathrooms/Slider 3/bathroom-towel-warmer.avif';
import bathroomLuxuryFixtures from '../assets/bathrooms/Slider 3/bathroom-luxury-fixtures.jpg';
import bathroomLuxuryFixturesAvif from '../assets/bathrooms/Slider 3/bathroom-luxury-fixtures.avif';

const Bathrooms = () => {
  const { handleScrollClick } = useScrollTo();

  // Page-specific meta tags
  usePageMeta({
    title: "Bathroom Renovations Cape Town - Luxury Bathroom Design & Installation | KD Interiors",
    description: "Transform your bathroom with luxury design and expert installation services in Cape Town. Custom vanities, walk-in showers, and complete bathroom makeovers.",
    keywords: "bathroom renovation Cape Town, bathroom design, luxury bathroom, walk-in shower, Cape Town bathroom contractor, bathroom remodeling",
    ogTitle: "Bathroom Renovations Cape Town - Luxury Design & Installation",
    ogDescription: "Expert bathroom renovations in Cape Town. Luxury design, custom vanities, and complete bathroom makeovers. Free consultation available.",
    ogImage: "/src/assets/bathrooms/bathroom-hero.jpg",
    canonical: "https://kdinteriors.co.za/bathrooms"
  });

  const services = [
    "Complete Bathroom Renovations",
    "Custom Vanity Design & Installation",
    "Walk-in Shower Systems",
    "Freestanding Bath Installation",
    "Tile & Flooring Design",
    "Lighting Design & Installation",
    "Plumbing & Electrical Work",
    "Glass Enclosure Systems",
    "Storage Solutions",
    "Accessibility Features"
  ];

  // Bathroom sliders data
  const bathroomSliders = [
    {
      id: "luxury-bathrooms",
      images: [
        { avif: bathroomLuxuryDesignAvif, jpg: bathroomLuxuryDesign, alt: "Luxury bathroom design" },
        { avif: bathroomMarbleTilesAvif, jpg: bathroomMarbleTiles, alt: "Marble tiles in bathroom" },
        { avif: bathroomCustomVanityAvif, jpg: bathroomCustomVanity, alt: "Custom bathroom vanity" },
        { avif: bathroomFreestandingBathAvif, jpg: bathroomFreestandingBath, alt: "Freestanding bath installation" },
        { avif: bathroomWalkInShowerAvif, jpg: bathroomWalkInShower, alt: "Walk-in shower design" },
        { avif: bathroomGlassEnclosureAvif, jpg: bathroomGlassEnclosure, alt: "Glass enclosure for shower" },
        { avif: bathroomCustomLightingAvif, jpg: bathroomCustomLighting, alt: "Custom bathroom lighting" },
        { avif: bathroomStorageSolutionsAvif, jpg: bathroomStorageSolutions, alt: "Bathroom storage solutions" },
        { avif: bathroomMosaicTilesAvif, jpg: bathroomMosaicTiles, alt: "Mosaic tiles in bathroom" }
      ]
    },
    {
      id: "modern-bathrooms",
      images: [
        { avif: bathroomModernDesignAvif, jpg: bathroomModernDesign, alt: "Modern bathroom design" },
        { avif: bathroomQuartzCountertopAvif, jpg: bathroomQuartzCountertop, alt: "Quartz countertop in bathroom" },
        { avif: bathroomCustomCabinetsAvif, jpg: bathroomCustomCabinets, alt: "Custom bathroom cabinets" },
        { avif: bathroomDoubleVanityAvif, jpg: bathroomDoubleVanity, alt: "Double vanity bathroom" },
        { avif: bathroomMirrorDesignAvif, jpg: bathroomMirrorDesign, alt: "Bathroom mirror design" },
        { avif: bathroomTowelRackAvif, jpg: bathroomTowelRack, alt: "Bathroom towel rack" },
        { avif: bathroomShelvingUnitAvif, jpg: bathroomShelvingUnit, alt: "Bathroom shelving unit" },
        { avif: bathroomAccessoryStorageAvif, jpg: bathroomAccessoryStorage, alt: "Bathroom accessory storage" },
        { avif: bathroomCustomLighting2Avif, jpg: bathroomCustomLighting2, alt: "Custom bathroom lighting design" }
      ]
    },
    {
      id: "spa-bathrooms",
      images: [
        { avif: bathroomLuxurySuiteAvif, jpg: bathroomLuxurySuite, alt: "Luxury bathroom suite" },
        { avif: bathroomSpaDesignAvif, jpg: bathroomSpaDesign, alt: "Spa bathroom design" },
        { avif: bathroomSteamShowerAvif, jpg: bathroomSteamShower, alt: "Steam shower installation" },
        { avif: bathroomJacuzziTubAvif, jpg: bathroomJacuzziTub, alt: "Jacuzzi tub installation" },
        { avif: bathroomSaunaRoomAvif, jpg: bathroomSaunaRoom, alt: "Sauna room design" },
        { avif: bathroomChromatherapyAvif, jpg: bathroomChromatherapy, alt: "Chromatherapy bathroom lighting" },
        { avif: bathroomHeatedFloorsAvif, jpg: bathroomHeatedFloors, alt: "Heated bathroom floors" },
        { avif: bathroomTowelWarmerAvif, jpg: bathroomTowelWarmer, alt: "Towel warmer installation" },
        { avif: bathroomLuxuryFixturesAvif, jpg: bathroomLuxuryFixtures, alt: "Luxury bathroom fixtures" }
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
              Bathroom Renovations
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-forest-100 leading-relaxed">
              Transform your bathroom into a luxurious retreat with our expert design and installation services.
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
                Complete Bathroom Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From luxury spa bathrooms to practical family bathrooms, we create beautiful and functional spaces that enhance your daily routine and add value to your home.
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
                  src={bathroomHero}
                  alt="Bathroom Design Process"
                  className="rounded-2xl shadow-2xl"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section with Sliders */}
      <ImageSlider 
        sliders={bathroomSliders}
        title="Our Bathroom Portfolio"
        description="Explore our collection of stunning bathroom transformations designed for luxury and functionality."
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-forest-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Ready for Your Dream Bathroom?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Let's create a bathroom that combines luxury, functionality, and your personal style.
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
                    <span className="text-gray-700">Luxury fixtures & materials</span>
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

export default Bathrooms;