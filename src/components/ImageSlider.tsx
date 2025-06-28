import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ImageSliderProps {
  sliders: {
    id: string;
    images: {
      avif?: string;
      jpg: string;
      alt: string;
    }[];
  }[];
  title: string;
  description: string;
}

function browserSupportsAvif(): Promise<boolean> {
  return new Promise((resolve) => {
    const avif = new window.Image();
    avif.src =
      "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAG1pZjFhdmlmAAACAGF2MDEAAAAwYXZpZgAAABRhdmlmAAABAGF2MDEAAAAwYXZpZgAAABRhdmlmAAABAGF2MDEAAAAwYXZpZgAAABRhdmlmAAABAA==";
    avif.onload = () => resolve(avif.width === 1);
    avif.onerror = () => resolve(false);
  });
}

const ImageSlider: React.FC<ImageSliderProps> = ({ sliders, title, description }) => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const nextSlider = () => {
    setCurrentSlider((prev) => (prev + 1) % sliders.length);
  };

  const prevSlider = () => {
    setCurrentSlider((prev) => (prev - 1 + sliders.length) % sliders.length);
  };

  const goToSlider = (index: number) => {
    setCurrentSlider(index);
  };

  const handleImageClick = (imageIndex: number) => {
    setLightboxIndex(imageIndex);
    setLightboxOpen(true);
  };

  const currentImages = sliders[currentSlider]?.images || [];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Slider Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-3 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
            {sliders.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlider(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  currentSlider === index
                    ? 'bg-forest-600 scale-110 shadow-md'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slider ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlider}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl border border-gray-100"
            aria-label="Previous slider"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlider}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl border border-gray-100"
            aria-label="Next slider"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image Grid */}
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
              {currentImages.map((image, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden group cursor-pointer transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 relative"
                  onClick={() => handleImageClick(index)}
                >
                  <div className="relative overflow-hidden">
                    <picture>
                      {image.avif && (
                        <source 
                          srcSet={image.avif} 
                          type="image/avif"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                      )}
                      <img
                        src={image.jpg}
                        alt={image.alt}
                        className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </picture>
                    {/* Overlay with zoom icon */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn size={20} className="text-gray-800" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Indicator */}
          <div className="text-center mt-8">
            <span className="text-gray-600 font-medium bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              {currentSlider + 1} of {sliders.length}
            </span>
          </div>
        </div>

        {/* Enhanced Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={currentImages.map(img => {
            // Always prioritize JPEG for better compatibility
            const imageSrc = img.jpg || img.jpeg || img.png || '';
            return {
              src: imageSrc,
              alt: img.alt
            };
          })}
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
  );
};

export default ImageSlider; 