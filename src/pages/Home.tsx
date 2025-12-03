import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Shield, Clock, CheckCircle, Phone, Mail, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import heroBg from '../assets/home/kd-interiors-hero-kitchen.jpg';
import heroBgAvif from '../assets/home/kd-interiors-hero-kitchen.avif';
import about1 from '../assets/home/kd-interiors-modern-bathroom.jpg';
import about1Avif from '../assets/home/kd-interiors-modern-bathroom.avif';
import about2 from '../assets/home/kd-interiors-luxury-bedroom.jpg';
import about2Avif from '../assets/home/kd-interiors-luxury-bedroom.avif';
import serviceKitchen from '../assets/home/kd-interiors-commercial-office.jpg';
import serviceKitchenAvif from '../assets/home/kd-interiors-commercial-office.avif';
import serviceBedroom from '../assets/home/kd-interiors-custom-cabinetry.jpg';
import serviceBedroomAvif from '../assets/home/kd-interiors-custom-cabinetry.avif';
import serviceBathroom from '../assets/home/kd-interiors-storage-solutions.jpg';
import serviceBathroomAvif from '../assets/home/kd-interiors-storage-solutions.avif';
import serviceCommercial from '../assets/home/kd-interiors-design-process.jpg';
import serviceCommercialAvif from '../assets/home/kd-interiors-design-process.avif';

