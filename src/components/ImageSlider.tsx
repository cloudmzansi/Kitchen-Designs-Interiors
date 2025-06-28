import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {description}
          </p>
        </div>

        {/* Slider Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            {sliders.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlider(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlider === index
                    ? 'bg-forest-600'
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous slider"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlider}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next slider"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {currentImages.map((image, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
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
                        className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </picture>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Indicator */}
          <div className="text-center mt-6">
            <span className="text-gray-600">
              {currentSlider + 1} of {sliders.length}
            </span>
          </div>
        </div>

        {/* Lightbox */}
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
        />
      </div>
    </section>
  );
};

export default ImageSlider; 