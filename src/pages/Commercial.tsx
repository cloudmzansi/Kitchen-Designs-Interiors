import React from 'react';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';
import { usePageMeta } from '../hooks/usePageMeta';
import ImageSlider from '../components/ImageSlider';
import commercialHero from '../assets/commercial/commercial-hero.jpg';

// Import all commercial slider images
// Slider 1
import commercialOfficeDesign from '../assets/commercial/Slider 1/commercial-office-design.jpg';
import commercialOfficeDesignAvif from '../assets/commercial/Slider 1/commercial-office-design.avif';
import commercialReceptionArea from '../assets/commercial/Slider 1/commercial-reception-area.jpg';
import commercialReceptionAreaAvif from '../assets/commercial/Slider 1/commercial-reception-area.avif';
import commercialMeetingRoom from '../assets/commercial/Slider 1/commercial-meeting-room.jpg';
import commercialMeetingRoomAvif from '../assets/commercial/Slider 1/commercial-meeting-room.avif';
import commercialBoardroom from '../assets/commercial/Slider 1/commercial-boardroom.jpg';
import commercialBoardroomAvif from '../assets/commercial/Slider 1/commercial-boardroom.avif';
import commercialWorkstation from '../assets/commercial/Slider 1/commercial-workstation.jpg';
import commercialWorkstationAvif from '../assets/commercial/Slider 1/commercial-workstation.avif';
import commercialStorageSolutions from '../assets/commercial/Slider 1/commercial-storage-solutions.jpg';
import commercialStorageSolutionsAvif from '../assets/commercial/Slider 1/commercial-storage-solutions.avif';
import commercialCustomCabinets from '../assets/commercial/Slider 1/commercial-custom-cabinets.jpg';
import commercialCustomCabinetsAvif from '../assets/commercial/Slider 1/commercial-custom-cabinets.avif';
import commercialLightingDesign from '../assets/commercial/Slider 1/commercial-lighting-design.jpg';
import commercialLightingDesignAvif from '../assets/commercial/Slider 1/commercial-lighting-design.avif';
import commercialAccessibility from '../assets/commercial/Slider 1/commercial-accessibility.jpg';
import commercialAccessibilityAvif from '../assets/commercial/Slider 1/commercial-accessibility.avif';

// Slider 2
import commercialRetailDesign from '../assets/commercial/Slider 2/commercial-retail-design.jpg';
import commercialRetailDesignAvif from '../assets/commercial/Slider 2/commercial-retail-design.avif';
import commercialDisplayCabinets from '../assets/commercial/Slider 2/commercial-display-cabinets.jpg';
import commercialDisplayCabinetsAvif from '../assets/commercial/Slider 2/commercial-display-cabinets.avif';
import commercialCashWrap from '../assets/commercial/Slider 2/commercial-cash-wrap.jpg';
import commercialCashWrapAvif from '../assets/commercial/Slider 2/commercial-cash-wrap.avif';
import commercialFittingRoom from '../assets/commercial/Slider 2/commercial-fitting-room.jpg';
import commercialFittingRoomAvif from '../assets/commercial/Slider 2/commercial-fitting-room.avif';
import commercialMerchandising from '../assets/commercial/Slider 2/commercial-merchandising.jpg';
import commercialMerchandisingAvif from '../assets/commercial/Slider 2/commercial-merchandising.avif';
import commercialStorageRoom from '../assets/commercial/Slider 2/commercial-storage-room.jpg';
import commercialStorageRoomAvif from '../assets/commercial/Slider 2/commercial-storage-room.avif';
import commercialBackOffice from '../assets/commercial/Slider 2/commercial-back-office.jpg';
import commercialBackOfficeAvif from '../assets/commercial/Slider 2/commercial-back-office.avif';
import commercialCustomerService from '../assets/commercial/Slider 2/commercial-customer-service.jpg';
import commercialCustomerServiceAvif from '../assets/commercial/Slider 2/commercial-customer-service.avif';
import commercialBreakRoom from '../assets/commercial/Slider 2/commercial-break-room.jpg';
import commercialBreakRoomAvif from '../assets/commercial/Slider 2/commercial-break-room.avif';

// Slider 3
import commercialRestaurantDesign from '../assets/commercial/Slider 3/commercial-restaurant-design.jpg';
import commercialRestaurantDesignAvif from '../assets/commercial/Slider 3/commercial-restaurant-design.avif';
import commercialKitchen from '../assets/commercial/Slider 3/commercial-kitchen.jpg';
import commercialKitchenAvif from '../assets/commercial/Slider 3/commercial-kitchen.avif';
import commercialDiningArea from '../assets/commercial/Slider 3/commercial-dining-area.jpg';
import commercialDiningAreaAvif from '../assets/commercial/Slider 3/commercial-dining-area.avif';
import commercialBarDesign from '../assets/commercial/Slider 3/commercial-bar-design.jpg';
import commercialBarDesignAvif from '../assets/commercial/Slider 3/commercial-bar-design.avif';
import commercialWaitingArea from '../assets/commercial/Slider 3/commercial-waiting-area.jpg';
import commercialWaitingAreaAvif from '../assets/commercial/Slider 3/commercial-waiting-area.avif';
import commercialStorageKitchen from '../assets/commercial/Slider 3/commercial-storage-kitchen.jpg';
import commercialStorageKitchenAvif from '../assets/commercial/Slider 3/commercial-storage-kitchen.avif';
import commercialPrepArea from '../assets/commercial/Slider 3/commercial-prep-area.jpg';
import commercialPrepAreaAvif from '../assets/commercial/Slider 3/commercial-prep-area.avif';
import commercialDishwashing from '../assets/commercial/Slider 3/commercial-dishwashing.jpg';
import commercialDishwashingAvif from '../assets/commercial/Slider 3/commercial-dishwashing.avif';

