import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Shield, Clock, CheckCircle, Phone, Mail, MapPin, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import heroBg from '../assets/home/home-1.jpg';
import about1 from '../assets/home/home-2.jpg';
import about2 from '../assets/home/home-3.jpg';
import serviceKitchen from '../assets/home/home-4.jpg';
import serviceBedroom from '../assets/home/home-5.jpg';
import serviceBathroom from '../assets/home/home-6.jpg';
import serviceCommercial from '../assets/home/home-7.jpg';
import { fetchGoogleReviews, fallbackReviews, GoogleReview } from '../services/googlePlaces';

type Service = {
  title: string;
  description: string;
  image: string;
  link: string;
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [specialtyIndex, setSpecialtyIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoading(true);
        console.log('Loading reviews...');
        const googleReviews = await fetchGoogleReviews();
        console.log('Reviews loaded:', googleReviews);
        if (googleReviews.length > 0) {
          setReviews(googleReviews);
        } else {
          console.log('No reviews found, using fallback');
          setReviews(fallbackReviews);
        }
      } catch (error) {
        console.error('Error loading reviews:', error);
        setReviews(fallbackReviews);
      } finally {
        setLoading(false);
        console.log('Loading complete');
      }
    };

    loadReviews();
  }, []);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (type: 'specialties' | 'testimonials') => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      if (type === 'specialties') nextSpecialty();
      if (type === 'testimonials') nextTestimonial();
    }
    if (isRightSwipe) {
      if (type === 'specialties') prevSpecialty();
      if (type === 'testimonials') prevTestimonial();
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Convert FormData to object for JSON submission
    const data: { [key: string]: any } = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    // Add Web3Forms access key
    data.access_key = "1a5b610a-5454-42da-89ae-40d3d3820e44";

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
      } else {
        alert('There was an error submitting the form.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was a network error. Please try again.');
    }
  };

  const services: Service[] = [
    {
      title: "Kitchen Renovations",
      description: "Transform your kitchen into the heart of your home with custom cabinetry and premium finishes.",
      image: serviceKitchen,
      link: "/kitchens"
    },
    {
      title: "Bedroom Renovations",
      description: "Create your perfect sanctuary with built-in wardrobes and custom bedroom furniture.",
      image: serviceBedroom,
      link: "/bedrooms"
    },
    {
      title: "Bathroom Renovations",
      description: "Design luxurious bathrooms that combine style, functionality, and lasting quality.",
      image: serviceBathroom,
      link: "/bathrooms"
    },
    {
      title: "Commercial Renovations",
      description: "Expert commercial interior design and fit-out solutions for businesses of all sizes, creating functional and inspiring workspaces.",
      image: serviceCommercial,
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

  const trustBadges = [
    { icon: Shield, title: "Fully Licensed & Insured", desc: "Complete peace of mind" },
    { icon: Award, title: "Award-Winning Designs", desc: "Industry recognition" },
    { icon: Users, title: "500+ Satisfied Clients", desc: "Trusted across Cape Town" },
    { icon: Clock, title: "30+ Years Experience", desc: "Proven expertise" }
  ];

  const nextSpecialty = () => {
    setSpecialtyIndex((prev) => (prev + 1) % services.length);
  };

  const prevSpecialty = () => {
    setSpecialtyIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen min-h-[100svh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg}
            alt="Luxury Kitchen Interior"
            className="w-full h-full min-h-screen min-h-[100svh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center md:justify-end min-h-screen min-h-[100svh]">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-8 md:gap-14 w-full pb-8 md:pb-24">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-2 md:mb-6">
              <span className="text-white">Beautiful Renovations.</span>
              <span className="block text-white">Inspired Living.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed mb-4 md:mb-8">
              From kitchens to bedrooms and bathrooms, we create bespoke spaces that reflect your style and enhance your lifestyle.
            </p>
            <div className="flex flex-row flex-wrap gap-3 justify-center mt-8 md:mt-14">
              <a 
                href="/#contact-section"
                className="bg-forest-700 text-white px-5 py-2 md:px-10 md:py-4 rounded-lg hover:bg-forest-800 transition-all duration-300 font-semibold text-base md:text-lg flex items-center justify-center space-x-2 group shadow-2xl"
              >
                <span>Get Your Free Quote</span>
                <ArrowRight size={18} className="md:hidden group-hover:translate-x-1 transition-transform" />
                <ArrowRight size={20} className="hidden md:inline group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+27799352223"
                className="border-2 border-white text-white px-5 py-2 md:px-10 md:py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-base md:text-lg flex items-center justify-center space-x-2"
              >
                <Phone size={18} className="md:hidden" />
                <Phone size={20} className="hidden md:inline" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 group-hover:bg-forest-700 transition-colors duration-300">
                  <badge.icon size={32} className="text-forest-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-forest-900 mb-2">{badge.title}</h3>
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
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg">
                  With over 30 years of experience, we specialise in bespoke kitchens, bedrooms, bathrooms, and cabinetry, delivering tailored solutions and exceptional craftsmanship to transform your home or business.
                </p>
                <p className="text-base md:text-lg">
                  We offer modern, made-to-measure cabinetry tailored to your exact specifications. Our extensive range of materials and finishes includes melamine, gloss and matt wraps, PVC, sprayed 'duco', solid woods, and veneers. Whether you're renovating or starting from scratch, we provide premium solutions to suit your style, requirements, and budget – all at competitive prices.
                </p>
              </div>
              <div>
                <img 
                  src={about1}
                  alt="Modern Kitchen Interior by KD Interiors"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Block 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-last space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg">
                  In addition to cabinetry, we offer complete turnkey renovation services. Our trusted team of contractors manages every aspect of your project, from building work and electricals to plumbing, flooring, and painting. We're here to ensure a smooth, stress-free experience from beginning to end.
                </p>
                <p className="text-base md:text-lg">
                  We also offer kitchen remodelling services for those looking to refresh their existing space. Whether it's replacing doors and countertops or adding extra units, we help transform your kitchen with thoughtful, stylish upgrades that reflect your vision.
                </p>
              </div>
              <div>
                <img 
                  src={about2}
                  alt="Modern Kitchen Interior by KD Interiors"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Specialties Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Specialties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We specialise in creating custom interior solutions that transform your living spaces into works of art.</p>
          </div>
          
          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="flex justify-between items-center mb-8">
              <div></div>
              <div className="flex space-x-2">
                <button
                  onClick={prevSpecialty}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <ChevronLeft size={20} className="text-gray-600" />
                </button>
                <button
                  onClick={nextSpecialty}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <ChevronRight size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
            
            <div 
              className="max-w-4xl mx-auto"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={() => onTouchEnd('specialties')}
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-16">
                {services.slice(specialtyIndex, specialtyIndex + 1).map((service, index) => (
                  <div key={index} className="group text-left">
                    <Link to={service.link} className="block relative mb-6 overflow-hidden rounded-2xl shadow-xl focus:outline-none focus:ring-2 focus:ring-forest-700">
                      <img src={service.image.replace('Avif', '')} alt={service.title} className="w-full aspect-[1/1] object-cover transition-transform duration-300 group-hover:scale-105 max-w-full" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      </div>
                    </Link>
                    <p className="text-gray-700 mb-4 text-lg leading-relaxed">{service.description}</p>
                    <Link to={service.link} className="font-semibold text-forest-700 hover:text-forest-800 flex items-center group-hover:text-forest-800 transition-colors">
                      View Gallery
                      <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:block max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {services.map((service, index) => (
                <div key={index} className="group text-left">
                  <Link to={service.link} className="block relative mb-6 overflow-hidden rounded-2xl shadow-xl focus:outline-none focus:ring-2 focus:ring-forest-700">
                    <img src={service.image.replace('Avif', '')} alt={service.title} className="w-full aspect-[1/1] object-cover transition-transform duration-300 group-hover:scale-105 max-w-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                  </Link>
                  <p className="text-gray-700 mb-4 text-lg leading-relaxed">{service.description}</p>
                  <Link to={service.link} className="font-semibold text-forest-700 hover:text-forest-800 flex items-center group-hover:text-forest-800 transition-colors">
                    View Gallery
                    <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Proven Process Section */}
      <section className="py-20 bg-gray-50" style={{ display: 'none' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we guide you through every step of your transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from satisfied clients who have transformed their spaces with Kitchen Designs & Interiors.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-forest-600"></div>
              <p className="mt-4 text-gray-600">Loading reviews...</p>
            </div>
          ) : (
            <>
              {/* Mobile Carousel */}
              <div className="md:hidden relative">
                <div className="flex justify-between items-center mb-8">
                  <div></div>
                  <div className="flex space-x-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <ChevronLeft size={20} className="text-gray-600" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <ChevronRight size={20} className="text-gray-600" />
                    </button>
                  </div>
                </div>

                <div 
                  className="grid grid-cols-1 gap-8"
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={() => onTouchEnd('testimonials')}
                >
                  {reviews.slice(testimonialIndex, testimonialIndex + 1).map((review, index) => (
                    <div key={index} className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                      <div className="text-forest-500 mb-4">
                        <Quote size={40} />
                      </div>
                      <div className="flex mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={20} className="text-forest-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 italic flex-grow">"{review.text}"</p>
                      <div className="mt-auto">
                        {review.profile_photo_url ? (
                          <img src={review.profile_photo_url} alt={review.author_name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                        ) : (
                          <div className="w-16 h-16 rounded-full mx-auto mb-4 bg-forest-100 flex items-center justify-center">
                            <span className="text-forest-600 font-semibold text-lg">
                              {review.author_name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        )}
                        <h4 className="font-semibold text-gray-800">{review.author_name}</h4>
                        <p className="text-sm text-gray-500">{review.relative_time_description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {reviews.slice(0, 4).map((review, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-forest-500 mb-4">
                      <Quote size={40} />
                    </div>
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-forest-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic flex-grow">"{review.text}"</p>
                    <div className="mt-auto">
                      {review.profile_photo_url ? (
                        <img src={review.profile_photo_url} alt={review.author_name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                      ) : (
                        <div className="w-16 h-16 rounded-full mx-auto mb-4 bg-forest-100 flex items-center justify-center">
                          <span className="text-forest-600 font-semibold text-lg">
                            {review.author_name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                      <h4 className="font-semibold text-gray-800">{review.author_name}</h4>
                      <p className="text-sm text-gray-500">{review.relative_time_description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Your Free Quote</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to transform your space? Contact us today for a free consultation and quote. We'll help bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Request Your Free Quote</h3>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:outline-none"
                    >
                      <option value="">Select a project type</option>
                      <option value="kitchen">Kitchen Renovations</option>
                      <option value="bedroom">Bedroom Renovations</option>
                      <option value="bathroom">Bathroom Renovations</option>
                      <option value="commercial">Commercial Renovations</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Your Request
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Contact Details</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 p-3 rounded-full flex-shrink-0">
                      <Phone size={24} className="text-forest-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">Phone</h4>
                      <a href="tel:+27799352223" className="text-gray-600 hover:text-forest-600 transition-colors">+27 79 935 2223</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 p-3 rounded-full flex-shrink-0">
                      <Mail size={24} className="text-forest-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">Email</h4>
                      <a href="mailto:info@kdinteriors.co.za" className="text-gray-600 hover:text-forest-600 transition-colors">info@kdinteriors.co.za</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 p-3 rounded-full flex-shrink-0">
                      <Clock size={24} className="text-forest-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">Business Hours</h4>
                      <p className="text-gray-600">Monday to Friday: 8AM – 5PM</p>
                      <p className="text-gray-600">Saturday: 9AM – 1PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 p-3 rounded-full flex-shrink-0">
                      <MapPin size={24} className="text-forest-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">Location</h4>
                      <p className="text-gray-600">Cape Town & Surrounding Areas</p>
                      <p className="text-sm text-gray-500">By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - You can embed a map here if needed */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-forest-600 to-forest-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free consultation and quote today. Let's bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/#contact-section"
              className="bg-white text-forest-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight size={20} />
            </a>
            <a 
              href="tel:+27799352223"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-forest-600 transition-colors font-semibold text-lg inline-flex items-center justify-center space-x-2"
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