type Service = {
  title: string;
  description: string;
  image: string;
  imageAvif?: string;
  link: string;
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

type TrustBadge = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [servicesIndex, setServicesIndex] = useState(0);
  const [processIndex, setProcessIndex] = useState(0);
  const [trustIndex, setTrustIndex] = useState(0);
  const [whyChooseIndex, setWhyChooseIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const heroImages = [heroBgAvif];
  const heroImagesFallback = [heroBg];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Touch handling functions
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (carouselType: 'services' | 'process' | 'trust' | 'whyChoose') => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      // Swipe left - next item
      switch (carouselType) {
        case 'services':
          setServicesIndex((prev) => (prev + 1) % services.length);
          break;
        case 'process':
          setProcessIndex((prev) => (prev + 1) % process.length);
          break;
        case 'trust':
          setTrustIndex((prev) => (prev + 1) % trustBadges.length);
          break;
        case 'whyChoose':
          setWhyChooseIndex((prev) => (prev + 1) % 6); // 6 items in Why Choose Us
          break;
      }
    } else if (isRightSwipe) {
      // Swipe right - previous item
      switch (carouselType) {
        case 'services':
          setServicesIndex((prev) => (prev - 1 + services.length) % services.length);
          break;
        case 'process':
          setProcessIndex((prev) => (prev - 1 + process.length) % process.length);
          break;
        case 'trust':
          setTrustIndex((prev) => (prev - 1 + trustBadges.length) % trustBadges.length);
          break;
        case 'whyChoose':
          setWhyChooseIndex((prev) => (prev - 1 + 6) % 6); // 6 items in Why Choose Us
          break;
      }
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Validate required fields - check which form is being submitted
    const errors: { [key: string]: string } = {};
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const area = formData.get('area') as string;
    const projectType = formData.get('projectType') as string;
    const message = formData.get('message') as string;
    
    // Check if this is the hero form (has area field) or contact form (has message field)
    const isHeroForm = form.id === 'hero-form' || (area !== null && message === null);
    const isContactForm = form.id === 'contact-form' || (message !== null && area === null);

    // Common validations
    if (!name || name.trim() === '') {
      errors.name = 'Name is required';
    }
    if (!projectType || projectType === '') {
      errors.projectType = 'Please select a project type';
    }

    // Hero form specific validations
    if (isHeroForm) {
      if (!phone || phone.trim() === '') {
        errors.phone = 'Phone number is required';
      }
      if (!area || area === '') {
        errors.area = 'Please select your area';
      }
    }

    // Contact form specific validations
    if (isContactForm) {
      if (!email || email.trim() === '') {
        errors.email = 'Email address is required';
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

    // Convert FormData to object for JSON submission
    const data: { [key: string]: any } = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    // Add Web3Forms access key from environment variable
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error('Web3Forms access key not found in environment variables');
      setFormErrors({ submit: 'Form submission is not configured. Please contact support.' });
      setIsFormSubmitting(false);
      return;
    }
    data.access_key = accessKey;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsModalOpen(true);
        form.reset();
        setFormErrors({});
      } else {
        setFormErrors({ submit: 'There was an error submitting the form. Please try again.' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormErrors({ submit: 'There was a network error. Please try again.' });
    } finally {
      setIsFormSubmitting(false);
    }
  };

  const services: Service[] = [
    {
      title: "Kitchen Renovations",
      description: "Transform your kitchen into the heart of your home with custom cabinetry and premium finishes.",
      image: serviceKitchen,
      imageAvif: serviceKitchenAvif,
      link: "/kitchens"
    },
    {
      title: "Bedroom Renovations",
      description: "Create your perfect sanctuary with built-in wardrobes and custom bedroom furniture.",
      image: serviceBedroom,
      imageAvif: serviceBedroomAvif,
      link: "/bedrooms"
    },
    {
      title: "Bathroom Renovations",
      description: "Design luxurious bathrooms that combine style, functionality, and lasting quality.",
      image: serviceBathroom,
      imageAvif: serviceBathroomAvif,
      link: "/bathrooms"
    },
    {
      title: "Commercial Renovations",
      description: "Expert commercial interior design and fit-out solutions for businesses of all sizes, creating functional and inspiring workspaces.",
      image: serviceCommercial,
      imageAvif: serviceCommercialAvif,
      link: "/commercial"
    }
  ];

  const process: ProcessStep[] = [
    {
      step: "01",
      title: "Free Consultation",
      description: "We visit your home to understand your vision and provide expert recommendations."
    },
    {
      step: "02",
      title: "Custom Design",
      description: "Our designers create detailed plans and 3D visualisations tailored to your space."
    },
    {
      step: "03",
      title: "Expert Installation",
      description: "Our skilled craftsmen bring your vision to life with precision and care."
    },
    {
      step: "04",
      title: "Final Walkthrough",
      description: "We ensure every detail meets our high standards and your complete satisfaction."
    }
  ];

  const trustBadges: TrustBadge[] = [
    { icon: Shield, title: "Fully Licensed & Insured", desc: "Complete peace of mind" },
    { icon: Award, title: "Award-Winning Designs", desc: "Industry recognition" },
    { icon: Users, title: "500+ Satisfied Clients", desc: "Trusted across Cape Town" },
    { icon: Clock, title: "30+ Years Experience", desc: "Proven expertise" }
  ];

  const nextServices = () => {
    setServicesIndex((prev) => (prev + 1) % services.length);
  };

  const prevServices = () => {
    setServicesIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const nextProcess = () => {
    setProcessIndex((prev) => (prev + 1) % process.length);
  };

  const prevProcess = () => {
    setProcessIndex((prev) => (prev - 1 + process.length) % process.length);
  };

  const nextTrust = () => {
    setTrustIndex((prev) => (prev + 1) % trustBadges.length);
  };

  const prevTrust = () => {
    setTrustIndex((prev) => (prev - 1 + trustBadges.length) % trustBadges.length);
  };

  const nextWhyChoose = () => {
    setWhyChooseIndex((prev) => (prev + 1) % 6);
  };

  const prevWhyChoose = () => {
    setWhyChooseIndex((prev) => (prev - 1 + 6) % 6);
  };

  return (
    <div className="bg-white">
      {/* Hero Section - Conversion Focused Two-Column Layout */}
      <section className="relative min-h-screen min-h-[100svh] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Image - Full Width */}
        <div className="absolute inset-0 z-0 w-full">
          <picture>
            <source srcSet={heroImages[currentImageIndex]} type="image/avif" />
            <img 
              src={heroImagesFallback[currentImageIndex]}
              alt="Kitchen Design"
              width={1920}
              height={1080}
              className="w-full h-full min-h-screen min-h-[100svh] object-cover transition-opacity duration-1000"
            />
          </picture>
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>
        </div>
        
        {/* Two-Column Content Layout */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 lg:py-20 min-h-screen min-h-[100svh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-8 lg:gap-12 items-start lg:items-center min-h-[calc(100vh-3rem)] sm:min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-6rem)]">
            
            {/* Left Column - Marketing Content */}
            <div className="relative z-10 text-white space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 pt-20 sm:pt-24 md:pt-28 lg:pt-0">
              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] sm:leading-tight">
                Kitchen & Home Renovations in Cape Town — Made Easy
              </h1>
              
              {/* Benefit Sub-headline */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-forest-300 leading-tight pt-1 sm:pt-0">
                Free Design Consultation. Fast Quotes.
              </p>
              
              {/* Benefit Statement */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl pt-1 sm:pt-0">
                Transform your kitchen, bathroom, or bedroom with custom cabinetry and premium finishes. Get a free on-site consultation and a detailed quote within 48 hours. Serving Cape Town and nearby suburbs.
              </p>
              
              {/* Trust Badges */}
              <div className="space-y-3 sm:space-y-3 md:space-y-3.5 pt-3 sm:pt-4 md:pt-5">
                <div className="flex items-start space-x-2.5 sm:space-x-3">
                  <CheckCircle size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-forest-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">Full Warranty on Materials & Workmanship</span>
                </div>
                <div className="flex items-start space-x-2.5 sm:space-x-3">
                  <CheckCircle size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-forest-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">Free On-Site Design Consultation in Cape Town</span>
                </div>
                <div className="flex items-start space-x-2.5 sm:space-x-3">
                  <CheckCircle size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-forest-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">Licensed & Insured Professional Installers</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="relative z-10 lg:pl-8 mt-4 sm:mt-6 md:mt-4 lg:mt-0">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-5 sm:p-6 md:p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6">
                  Get Your Free Quote Today
                </h2>
                
                <form id="hero-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-5">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="hero-name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-2 md:mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="hero-name"
                      name="name"
                      required
                      className={`w-full px-4 sm:px-4 py-3 sm:py-3 md:py-3.5 text-base border rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-forest-600 focus:outline-none transition-colors duration-200 ${
                        formErrors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {formErrors.name && (
                      <p className="mt-1.5 text-xs sm:text-sm text-red-600">{formErrors.name}</p>
                    )}
                  </div>
                  
                  {/* Phone / WhatsApp Field */}
                  <div>
                    <label htmlFor="hero-phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-2 md:mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="hero-phone"
                      name="phone"
                      required
                      className={`w-full px-4 sm:px-4 py-3 sm:py-3 md:py-3.5 text-base border rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-forest-600 focus:outline-none transition-colors duration-200 ${
                        formErrors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="e.g. 079 123 4567"
                    />
                    {formErrors.phone && (
                      <p className="mt-1.5 text-xs sm:text-sm text-red-600">{formErrors.phone}</p>
                    )}
                  </div>
                  
                  {/* Area Dropdown */}
                  <div>
                    <label htmlFor="hero-area" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-2 md:mb-2">
                      Your Area *
                    </label>
                    <select
                      id="hero-area"
                      name="area"
                      required
                      className={`w-full px-4 sm:px-4 py-3 sm:py-3 md:py-3.5 text-base border rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-forest-600 focus:outline-none transition-colors duration-200 ${
                        formErrors.area ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select your area</option>
                      <option value="Cape Town">Cape Town</option>
                      <option value="Stellenbosch">Stellenbosch</option>
                      <option value="Paarl">Paarl</option>
                      <option value="Somerset West">Somerset West</option>
                      <option value="Constantia">Constantia</option>
                      <option value="Camps Bay">Camps Bay</option>
                      <option value="Sea Point">Sea Point</option>
                      <option value="Claremont">Claremont</option>
                      <option value="Newlands">Newlands</option>
                      <option value="Rondebosch">Rondebosch</option>
                      <option value="Observatory">Observatory</option>
                      <option value="Woodstock">Woodstock</option>
                      <option value="Green Point">Green Point</option>
                      <option value="V&A Waterfront">V&A Waterfront</option>
                      <option value="Atlantic Seaboard">Atlantic Seaboard</option>
                      <option value="Other">Other</option>
                    </select>
                    {formErrors.area && (
                      <p className="mt-1.5 text-xs sm:text-sm text-red-600">{formErrors.area}</p>
                    )}
                  </div>
                  
                  {/* Project Type Dropdown */}
                  <div>
                    <label htmlFor="hero-project-type" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-2 md:mb-2">
                      Project Type *
                    </label>
                    <select
                      id="hero-project-type"
                      name="projectType"
                      required
                      className={`w-full px-4 sm:px-4 py-3 sm:py-3 md:py-3.5 text-base border rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-forest-600 focus:outline-none transition-colors duration-200 ${
                        formErrors.projectType ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select project type</option>
                      <option value="kitchen">Kitchen Renovations</option>
                      <option value="bedroom">Bedroom Renovations</option>
                      <option value="bathroom">Bathroom Renovations</option>
                      <option value="commercial">Commercial Renovations</option>
                      <option value="other">Other</option>
                    </select>
                    {formErrors.projectType && (
                      <p className="mt-1.5 text-xs sm:text-sm text-red-600">{formErrors.projectType}</p>
                    )}
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isFormSubmitting}
                    className="w-full bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white font-bold py-4 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none min-h-[48px] mt-2"
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
                  <p className="text-center text-xs sm:text-sm text-gray-600 mt-3 sm:mt-3">
                    We'll contact you within 2 hours. No obligations.
                  </p>
                  
                  {/* Error Message */}
                  {formErrors.submit && (
                    <p className="mt-2 text-xs sm:text-sm text-red-600 text-center">{formErrors.submit}</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Mobile Grid: 2x2 */}
          <div className="md:hidden grid grid-cols-2 gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-forest-100 to-forest-50 rounded-full mb-3 group-hover:bg-forest-700 transition-colors duration-300 border border-forest-200">
                  <badge.icon size={28} className="text-forest-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h2 className="text-base font-semibold text-forest-900 mb-1">{badge.title}</h2>
                <p className="text-forest-600 text-sm">{badge.desc}</p>
              </div>
            ))}
          </div>
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-forest-100 to-forest-50 rounded-full mb-4 group-hover:bg-forest-700 transition-colors duration-300 border border-forest-200">
                  <badge.icon size={32} className="text-forest-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h2 className="text-lg font-semibold text-forest-900 mb-2">{badge.title}</h2>
                <p className="text-forest-600 text-sm">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Kitchen Designs & Interiors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We are dedicated to delivering bespoke interiors and exceptional service, ensuring every project is tailored to your unique needs and finished to the highest standards.</p>
          </div>

          <div className="space-y-16">
            {/* Block 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Three Decades of Excellence</h3>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p className="text-base md:text-lg">
                    With over 30 years of experience, we specialise in bespoke kitchens, bedrooms, bathrooms, and cabinetry, delivering tailored solutions and exceptional craftsmanship to transform your home or business.
                  </p>
                  <p className="text-base md:text-lg">
                    We offer modern, made-to-measure cabinetry tailored to your exact specifications. Our extensive range of materials and finishes includes melamine, gloss and matt wraps, PVC, sprayed 'duco', solid woods, and veneers.
                  </p>
                </div>
              </div>
              <div>
                <picture>
                  <source srcSet={about1Avif} type="image/avif" />
                  <img 
                    src={about1}
                    alt="Modern bathroom interior design showcasing luxury fixtures and custom cabinetry"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl w-full max-w-md mx-auto h-auto object-cover"
                  />
                </picture>
              </div>
            </div>

            {/* Block 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-last space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Complete Turnkey Solutions</h3>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p className="text-base md:text-lg">
                    In addition to cabinetry, we offer complete turnkey renovation services. Our trusted team of contractors manages every aspect of your project, from building work and electricals to plumbing, flooring, and painting.
                  </p>
                  <p className="text-base md:text-lg">
                    We also offer kitchen remodelling services for those looking to refresh their existing space. Whether it's replacing doors and countertops or adding extra units, we help transform your kitchen with thoughtful, stylish upgrades.
                  </p>
                </div>
              </div>
              <div>
                <picture>
                  <source srcSet={about2Avif} type="image/avif" />
                  <img 
                    src={about2}
                    alt="Luxury bedroom design with custom wardrobes and premium finishes"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl w-full max-w-md mx-auto h-auto object-cover"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We specialise in creating custom interior solutions that transform your living spaces into works of art, tailored to your unique style and requirements.</p>
          </div>
          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="flex justify-between items-center mb-8">
              <div></div>
              <div className="flex space-x-2">
                <button
                  onClick={prevServices}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  aria-label="Previous service"
                >
                  <ChevronLeft size={20} className="text-gray-600" />
                </button>
                <button
                  onClick={nextServices}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  aria-label="Next service"
                >
                  <ChevronRight size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
            <div 
              className="max-w-4xl mx-auto"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => handleTouchEnd('services')}
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-16">
                {services.slice(servicesIndex, servicesIndex + 1).map((service, index) => (
                  <div key={index} className="group text-left">
                    <Link to={service.link} className="block relative mb-6 overflow-hidden rounded-2xl shadow-xl focus:outline-none focus:ring-2 focus:ring-forest-700">
                      <picture>
                        {service.imageAvif && <source srcSet={service.imageAvif} type="image/avif" />}
                        <img src={service.image} alt={`${service.title} - Custom interior design and renovation services`} width={400} height={400} className="w-full aspect-[1/1] object-cover transition-transform duration-300 group-hover:scale-105 max-w-full" />
                      </picture>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      </div>
                    </Link>
                    <p className="text-gray-700 mb-4 text-lg leading-relaxed">{service.description}</p>
                    <Link to={service.link} className="font-semibold text-forest-700 hover:text-forest-800 flex items-center group-hover:text-forest-800 transition-colors">
                      View {service.title} Gallery
                      <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Desktop Grid: 4 columns */}
          <div className="hidden md:block max-w-6xl mx-auto">
            <div className="grid grid-cols-4 gap-x-8 gap-y-16">
              {services.map((service, index) => (
                <div key={index} className="group text-left flex flex-col h-full">
                  <Link to={service.link} className="block relative mb-6 overflow-hidden rounded-2xl shadow-xl focus:outline-none focus:ring-2 focus:ring-forest-700">
                    <picture>
                      {service.imageAvif && <source srcSet={service.imageAvif} type="image/avif" />}
                      <img src={service.image} alt={`${service.title} - Custom interior design and renovation services`} width={400} height={400} className="w-full aspect-[1/1] object-cover transition-transform duration-300 group-hover:scale-105 max-w-full" />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                  </Link>
                  <p className="text-gray-700 mb-4 text-lg leading-relaxed flex-grow">{service.description}</p>
                  <Link to={service.link} className="font-semibold text-forest-700 hover:text-forest-800 flex items-center group-hover:text-forest-800 transition-colors mt-auto">
                    Learn More About {service.title}
                    <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Proven Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we guide you through every step of your transformation journey.
            </p>
          </div>

          {/* Mobile Grid: 2x2 */}
          <div className="md:hidden grid grid-cols-2 gap-6">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-forest-600 text-white rounded-full font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-600 text-white rounded-full font-bold text-xl mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="/#contact-section"
              className="bg-forest-600 text-white px-8 py-4 rounded-lg hover:bg-forest-700 transition-colors font-semibold text-lg inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Kitchen Designs & Interiors?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that 30+ years of expertise and dedication to quality brings to your project.
            </p>
          </div>

          {/* Mobile Grid: 2x2 */}
          <div className="md:hidden grid grid-cols-2 gap-6">
            {[
              {
                icon: CheckCircle,
                title: "30+ Years Experience",
                description: "Three decades of expertise in bespoke interior design and installation across Cape Town."
              },
              {
                icon: CheckCircle,
                title: "Complete Turnkey Service",
                description: "From design to installation, we handle every aspect of your project for a stress-free experience."
              },
              {
                icon: CheckCircle,
                title: "Premium Materials",
                description: "Access to the finest materials including melamine, gloss wraps, solid woods, and premium veneers."
              },
              {
                icon: CheckCircle,
                title: "Competitive Pricing",
                description: "High-quality craftsmanship and materials at competitive prices that fit your budget."
              },
              {
                icon: CheckCircle,
                title: "Local Expertise",
                description: "Deep understanding of Cape Town homes and local building requirements."
              },
              {
                icon: CheckCircle,
                title: "Free Consultation",
                description: "No-obligation consultation to discuss your vision and provide expert recommendations."
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-forest-600 text-white rounded-full mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-600 text-white rounded-full mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">30+ Years Experience</h3>
              <p className="text-gray-600">Three decades of expertise in bespoke interior design and installation across Cape Town.</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-600 text-white rounded-full mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Complete Turnkey Service</h3>
              <p className="text-gray-600">From design to installation, we handle every aspect of your project for a stress-free experience.</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-600 text-white rounded-full mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Materials</h3>
              <p className="text-gray-600">Access to the finest materials including melamine, gloss wraps, solid woods, and premium veneers.</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-600 text-white rounded-full mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">High-quality craftsmanship and materials at competitive prices that fit your budget.</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-600 text-white rounded-full mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Local Expertise</h3>
              <p className="text-gray-600">Deep understanding of Cape Town homes and local building requirements.</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-600 text-white rounded-full mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Free Consultation</h3>
              <p className="text-gray-600">No-obligation consultation to discuss your vision and provide expert recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (heading only, no reviews) */}
      {/* Removed "Ready to Transform Your Space?" section as requested */}

      {/* Contact Section */}
      <section id="contact-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ready to transform your space? Contact us for a free consultation and detailed quote tailored to your project requirements.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Request Your Free Quote</h3>
              <p className="text-gray-600 mb-6">Tell us about your project and we'll get back to you within 24 hours with a detailed consultation.</p>
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input type="text" id="name" name="name" required className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-forest-600 focus:outline-none transition-colors duration-200 ${
                      formErrors.name ? 'border-red-500' : 'border-gray-300'
                    }`} />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" required className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-forest-600 focus:outline-none transition-colors duration-200 ${
                      formErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`} />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-forest-600 focus:outline-none transition-colors duration-200" />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
                    <select id="projectType" name="projectType" required className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-forest-600 focus:outline-none transition-colors duration-200 ${
                      formErrors.projectType ? 'border-red-500' : 'border-gray-300'
                    }`}>
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                  <textarea id="message" name="message" required rows={5} placeholder="Tell us about your project, timeline, and any specific requirements..." className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-forest-600 focus:outline-none transition-colors duration-200 ${
                    formErrors.message ? 'border-red-500' : 'border-gray-300'
                  }`} />
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>
                  )}
                </div>
                <button type="submit" disabled={isFormSubmitting} className="w-full bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
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
                  <CheckCircle size={20} className="inline-block mr-2" />
                  Send Message
                    </>
                  )}
                </button>
                {formErrors.submit && (
                  <p className="mt-2 text-sm text-red-600 text-center">{formErrors.submit}</p>
                )}
              </form>
            </div>
            {/* Contact Information */}
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
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - You can embed a map here if needed */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-forest-50 via-white to-forest-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Get your free consultation and quote today. Let's bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/#contact-section"
              className="bg-gradient-to-r from-forest-600 to-forest-700 text-white px-8 py-4 rounded-lg hover:from-forest-700 hover:to-forest-800 transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Get Free Quote</span>
              <ArrowRight size={20} />
            </a>
            <a 
              href="tel:+27799352223"
              className="border-2 border-forest-600 text-forest-600 px-8 py-4 rounded-lg hover:bg-forest-600 hover:text-white transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call Now: +27 79 935 2223</span>
            </a>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-12 rounded-2xl shadow-xl max-w-lg mx-auto text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle size={64} className="text-green-500" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Thank You!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Your submission has been received. We'll be in touch shortly.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-gradient-to-r from-forest-600 to-forest-700 text-white px-8 py-4 rounded-lg hover:from-forest-700 hover:to-forest-800 transition-all duration-300 font-semibold text-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;