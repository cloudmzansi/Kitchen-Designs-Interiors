import React, { useState, useEffect } from 'react';
import { CheckCircle, Hammer, Clock, Shield, DollarSign, Calendar, Ruler, Wrench, MapPin, Phone, Mail } from 'lucide-react';
import BeforeAfterSection from '../components/BeforeAfterSection';
import { usePageMeta } from '../hooks/usePageMeta';
import { useLandingForm } from '../hooks/useLandingForm';

// EDIT ZONE: Hero background image
import heroBg from '../assets/commercial/commercial-hero.jpg';
import heroBgAvif from '../assets/commercial/commercial-hero.avif';

// EDIT ZONE: Before/After slider images
import slider1Before from '../assets/home/slider1-1.jpg';
import slider1After from '../assets/home/slider1-2.jpg';
import slider2Before from '../assets/home/slider2-1.jpg';
import slider2After from '../assets/home/slider2-2.jpg';

// EDIT ZONE: Featured project images - Source: /commercial page sliders
import commercialOfficeDesign from '../assets/commercial/Slider 1/commercial-office-design.jpg';
import commercialOfficeDesignAvif from '../assets/commercial/Slider 1/commercial-office-design.avif';
import commercialReceptionArea from '../assets/commercial/Slider 1/commercial-reception-area.jpg';
import commercialReceptionAreaAvif from '../assets/commercial/Slider 1/commercial-reception-area.avif';
import commercialMeetingRoom from '../assets/commercial/Slider 1/commercial-meeting-room.jpg';
import commercialMeetingRoomAvif from '../assets/commercial/Slider 1/commercial-meeting-room.avif';
import commercialRetailDesign from '../assets/commercial/Slider 2/commercial-retail-design.jpg';
import commercialRetailDesignAvif from '../assets/commercial/Slider 2/commercial-retail-design.avif';
import commercialRestaurantDesign from '../assets/commercial/Slider 3/commercial-restaurant-design.jpg';
import commercialRestaurantDesignAvif from '../assets/commercial/Slider 3/commercial-restaurant-design.avif';
import commercialMedicalOffice from '../assets/commercial/Slider 4/commercial-medical-office.jpg';
import commercialMedicalOfficeAvif from '../assets/commercial/Slider 4/commercial-medical-office.avif';

type ProjectImage = {
  image: string;
  imageAvif?: string;
  caption: string;
  type: 'kitchen' | 'bedroom' | 'bathroom';
};

