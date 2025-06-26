import { useNavigate, useLocation } from 'react-router-dom';

// Easing function for smooth scroll
const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

const smoothScrollTo = (targetY: number, duration: number) => {
  const startY = window.pageYOffset;
  const distanceY = targetY - startY;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const nextY = easeInOutQuad(timeElapsed, startY, distanceY, duration);

    window.scrollTo(0, nextY);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

export const useScrollTo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const navigateAndScroll = () => {
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const targetY = section.getBoundingClientRect().top + window.pageYOffset;
          smoothScrollTo(targetY, 800); // 800ms duration
        }
      }, 100);
    };

    if (location.pathname !== '/') {
      navigate('/');
      navigateAndScroll();
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const targetY = section.getBoundingClientRect().top + window.pageYOffset;
        smoothScrollTo(targetY, 800); // 800ms duration
      }
    }
  };
  
  const handleScrollClick = (e: React.MouseEvent<HTMLElement>, sectionId: string) => {
      e.preventDefault();
      scrollToSection(sectionId);
  }

  return { handleScrollClick };
}; 