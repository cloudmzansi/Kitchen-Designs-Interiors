import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Hammer, Clock, Shield, DollarSign, Calendar, Ruler, Wrench, MapPin, Phone, Mail } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { submitToWeb3Forms } from '../utils/web3forms';
import heroBg from '../assets/home/kd-interiors-hero-kitchen.jpg';
import heroBgAvif from '../assets/home/kd-interiors-hero-kitchen.avif';

// Kitchen images
import kitchenModernWhiteCabinets from '../assets/kitchens/Slider 1/kitchen-modern-white-cabinets.jpg';
import kitchenModernWhiteCabinetsAvif from '../assets/kitchens/Slider 1/kitchen-modern-white-cabinets.avif';
import kitchenIslandDesign from '../assets/kitchens/Slider 1/kitchen-island-design.jpg';
import kitchenIslandDesignAvif from '../assets/kitchens/Slider 1/kitchen-island-design.avif';
import kitchenQuartzCountertop from '../assets/kitchens/Slider 1/kitchen-quartz-countertop.jpg';
import kitchenQuartzCountertopAvif from '../assets/kitchens/Slider 1/kitchen-quartz-countertop.avif';
import kitchenLuxuryDesign from '../assets/kitchens/Slider 2/kitchen-luxury-design.jpg';
import kitchenLuxuryDesignAvif from '../assets/kitchens/Slider 2/kitchen-luxury-design.avif';

// Bedroom images
import bedroomMasterSuite from '../assets/bedrooms/Slider 1/bedroom-master-suite.jpg';
import bedroomMasterSuiteAvif from '../assets/bedrooms/Slider 1/bedroom-master-suite.avif';
import bedroomCustomWardrobe from '../assets/bedrooms/Slider 1/bedroom-custom-wardrobe.jpg';
import bedroomCustomWardrobeAvif from '../assets/bedrooms/Slider 1/bedroom-custom-wardrobe.avif';

// Bathroom images
import bathroomLuxuryDesign from '../assets/bathrooms/Slider 1/bathroom-luxury-design.jpg';
import bathroomLuxuryDesignAvif from '../assets/bathrooms/Slider 1/bathroom-luxury-design.avif';
import bathroomCustomVanity from '../assets/bathrooms/Slider 1/bathroom-custom-vanity.jpg';
import bathroomCustomVanityAvif from '../assets/bathrooms/Slider 1/bathroom-custom-vanity.avif';

type ProjectImage = {
  image: string;
  imageAvif?: string;
  caption: string;
  type: 'kitchen' | 'bedroom' | 'bathroom';
};