const LandingCommercial = () => {
  // Set landing source for tracking
  useEffect(() => {
    sessionStorage.setItem('landing_source', 'commercial');
  }, []);

  // EDIT ZONE: Page-specific meta tags
  usePageMeta({
    title: "Commercial Renovations Cape Town | Office Fit-Outs & Commercial Interiors",
    description: "Looking for professional commercial renovations in Cape Town? We design, manage, and build bespoke commercial spaces with premium finishes and end-to-end project management. Get a free quote.",
    canonical: "https://kdinteriors.co.za/landing/commercial"
  });

  const { formIds, isFormSubmitting, formErrors, handleSubmit } = useLandingForm('commercial-landing');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [LightboxComponent, setLightboxComponent] = useState<React.ComponentType<any> | null>(null);

  // Lazy load Lightbox component only when needed
  useEffect(() => {
    if (lightboxOpen && !LightboxComponent) {
      import("yet-another-react-lightbox").then((module) => {
        import("yet-another-react-lightbox/styles.css");
        setLightboxComponent(() => module.default);
      });
    }
  }, [lightboxOpen, LightboxComponent]);

  // EDIT ZONE: Value propositions - Source: /commercial page "Why Choose Us" + adapted for landing
  const valueProps = [
    {
      icon: Hammer,
      title: 'Office & Retail Fit-Outs',
      description: 'Comprehensive commercial interior design services tailored to your business needs and brand identity.'
    },
    {
      icon: Clock,
      title: 'Complete Project Management',
      description: 'End-to-end service from design to installation, ensuring your commercial renovation is completed on time.'
    },
    {
      icon: Shield,
      title: '30+ Years Experience',
      description: 'Expertise delivering premium finishes and lasting quality in commercial renovations across Cape Town.'
    },
    {
      icon: DollarSign,
      title: 'Free Consultation & Quote',
      description: 'No-obligation consultation with detailed quote within 48 hours after confirming measurements.'
    }
  ];

  // EDIT ZONE: Featured projects gallery - Source: /commercial page sliders
  const projects: ProjectImage[] = [
    {
      image: commercialOfficeDesign,
      imageAvif: commercialOfficeDesignAvif,
      caption: 'Modern Office Design',
      type: 'kitchen'
    },
    {
      image: commercialReceptionArea,
      imageAvif: commercialReceptionAreaAvif,
      caption: 'Office Reception Area',
      type: 'kitchen'
    },
    {
      image: commercialMeetingRoom,
      imageAvif: commercialMeetingRoomAvif,
      caption: 'Meeting Room Design',
      type: 'kitchen'
    },
    {
      image: commercialRetailDesign,
      imageAvif: commercialRetailDesignAvif,
      caption: 'Retail Store Design',
      type: 'kitchen'
    },
    {
      image: commercialRestaurantDesign,
      imageAvif: commercialRestaurantDesignAvif,
      caption: 'Restaurant Design',
      type: 'kitchen'
    },
    {
      image: commercialMedicalOffice,
      imageAvif: commercialMedicalOfficeAvif,
      caption: 'Medical Office Design',
      type: 'kitchen'
    }
  ];

  // EDIT ZONE: Process steps - Adapted from standard funnel, commercial-specific
  const processSteps = [
    {
      number: '1',
      title: 'Book Your Free Consultation',
      description: 'Submit the quote form — we confirm within 2 hours and schedule your free on-site consultation.',
      icon: Calendar
    },
    {
      number: '2',
      title: 'On-Site Visit & Design',
      description: 'We assess your commercial space, discuss fit-out designs, and plan materials and layout.',
      icon: Ruler
    },
    {
      number: '3',
      title: 'Build & Install',
      description: 'Professional installers complete your commercial renovation with warranty protection.',
      icon: Wrench
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '27799352223';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+27799352223';
  };

  return (
    <div className="bg-white">
      {/* EDIT ZONE: Hero Section */}
      <section id="quote-form" className="relative min-h-screen min-h-[100svh] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 w-full">
          <picture>
            <source srcSet={heroBgAvif} type="image/avif" sizes="100vw" />
            <img 
              src={heroBg}
              alt="Commercial Design"
              width={1920}
              height={1080}
              fetchPriority="high"
              decoding="async"
              sizes="100vw"
              className="w-full h-full min-h-screen min-h-[100svh] object-cover transition-opacity duration-1000"
            />
          </picture>
          {/* Enhanced gradient overlay with darker area behind headline */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>
          {/* Additional darkening layer behind headline area */}
          <div className="absolute top-0 left-0 right-0 h-[40%] bg-black/5 lg:bg-black/7"></div>
        </div>
        
        {/* KD Logo - Inside Hero Section */}
        <div className="relative z-10 container mx-auto px-4 pt-5 sm:pt-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-forest-700 to-forest-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl tracking-tighter" style={{letterSpacing: '-0.15em'}}>KD</span>
            </div>
          </div>
        </div>
        
        {/* Two-Column Content Layout */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-6 sm:py-10 md:py-12 lg:pt-8 lg:pb-20 min-h-screen min-h-[100svh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-8 lg:gap-12 items-start lg:items-center min-h-[calc(100vh-3rem)] sm:min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-6rem)]">
            
            {/* Left Column - Marketing Content */}
            <div className="relative z-10 text-white space-y-6 sm:space-y-5 md:space-y-6 lg:space-y-8 pt-14 sm:pt-16 md:pt-20 lg:pt-0 text-center lg:text-left">
              {/* EDIT ZONE: Main Headline */}
              <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold sm:font-bold leading-[1.1] sm:leading-tight lg:leading-[1.15] drop-shadow-lg sm:drop-shadow-none">
                Commercial Renovations Cape Town — Transform Your Business Space Today
              </h1>
              
              {/* EDIT ZONE: Benefit Sub-headline - Source: /commercial + Value Triple-Threat */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-forest-300 leading-none pt-1 sm:pt-0">
                Free Consult + Free 3D Design + 48-Hour Quote
              </p>
              
              {/* EDIT ZONE: Benefit Statement - Source: /commercial page description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0 pt-1 sm:pt-0">
                Transform your commercial space with expert interior design and fit-out services that enhance productivity and customer experience. 30+ years of expertise. Serving Cape Town + surrounding suburbs (±50 km). Free on-site consultation with detailed quote within 48 hours.
              </p>
              
              {/* EDIT ZONE: Trust Badges - Source: /commercial page "Why Choose Us" section */}
              <div className="space-y-3 sm:space-y-3 md:space-y-3.5 pt-3 sm:pt-4 md:pt-5">
                <div className="flex items-start justify-center lg:justify-start space-x-2.5 sm:space-x-3">
                  <CheckCircle size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-forest-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">30+ years of experience</span>
                </div>
                <div className="flex items-start justify-center lg:justify-start space-x-2.5 sm:space-x-3">
                  <CheckCircle size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-forest-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">Free consultation & quote</span>
                </div>
                <div className="flex items-start justify-center lg:justify-start space-x-2.5 sm:space-x-3">
                  <CheckCircle size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-forest-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">Complete project management</span>
                </div>
                <div className="flex items-start justify-center lg:justify-start space-x-2.5 sm:space-x-3">
                  <CheckCircle size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-forest-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">Commercial expertise</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="relative z-10 lg:pl-8 mt-6 sm:mt-10 md:mt-8 lg:mt-0">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-5 sm:p-6 md:p-6 lg:p-7 max-w-lg lg:max-w-md mx-auto lg:mx-0">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-5 text-center lg:text-left">
                  Get Your Free Quote Today
                </h2>
                
                <form id={formIds.heroForm} onSubmit={handleSubmit} className="space-y-4 sm:space-y-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor={formIds.name} className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id={formIds.name}
                      name="name"
                      required
                      className={`w-full px-4 py-3 text-base border rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-forest-600 focus:outline-none transition-colors duration-200 ${
                        formErrors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {formErrors.name && (
                      <p className="mt-1.5 text-sm text-red-600">{formErrors.name}</p>
                    )}
                  </div>
                  
                  {/* Phone / WhatsApp Field */}
                  <div>
                    <label htmlFor={formIds.phone} className="block text-sm font-medium text-gray-700 mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id={formIds.phone}
                      name="phone"
                      required
                      className={`w-full px-4 py-3 text-base border rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-forest-600 focus:outline-none transition-colors duration-200 ${
                        formErrors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="e.g. 079 123 4567"
                    />
                    {formErrors.phone && (
                      <p className="mt-1.5 text-sm text-red-600">{formErrors.phone}</p>
                    )}
                    <p className="mt-1.5 text-xs text-gray-500">Used only to book your consult.</p>
                  </div>
                  
                  {/* Email Field */}
                  <div>
                    <label htmlFor={formIds.email} className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id={formIds.email}
                      name="email"
                      required
                      className={`w-full px-4 py-3 text-base border rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-forest-600 focus:outline-none transition-colors duration-200 ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1.5 text-sm text-red-600">{formErrors.email}</p>
                    )}
                  </div>
                  
                  {/* Optional Message Field */}
                  <div>
                    <label htmlFor={formIds.message} className="block text-sm font-medium text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id={formIds.message}
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-forest-600 focus:outline-none transition-colors duration-200 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isFormSubmitting}
                    className="w-full bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white font-bold py-3.5 px-4 rounded-lg transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none min-h-[48px] mt-2"
                  >
                    {isFormSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'GET MY FREE QUOTE'
                    )}
                  </button>
                  
                  {/* Urgency Text */}
                  <p className="text-center text-sm text-gray-600 mt-3">
                    We'll contact you within 2 hours. No obligations.
                  </p>
                  
                  {/* Error Message */}
                  {formErrors.submit && (
                    <p className="mt-2 text-sm text-red-600 text-center">{formErrors.submit}</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp/Call Strip Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-forest-600 to-forest-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="text-center sm:text-left text-white">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                Have Questions? Get Instant Answers
              </h3>
              <p className="text-lg sm:text-xl text-forest-100">
                Chat with us on WhatsApp or call us now
              </p>
            </div>
            <div className="flex flex-row gap-2 sm:gap-4 w-full sm:w-auto mt-3 sm:mt-0">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 sm:py-4 sm:px-8 rounded-lg transition-all duration-300 text-sm sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-1.5 sm:gap-3 flex-1 sm:flex-none sm:min-w-[200px]"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-4 h-4 sm:w-6 sm:h-6"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>WhatsApp Us</span>
              </button>
              <button
                onClick={handleCallClick}
                className="bg-white hover:bg-gray-100 text-forest-700 font-bold py-2 px-3 sm:py-4 sm:px-8 rounded-lg transition-all duration-300 text-sm sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-1.5 sm:gap-3 flex-1 sm:flex-none sm:min-w-[200px]"
              >
                <Phone className="w-4 h-4 sm:w-6 sm:h-6" />
                <span>Call Us Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* EDIT ZONE: Section 2: Why Homeowners Choose Us */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Businesses Choose Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From office renovations to retail fit-outs, we provide comprehensive commercial interior design services that create functional, beautiful, and productive spaces for your business.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-600 text-white rounded-full mb-6">
                  <prop.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{prop.title}</h3>
                <p className="text-gray-600">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDIT ZONE: Section 3: Before/After Transformations */}
      <BeforeAfterSection
        sliders={[
          {
            beforeImage: slider1Before,
            afterImage: slider1After,
            alt: 'Commercial transformation before and after',
          },
          {
            beforeImage: slider2Before,
            afterImage: slider2After,
            alt: 'Interior design transformation before and after',
          },
        ]}
      />

      {/* EDIT ZONE: Section 4: Featured Projects Gallery */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Featured Commercial Projects
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of stunning commercial transformations across various industries in Cape Town.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setLightboxIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <picture>
                  {project.imageAvif && <source srcSet={project.imageAvif} type="image/avif" sizes="(max-width: 1024px) 50vw, 25vw" />}
                  <img 
                    src={project.image}
                    alt={project.caption}
                    width={400}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </picture>
                <div className="p-4 sm:p-6 bg-white">
                  <p className="text-gray-800 text-sm sm:text-base font-semibold leading-tight">{project.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox for Project Images - Lazy Loaded */}
          {LightboxComponent && (
            <LightboxComponent
              open={lightboxOpen}
              close={() => setLightboxOpen(false)}
              slides={projects.map(project => ({
                src: project.image,
                alt: project.caption
              }))}
              index={lightboxIndex}
              carousel={{
                finite: true,
                preload: 2,
              }}
              controller={{
                closeOnBackdropClick: true,
                closeOnPullDown: true,
              }}
              styles={{
                container: {
                  backgroundColor: "rgba(0, 0, 0, 0.95)",
                },
                slide: {
                  padding: "20px",
                },
              }}
            />
          )}
        </div>
      </section>

      {/* EDIT ZONE: Section 5: Simple 3-Step Process */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, straightforward process from consultation to completion.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className={`text-center ${index === 2 ? 'col-span-2 md:col-span-1 max-w-xs mx-auto md:max-w-none md:mx-0' : ''}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-600 text-white rounded-full font-bold text-xl mb-6">
                  {step.number}
                </div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-forest-100 rounded-full mb-4">
                  <step.icon size={24} className="text-forest-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDIT ZONE: Section 6: Contact Section */}
      <section id="contact-section" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Ready to Transform Your Commercial Space?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Let's create a commercial space that enhances your business operations and impresses your clients. You'll receive a detailed quote within 48 hours after we confirm measurements and scope.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-forest-100 p-3 rounded-full flex-shrink-0">
                      <Phone size={24} className="text-forest-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">Phone</h4>
                      <a href="tel:+27799352223" className="text-gray-600 hover:text-forest-600 transition-colors font-medium">+27 79 935 2223</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-forest-100 p-3 rounded-full flex-shrink-0">
                      <Mail size={24} className="text-forest-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">Email</h4>
                      <a href="mailto:info@kdinteriors.co.za" className="text-gray-600 hover:text-forest-600 transition-colors font-medium">info@kdinteriors.co.za</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-forest-100 p-3 rounded-full flex-shrink-0">
                      <MapPin size={24} className="text-forest-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">Service Area</h4>
                      <span className="text-gray-600 font-medium">Cape Town & Surrounding Areas</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-forest-700 text-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Free Consultation</h3>
                <p className="mb-6 text-forest-100">Book your free consultation today and let us help you transform your space into something extraordinary.</p>
                <ul className="list-disc pl-5 space-y-2 text-forest-100">
                  <li>No obligation consultation</li>
                  <li>Expert advice and recommendations</li>
                  <li>Detailed quote and timeline</li>
                  <li>Flexible scheduling</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>WhatsApp Us</span>
                </button>
                <button
                  onClick={handleCallClick}
                  className="bg-white hover:bg-gray-100 text-forest-700 font-bold py-3 px-6 rounded-lg transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3 border-2 border-forest-600"
                >
                  <Phone size={20} />
                  <span>Call Us Now</span>
                </button>
              </div>
            </div>

            {/* Right Column - Detailed Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Request Your Free Quote</h3>
              <p className="text-gray-600 mb-6">Tell us about your project and we'll get back to you within 24 hours with a detailed consultation.</p>
              <form id={formIds.contactForm} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor={formIds.contactName} className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id={formIds.contactName}
                      name="name"
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-forest-600 focus:outline-none transition-colors duration-200 ${
                        formErrors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor={formIds.contactEmail} className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id={formIds.contactEmail}
                      name="email"
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-forest-600 focus:outline-none transition-colors duration-200 ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor={formIds.contactPhone} className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id={formIds.contactPhone}
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-forest-600 focus:outline-none transition-colors duration-200"
                      placeholder="e.g. 079 123 4567"
                    />
                  </div>
                  <div>
                    <label htmlFor={formIds.contactProjectType} className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
                    <select
                      id={formIds.contactProjectType}
                      name="projectType"
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-forest-600 focus:outline-none transition-colors duration-200 ${
                        formErrors.projectType ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a service</option>
                      <option value="kitchen">Kitchen Renovations</option>
                      <option value="bedroom">Bedroom Renovations</option>
                      <option value="bathroom">Bathroom Renovations</option>
                      <option value="commercial" selected>Commercial Renovations</option>
                      <option value="other">Other</option>
                    </select>
                    {formErrors.projectType && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.projectType}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor={formIds.contactMessage} className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                  <textarea
                    id={formIds.contactMessage}
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-forest-600 focus:outline-none transition-colors duration-200 ${
                      formErrors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isFormSubmitting}
                  className="w-full bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isFormSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    <>
                      <CheckCircle size={20} className="inline-block" />
                      Send Message
                    </>
                  )}
                </button>
                {formErrors.submit && (
                  <p className="mt-2 text-sm text-red-600 text-center">{formErrors.submit}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingCommercial;

