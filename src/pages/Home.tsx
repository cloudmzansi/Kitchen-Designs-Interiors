import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Shield, Clock, CheckCircle, Phone, Mail, MapPin, Quote } from 'lucide-react';

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

type Testimonial = {
  name: string;
  location: string;
  text: string;
  rating: number;
  avatar: string;
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsModalOpen(true);
        form.reset();
      } else {
        // Handle error case
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const services: Service[] = [
    {
      title: "Kitchen Renovations",
      description: "Transform your kitchen into the heart of your home with custom cabinetry and premium finishes.",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      link: "/kitchens"
    },
    {
      title: "Bedroom Solutions",
      description: "Create your perfect sanctuary with built-in wardrobes and custom bedroom furniture.",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      link: "/bedrooms"
    },
    {
      title: "Bathroom Renovations",
      description: "Design luxurious bathrooms that combine style, functionality, and lasting quality.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      link: "/bathrooms"
    },
    {
      title: "Commercial Interiors",
      description: "Expert commercial interior design and fit-out solutions for businesses of all sizes, creating functional and inspiring workspaces.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
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

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      location: "Sandton",
      text: "KD Interiors transformed our outdated kitchen into a stunning modern space. The attention to detail and quality of work exceeded our expectations. Highly recommended!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Thompson",
      location: "Rosebank",
      text: "Professional, reliable, and incredibly talented. The team delivered exactly what they promised, on time and within budget. Our kitchen is now the heart of our home.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/62.jpg"
    },
    {
      name: "Lisa Anderson",
      location: "Melville",
      text: "From the initial consultation to the final installation, KD Interiors provided exceptional service. Their design expertise and craftsmanship are truly outstanding.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/75.jpg"
    },
    {
      name: "David Wilson",
      location: "Fourways",
      text: "The team at KD Interiors turned our vision into reality. The project was completed smoothly, and the result is absolutely beautiful. We couldn't be happier!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/86.jpg"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Luxury Kitchen Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Custom Interiors
              <span className="block text-amber-400">Crafted to Perfection</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              From kitchens to bedrooms and bathrooms, we create bespoke spaces that reflect your style and enhance your lifestyle.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/#contact-section"
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-10 py-4 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 group shadow-2xl"
              >
                <span>Get Your Free Quote</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+27799352223"
                className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Fully Licensed & Insured", desc: "Complete peace of mind" },
              { icon: Award, title: "Award-Winning Designs", desc: "Industry recognition" },
              { icon: Users, title: "500+ Satisfied Clients", desc: "Trusted across Cape Town" },
              { icon: Clock, title: "30+ Years Experience", desc: "Proven expertise" }
            ].map((badge, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4 group-hover:bg-amber-600 transition-colors duration-300">
                  <badge.icon size={32} className="text-amber-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{badge.title}</h3>
                <p className="text-gray-600 text-sm">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About KD Interiors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Your vision, expertly crafted.</p>
          </div>

          <div className="space-y-16">
            {/* Block 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  With over 30 years of experience, we specialise in designing, manufacturing, and installing bespoke kitchens, bedroom wardrobes, bathroom vanities, and general cabinetry. Our skilled team is dedicated to delivering high-quality craftsmanship and attention to detail in every project we undertake.
                </p>
                <p>
                  We offer modern, made-to-measure cabinetry tailored to your exact specifications. Our extensive range of materials and finishes includes melamine, gloss and matt wraps, PVC, sprayed 'duco', solid woods, and veneers. Whether you're renovating or starting from scratch, we provide premium solutions to suit your style, requirements, and budget – all at competitive prices.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                  alt="Modern Kitchen Interior by KD Interiors"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Block 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-last space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  In addition to cabinetry, we offer complete turnkey renovation services. Our trusted team of contractors manages every aspect of your project, from building work and electricals to plumbing, flooring, and painting. We're here to ensure a smooth, stress-free experience from beginning to end.
                </p>
                <p>
                  We also offer kitchen remodelling services for those looking to refresh their existing space. Whether it's replacing doors and worktops or adding extra units, we help transform your kitchen with thoughtful, stylish upgrades that reflect your vision.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                  alt="Modern Kitchen Interior by KD Interiors"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Specialities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialise in creating custom interior solutions that transform your living spaces into works of art.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group text-center bg-white p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <Link to={service.link} className="block">
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                </Link>
                <p className="text-gray-600 mb-4 h-24 overflow-hidden">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold"
                >
                  View Gallery
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white hidden">
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 text-white rounded-full font-bold text-xl mb-6">
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
              className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-lg inline-flex items-center space-x-2"
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
              Don't just take our word for it. Hear from satisfied clients who have transformed their spaces with KD Interiors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="text-amber-500 mb-4">
                  <Quote size={40} />
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic flex-grow">"{testimonial.text}"</p>
                <div className="mt-auto">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="1a5b610a-5454-42da-89ae-40d3d3820e44" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. john.doe@example.com"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="e.g. +27 12 345 6789"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                      required
                      pattern="^(?:\\+27|0)\\d{9}$"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                      required
                    >
                      <option value="">Select a project type</option>
                      <option value="kitchen">Kitchen Renovations</option>
                      <option value="bedroom">Bedroom Solutions</option>
                      <option value="bathroom">Bathroom Renovations</option>
                      <option value="commercial">Commercial Interiors</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your vision, timeline, and any specific needs..."
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                  ></textarea>
                </div>
                <div className="text-left">
                  <button
                    type="submit"
                    className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold text-lg items-center justify-center space-x-2 group shadow-lg"
                  >
                    <span>Send Your Request</span>
                    <ArrowRight size={20} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Contact Details</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
                      <Phone size={24} className="text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">Phone</h4>
                      <a href="tel:+27799352223" className="text-gray-600 hover:text-amber-600 transition-colors">+27 79 935 2223</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
                      <Mail size={24} className="text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">Email</h4>
                      <a href="mailto:info@kdinteriors.co.za" className="text-gray-600 hover:text-amber-600 transition-colors">info@kdinteriors.co.za</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
                      <Clock size={24} className="text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">Business Hours</h4>
                      <p className="text-gray-600">Monday to Friday: 8AM – 5PM</p>
                      <p className="text-gray-600">Saturday: 9AM – 1PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
                      <MapPin size={24} className="text-amber-600" />
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
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
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
              className="bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight size={20} />
            </a>
            <a 
              href="tel:+27799352223"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-amber-600 transition-colors font-semibold text-lg inline-flex items-center justify-center space-x-2"
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
              className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold text-lg"
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