// Slider 4
import commercialMedicalOffice from '../assets/commercial/Slider 4/commercial-medical-office.jpg';
import commercialMedicalOfficeAvif from '../assets/commercial/Slider 4/commercial-medical-office.avif';
import commercialExaminationRoom from '../assets/commercial/Slider 4/commercial-examination-room.jpg';
import commercialExaminationRoomAvif from '../assets/commercial/Slider 4/commercial-examination-room.avif';
import commercialWaitingRoom from '../assets/commercial/Slider 4/commercial-waiting-room.jpg';
import commercialWaitingRoomAvif from '../assets/commercial/Slider 4/commercial-waiting-room.avif';
import commercialStorageMedical from '../assets/commercial/Slider 4/commercial-storage-medical.jpg';
import commercialStorageMedicalAvif from '../assets/commercial/Slider 4/commercial-storage-medical.avif';
import commercialReceptionMedical from '../assets/commercial/Slider 4/commercial-reception-medical.jpg';
import commercialReceptionMedicalAvif from '../assets/commercial/Slider 4/commercial-reception-medical.avif';
import commercialConsultationRoom from '../assets/commercial/Slider 4/commercial-consultation-room.jpg';
import commercialConsultationRoomAvif from '../assets/commercial/Slider 4/commercial-consultation-room.avif';
import commercialLabArea from '../assets/commercial/Slider 4/commercial-lab-area.jpg';
import commercialLabAreaAvif from '../assets/commercial/Slider 4/commercial-lab-area.avif';
import commercialSterilization from '../assets/commercial/Slider 4/commercial-sterilization.jpg';
import commercialSterilizationAvif from '../assets/commercial/Slider 4/commercial-sterilization.avif';
import commercialMedicalStorage from '../assets/commercial/Slider 4/commercial-medical-storage.jpg';
import commercialMedicalStorageAvif from '../assets/commercial/Slider 4/commercial-medical-storage.avif';