const Landing = () => {
  const navigate = useNavigate();
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Validate required fields
    const errors: { [key: string]: string } = {};
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const projectType = formData.get('projectType') as string;
    const message = formData.get('message') as string;

    // Check if this is the hero form or contact form
    const isHeroForm = form.id === 'landing-form';
    const isContactForm = form.id === 'landing-contact-form';

    // Common validations
    if (!name || name.trim() === '') {
      errors.name = 'Name is required';
    }

    // Hero form specific validations
    if (isHeroForm) {
      if (!phone || phone.trim() === '') {
        errors.phone = 'Phone number is required';
      }
      if (!email || email.trim() === '') {
        errors.email = 'Email address is required';
      }
      // Message is optional for hero form
    }

    // Contact form specific validations
    if (isContactForm) {
      if (!email || email.trim() === '') {
        errors.email = 'Email address is required';
      }
      if (!projectType || projectType === '') {
        errors.projectType = 'Please select a project type';
      }
      if (!message || message.trim() === '') {
        errors.message = 'Project details are required';
      }
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsFormSubmitting(true);

    // Use shared Web3Forms utility function
    await submitToWeb3Forms({
      formData,
      onSuccess: () => {
        // Redirect to thank-you page for Google Ads conversion tracking
        navigate('/thank-you');
      },
      onError: (errorMsg) => {
        setFormErrors({ submit: errorMsg });
        setIsFormSubmitting(false);
      },
    });
  };

  const valueProps = [
    {
      icon: Hammer,
      title: 'Custom Cabinetry',
      description: 'Made-to-measure solutions tailored to your exact space and style preferences.'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Efficient project management ensures your renovation is completed on time, every time.'
    },
    {
      icon: Shield,
      title: 'Quality Craftsmanship',
      description: '30+ years of expertise delivering premium finishes and lasting quality.'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Clear, upfront quotes with no hidden costs. Competitive rates for premium work.'
    }
  ];

  const projects: ProjectImage[] = [
    {
      image: kitchenModernWhiteCabinets,
      imageAvif: kitchenModernWhiteCabinetsAvif,
      caption: 'Sea Point Apartment Kitchen Upgrade – 2 Weeks',
      type: 'kitchen'
    },
    {
      image: kitchenIslandDesign,
      imageAvif: kitchenIslandDesignAvif,
      caption: 'Camps Bay Modern Kitchen Renovation – 3 Weeks',
      type: 'kitchen'
    },
    {
      image: kitchenQuartzCountertop,
      imageAvif: kitchenQuartzCountertopAvif,
      caption: 'Green Point Luxury Kitchen Transformation – 4 Weeks',
      type: 'kitchen'
    },
    {
      image: bedroomMasterSuite,
      imageAvif: bedroomMasterSuiteAvif,
      caption: 'Claremont Master Bedroom Suite – 2 Weeks',
      type: 'bedroom'
    },
    {
      image: bedroomCustomWardrobe,
      imageAvif: bedroomCustomWardrobeAvif,
      caption: 'Rondebosch Custom Wardrobe Installation – 1 Week',
      type: 'bedroom'
    },
    {
      image: bathroomLuxuryDesign,
      imageAvif: bathroomLuxuryDesignAvif,
      caption: 'Observatory Luxury Bathroom Renovation – 3 Weeks',
      type: 'bathroom'
    },
    {
      image: kitchenLuxuryDesign,
      imageAvif: kitchenLuxuryDesignAvif,
      caption: 'City Bowl Premium Kitchen Design – 4 Weeks',
      type: 'kitchen'
    },
    {
      image: bathroomCustomVanity,
      imageAvif: bathroomCustomVanityAvif,
      caption: 'Sea Point Modern Bathroom Upgrade – 2 Weeks',
      type: 'bathroom'
    }
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Book Your Free Consultation',
      description: 'Submit the quote form — we confirm within 2 hours.',
      icon: Calendar
    },
    {
      number: '2',
      title: 'On-Site Visit & Measurements',
      description: 'We assess your space, discuss designs, and plan materials.',
      icon: Ruler
    },
    {
      number: '3',
      title: 'Build & Install',
      description: 'Professional installers complete your renovation with warranty protection.',
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
      {/* KD Logo at Top - Non-clickable - Aligned with "Kitchen" in headline */}
      <div className="absolute top-24 sm:top-28 md:top-32 lg:top-12 left-4 sm:left-6 md:left-8 lg:left-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] xl:left-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] 2xl:left-[max(2rem,calc((100vw-1280px)/2+2rem))] z-50">
        <div className="w-12 h-12 bg-gradient-to-br from-forest-700 to-forest-600 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-2xl tracking-tighter" style={{letterSpacing: '-0.15em'}}>KD</span>
        </div>
      </div>

      {/* Hero Section */}
      <section id="quote-form" className="relative min-h-screen min-h-[100svh] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 w-full">
          <picture>
            <source srcSet={heroBgAvif} type="image/avif" />
            <img 
              src={heroBg}
              alt="Kitchen Design"
              width={1920}
              height={1080}
              className="w-full h-full min-h-screen min-h-[100svh] object-cover transition-opacity duration-1000"
            />
          </picture>
          {/* Enhanced gradient overlay with darker area behind headline */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>
          {/* Additional darkening layer behind headline area */}
          <div className="absolute top-0 left-0 right-0 h-[40%] bg-black/5 lg:bg-black/7"></div>
        </div>
        
        {/* Two-Column Content Layout */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 lg:py-20 min-h-screen min-h-[100svh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-8 lg:gap-12 items-start lg:items-center min-h-[calc(100vh-3rem)] sm:min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-6rem)]">
            
            {/* Left Column - Marketing Content */}
            <div className="relative z-10 text-white space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 pt-20 sm:pt-24 md:pt-28 lg:pt-0 text-center lg:text-left">
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] sm:leading-tight lg:leading-[1.15]">
                Kitchen & Home Renovations in Cape Town — Made Easy
              </h1>
              
              {/* Benefit Sub-headline */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-forest-300 leading-none pt-1 sm:pt-0">
                Free Design Consultation. Fast Quotes.
              </p>
              
              {/* Specialists Line */}
              <p className="text-sm sm:text-base md:text-lg text-white/90 leading-tight -mt-2 sm:-mt-3 md:-mt-4 pt-0">
                Specialists in Kitchen Renovations & Custom Cabinetry in Cape Town
              </p>
              
              {/* Benefit Statement */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0 pt-1 sm:pt-0">
                Transform your kitchen, bathroom, or bedroom with custom cabinetry and premium finishes. Get a free on-site consultation and a detailed quote within 48 hours. Serving Cape Town and nearby suburbs.
              </p>
              
              {/* Trust Badges */}
              <div className="space-y-3 sm:space-y-3 md:space-y-3.5 pt-3 sm:pt-4 md:pt-5">
                <div className="flex items-start justify-center lg:justify-start space-x-2.5 sm:space-x-3">
                  <CheckCircle size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-forest-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">Full Warranty on Materials & Workmanship</span>
                </div>
                <div className="flex items-start justify-center lg:justify-start space-x-2.5 sm:space-x-3">
                  <CheckCircle size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-forest-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">Free On-Site Design Consultation in Cape Town</span>
                </div>
                <div className="flex items-start justify-center lg:justify-start space-x-2.5 sm:space-x-3">
                  <CheckCircle size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-forest-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">Licensed & Insured Professional Installers</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="relative z-10 lg:pl-8 mt-8 sm:mt-10 md:mt-8 lg:mt-0">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-5 sm:p-6 md:p-6 lg:p-7 max-w-lg lg:max-w-md mx-auto lg:mx-0">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-5 text-center lg:text-left">
                  Get Your Free Quote Today
                </h2>
                
                <form id="landing-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="landing-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="landing-name"
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
                    <label htmlFor="landing-phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="landing-phone"
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
                  </div>
                  
                  {/* Email Field */}
                  <div>
                    <label htmlFor="landing-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="landing-email"
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
                    <label htmlFor="landing-message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="landing-message"
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
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3 min-w-[200px]"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-6 h-6"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>WhatsApp Us</span>
              </button>
              <button
                onClick={handleCallClick}
                className="bg-white hover:bg-gray-100 text-forest-700 font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3 min-w-[200px]"
              >
                <Phone size={24} />
                <span>Call Us Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Homeowners Choose Us */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Homeowners Choose Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted expertise, quality craftsmanship, and transparent service you can rely on.
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

      {/* Section 3: Featured Projects Gallery */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Real renovations completed across Cape Town with premium finishes and expert craftsmanship.
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
                  {project.imageAvif && <source srcSet={project.imageAvif} type="image/avif" />}
                  <img 
                    src={project.image}
                    alt={project.caption}
                    width={400}
                    height={400}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </picture>
                <div className="p-4 sm:p-6 bg-white">
                  <p className="text-gray-800 text-sm sm:text-base font-semibold leading-tight">{project.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox for Project Images */}
          <Lightbox
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
        </div>
      </section>

      {/* Section 4: Simple 3-Step Process */}
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
              <div key={index} className="text-center">
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

      {/* Section 6: Contact Section */}
      <section id="contact-section" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Ready to Transform Your Home?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Get a fast, detailed renovation quote within 48 hours. Contact us for a free consultation and detailed quote tailored to your project requirements.
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
              <form id="landing-contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="contact-name"
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
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="contact-email"
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
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-forest-600 focus:outline-none transition-colors duration-200"
                      placeholder="e.g. 079 123 4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-project-type" className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
                    <select
                      id="contact-project-type"
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
                      <option value="commercial">Commercial Renovations</option>
                      <option value="other">Other</option>
                    </select>
                    {formErrors.projectType && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.projectType}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                  <textarea
                    id="contact-message"
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

export default Landing;

