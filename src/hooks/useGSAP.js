import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const ref = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mobile detection
      const isMobile = window.innerWidth < 768;

      // Force refresh ScrollTrigger on mobile
      if (isMobile) {
        ScrollTrigger.refresh();
      }

      // Hero animations with mobile optimization
      gsap.fromTo('.hero-title',
        {
          opacity: 0,
          y: isMobile ? 30 : 50
        },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.8 : 1,
          ease: 'power3.out',
          delay: isMobile ? 0.1 : 0.2
        }
      );

      gsap.fromTo('.hero-subtitle',
        {
          opacity: 0,
          y: isMobile ? 20 : 30
        },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.6 : 0.8,
          ease: 'power3.out',
          delay: isMobile ? 0.2 : 0.5
        }
      );

      gsap.fromTo('.hero-subtitle-2',
        {
          opacity: 0,
          y: isMobile ? 15 : 20
        },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.6 : 0.8,
          ease: 'power3.out',
          delay: isMobile ? 0.3 : 0.6
        }
      );

      gsap.fromTo('.hero-description',
        {
          opacity: 0,
          y: isMobile ? 20 : 30
        },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.6 : 0.8,
          ease: 'power3.out',
          delay: isMobile ? 0.4 : 0.7
        }
      );

      gsap.fromTo('.hero-buttons',
        {
          opacity: 0,
          y: isMobile ? 20 : 30
        },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.6 : 0.8,
          ease: 'power3.out',
          delay: isMobile ? 0.5 : 0.9
        }
      );

      gsap.fromTo('.hero-social',
        {
          opacity: 0,
          x: isMobile ? 0 : -30,
          y: isMobile ? 20 : 0
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: isMobile ? 0.6 : 0.8,
          ease: 'power3.out',
          delay: isMobile ? 0.6 : 1.1
        }
      );

      gsap.fromTo('.hero-image',
        {
          opacity: 0,
          scale: isMobile ? 0.9 : 0.8,
          rotation: isMobile ? 0 : -5
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: isMobile ? 0.8 : 1.2,
          ease: 'power3.out',
          delay: isMobile ? 0.1 : 0.3
        }
      );

      // Header animation
      gsap.fromTo('.header-nav',
        {
          opacity: 0,
          y: -20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.1
        }
      );

      // Services section animation (when in view)
      gsap.fromTo('.services-card',
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '#servicios',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
};