const Commercial = () => {
  const { handleScrollClick } = useScrollTo();

  // Page-specific meta tags
  usePageMeta({
    title: "Commercial Renovations Cape Town - Office & Retail Interior Design | KD Interiors",
    description: "Transform your commercial space with expert interior design and fit-out services in Cape Town. Office renovations, retail design, and complete commercial makeovers.",
    keywords: "commercial renovation Cape Town, office design, retail design, commercial interior design, Cape Town commercial contractor, office fit-out",
    ogTitle: "Commercial Renovations Cape Town - Office & Retail Design",
    ogDescription: "Expert commercial renovations in Cape Town. Office design, retail fit-outs, and complete commercial makeovers. Free consultation available.",
    ogImage: "/src/assets/commercial/commercial-hero.jpg",
    canonical: "https://kdinteriors.co.za/commercial"
  });

  const services = [
    "Office Design & Fit-out",
    "Retail Store Design",
    "Restaurant & Hospitality Design",
    "Medical Office Design",
    "Custom Cabinetry & Storage",
    "Lighting Design & Installation",
    "Space Planning & Layout",
    "Project Management",
    "Commercial Furniture",
    "Accessibility Compliance"
  ];

  // Commercial sliders data
  const commercialSliders = [
    {
      id: "office-designs",
      images: [
        { avif: commercialOfficeDesignAvif, jpg: commercialOfficeDesign, alt: "Modern office design" },
        { avif: commercialReceptionAreaAvif, jpg: commercialReceptionArea, alt: "Office reception area" },
        { avif: commercialMeetingRoomAvif, jpg: commercialMeetingRoom, alt: "Meeting room design" },
        { avif: commercialBoardroomAvif, jpg: commercialBoardroom, alt: "Boardroom design" },
        { avif: commercialWorkstationAvif, jpg: commercialWorkstation, alt: "Office workstation design" },
        { avif: commercialStorageSolutionsAvif, jpg: commercialStorageSolutions, alt: "Office storage solutions" },
        { avif: commercialCustomCabinetsAvif, jpg: commercialCustomCabinets, alt: "Custom office cabinets" },
        { avif: commercialLightingDesignAvif, jpg: commercialLightingDesign, alt: "Office lighting design" },
        { avif: commercialAccessibilityAvif, jpg: commercialAccessibility, alt: "Accessible office design" }
      ]
    },
    {
      id: "retail-spaces",
      images: [
        { avif: commercialRetailDesignAvif, jpg: commercialRetailDesign, alt: "Retail store design" },
        { avif: commercialDisplayCabinetsAvif, jpg: commercialDisplayCabinets, alt: "Display cabinets for retail" },
        { avif: commercialCashWrapAvif, jpg: commercialCashWrap, alt: "Cash wrap design" },
        { avif: commercialFittingRoomAvif, jpg: commercialFittingRoom, alt: "Fitting room design" },
        { avif: commercialMerchandisingAvif, jpg: commercialMerchandising, alt: "Retail merchandising" },
        { avif: commercialStorageRoomAvif, jpg: commercialStorageRoom, alt: "Retail storage room" },
        { avif: commercialBackOfficeAvif, jpg: commercialBackOffice, alt: "Back office design" },
        { avif: commercialCustomerServiceAvif, jpg: commercialCustomerService, alt: "Customer service area" },
        { avif: commercialBreakRoomAvif, jpg: commercialBreakRoom, alt: "Employee break room" }
      ]
    },
    {
      id: "restaurant-designs",
      images: [
        { avif: commercialRestaurantDesignAvif, jpg: commercialRestaurantDesign, alt: "Restaurant design" },
        { avif: commercialKitchenAvif, jpg: commercialKitchen, alt: "Commercial kitchen design" },
        { avif: commercialDiningAreaAvif, jpg: commercialDiningArea, alt: "Restaurant dining area" },
        { avif: commercialBarDesignAvif, jpg: commercialBarDesign, alt: "Bar design" },
        { avif: commercialWaitingAreaAvif, jpg: commercialWaitingArea, alt: "Restaurant waiting area" },
        { avif: commercialStorageKitchenAvif, jpg: commercialStorageKitchen, alt: "Kitchen storage solutions" },
        { avif: commercialPrepAreaAvif, jpg: commercialPrepArea, alt: "Food preparation area" },
        { avif: commercialDishwashingAvif, jpg: commercialDishwashing, alt: "Dishwashing area design" },
        { avif: commercialRestaurantDesignAvif, jpg: commercialRestaurantDesign, alt: "Restaurant design showcase" }
      ]
    },
    {
      id: "medical-spaces",
      images: [
        { avif: commercialMedicalOfficeAvif, jpg: commercialMedicalOffice, alt: "Medical office design" },
        { avif: commercialExaminationRoomAvif, jpg: commercialExaminationRoom, alt: "Medical examination room" },
        { avif: commercialWaitingRoomAvif, jpg: commercialWaitingRoom, alt: "Medical waiting room" },
        { avif: commercialStorageMedicalAvif, jpg: commercialStorageMedical, alt: "Medical storage solutions" },
        { avif: commercialReceptionMedicalAvif, jpg: commercialReceptionMedical, alt: "Medical reception area" },
        { avif: commercialConsultationRoomAvif, jpg: commercialConsultationRoom, alt: "Medical consultation room" },
        { avif: commercialLabAreaAvif, jpg: commercialLabArea, alt: "Medical laboratory area" },
        { avif: commercialSterilizationAvif, jpg: commercialSterilization, alt: "Sterilization area design" },
        { avif: commercialMedicalStorageAvif, jpg: commercialMedicalStorage, alt: "Medical equipment storage" }
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
              Commercial Renovations
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-forest-100 leading-relaxed">
              Transform your commercial space with expert interior design and fit-out services that enhance productivity and customer experience.
            </p>
            {/* Enhanced CTA buttons with better visual hierarchy */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <button 
                onClick={(e) => handleScrollClick(e, 'contact-section')}
                className="group bg-gradient-to-r from-forest-700 to-forest-600 text-white px-8 py-4 md:px-12 md:py-5 rounded-2xl hover:from-forest-800 hover:to-forest-900 transition-all duration-500 font-semibold text-lg md:text-xl inline-flex items-center justify-center space-x-3 shadow-2xl hover:shadow-forest-900/25 transform hover:scale-105"
                aria-label="Get a free quote for commercial renovations"
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
                Complete Commercial Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From office renovations to retail fit-outs, we provide comprehensive commercial interior design services that create functional, beautiful, and productive spaces for your business.
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
                  src={commercialHero}
                  alt="Commercial Design Process"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section with Sliders */}
      <ImageSlider 
        sliders={commercialSliders}
        title="Our Commercial Portfolio"
        description="Explore our collection of stunning commercial transformations across various industries."
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-forest-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Ready to Transform Your Commercial Space?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Let's create a commercial space that enhances your business operations and impresses your clients.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={(e) => handleScrollClick(e, 'contact-section')}
                    className="bg-gradient-to-r from-forest-700 to-forest-600 text-white px-8 py-4 rounded-xl hover:from-forest-800 hover:to-forest-900 transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    aria-label="Get free consultation for commercial renovations"
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
                    <span className="text-gray-700">Commercial expertise</span>
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

export default Commercial;
