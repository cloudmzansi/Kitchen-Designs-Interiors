import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
  showTooltip?: boolean;
  onInteraction?: () => void;
  projectLabel?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  alt = 'Before and after comparison',
  showTooltip = true,
  onInteraction,
  projectLabel,
}) => {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setHasInteracted(true); // Hide tooltip after first interaction
    if (onInteraction && !hasInteracted) {
      onInteraction();
    }
    updatePosition(e.clientX);
  }, [updatePosition, onInteraction, hasInteracted]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      updatePosition(e.clientX);
    });
  }, [isDragging, updatePosition]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setHasInteracted(true); // Hide tooltip after first interaction
    if (onInteraction && !hasInteracted) {
      onInteraction();
    }
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  }, [updatePosition, onInteraction, hasInteracted]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    if (e.touches[0]) {
      animationFrameRef.current = requestAnimationFrame(() => {
        updatePosition(e.touches[0].clientX);
      });
    }
  }, [isDragging, updatePosition]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setHasInteracted(true); // Hide tooltip after first interaction
      if (onInteraction && !hasInteracted) {
        onInteraction();
      }
      setPosition((prev) => Math.max(0, prev - 2));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setHasInteracted(true); // Hide tooltip after first interaction
      if (onInteraction && !hasInteracted) {
        onInteraction();
      }
      setPosition((prev) => Math.min(100, prev + 2));
    }
  }, [onInteraction, hasInteracted]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  // Intersection Observer to detect when slider enters viewport (for showing tooltip)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInViewport(true);
          } else {
            setIsInViewport(false);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px',
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full">
      {/* Project label - mobile only, subtle */}
      {projectLabel && (
        <div className="md:hidden text-xs font-medium text-gray-600 mb-3 px-1">
          {projectLabel}
        </div>
      )}
      <div
        ref={containerRef}
        className="relative w-full aspect-[2/1] md:aspect-[16/9] rounded-xl overflow-hidden shadow-md bg-gray-100"
      >
      {/* After Image (background - right side) */}
      <img
        src={afterImage}
        alt={`${alt} - ${afterLabel}`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />

      {/* Before Image (clipped - left side) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={`${alt} - ${beforeLabel}`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-md text-sm font-semibold z-10">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-md text-sm font-semibold z-10">
        {afterLabel}
      </div>

      {/* Handle */}
      <div
        ref={handleRef}
        className="absolute top-0 bottom-0 w-1 bg-white shadow-md z-20 cursor-ew-resize transition-opacity hover:opacity-100"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        role="slider"
        aria-label="Adjust before and after comparison"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {/* Handle grip circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow-md border-2 border-gray-300 flex items-center justify-center">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-3.5 bg-gray-400 rounded"></div>
            <div className="w-0.5 h-3.5 bg-gray-400 rounded"></div>
          </div>
        </div>

        {/* Arrow icons indicating drag direction */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30">
          <ChevronsLeftRight 
            size={16} 
            className="text-white drop-shadow-lg"
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </div>

        {/* Tooltip - visible when in viewport, user hasn't interacted, and showTooltip is true */}
        {isInViewport && !hasInteracted && showTooltip && (
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none z-30"
            style={{ bottom: 'calc(100% + 12px)' }}
            role="tooltip"
            aria-live="polite"
          >
            <div className="bg-black/85 backdrop-blur-sm text-white text-xs sm:text-sm font-medium px-3 py-2 rounded-lg shadow-xl whitespace-nowrap">
              Drag to compare
              {/* Tooltip arrow pointing down */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-black/85"></div>
            </div>
          </div>
        )}
      </div>

      {/* Focus indicator for keyboard navigation */}
      <style>{`
        [role="slider"]:focus-visible {
          outline: 2px solid #20613b;
          outline-offset: 2px;
        }
        @media (prefers-reduced-motion: reduce) {
          [role="slider"] {
            transition: none;
          }
        }
      `}</style>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;

