import React, { useState } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';

interface BeforeAfterSectionProps {
  sliders: Array<{
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
    alt?: string;
    projectLabel?: string;
  }>;
}

/**
 * BeforeAfterSection Component
 * 
 * This component displays a section with before/after image comparison sliders.
 * 
 * Usage:
 * - Used on the Landing page above the "Featured Projects" section
 * - To change images, update the imports in Landing.tsx and pass new image paths as props
 * - Images should be located in src/assets/home/
 * 
 * @param sliders - Array of slider configurations with before/after images
 */
const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ sliders }) => {
  const [hasAnyInteracted, setHasAnyInteracted] = useState(false);

  const handleInteraction = () => {
    setHasAnyInteracted(true);
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Kitchen Transformations in Cape Town
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore real kitchen renovations in Cape Town completed by KD Interiors. Drag the slider to compare before-and-after kitchen remodels, from budget-friendly upgrades to premium custom kitchens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 sm:gap-8">
          {sliders.map((slider, index) => (
            <div key={index} className="w-full">
              {/* Subtle divider on mobile between sliders */}
              {index > 0 && (
                <div className="md:hidden border-t border-gray-200 mb-4 mt-2"></div>
              )}
              <BeforeAfterSlider
                beforeImage={slider.beforeImage}
                afterImage={slider.afterImage}
                beforeLabel={slider.beforeLabel}
                afterLabel={slider.afterLabel}
                alt={slider.alt || `Transformation ${index + 1}`}
                showTooltip={index === 0 && !hasAnyInteracted}
                onInteraction={handleInteraction}
                projectLabel={slider.projectLabel || (index === 0 ? 'Project 1' : 'Project 2')}
              />
            </div>
          ))}
        </div>

        {/* Micro-line text */}
        <p className="text-center text-sm text-gray-500 mt-8 max-w-2xl mx-auto">
          Looking for an affordable kitchen renovation in Cape Town? Request a quote and we'll recommend the best layout, finishes, and cost options for your space.
        </p>
      </div>
    </section>
  );
};

export default BeforeAfterSection;

