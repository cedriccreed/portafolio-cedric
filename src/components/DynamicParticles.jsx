import { useEffect, useRef } from 'react';

const DynamicParticles = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createBurstParticle = () => {
      const particle = document.createElement('div');
      const size = Math.random() * 3 + 1;
      const opacity = Math.random() * 0.6 + 0.2;
      const duration = Math.random() * 4 + 2;
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      const endX = startX + (Math.random() - 0.5) * 200;
      const endY = startY + (Math.random() - 0.5) * 200;
      
      const colors = [
        'rgba(34, 211, 238, ',
        'rgba(59, 130, 246, ',
        'rgba(147, 197, 253, ',
        'rgba(6, 182, 212, ',
        'rgba(14, 165, 233, ',
        'rgba(56, 189, 248, '
      ];
      const color = colors[Math.floor(Math.random() * colors.length)] + opacity + ')';
      
      particle.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        left: ${startX}px;
        top: ${startY}px;
        z-index: 1;
        box-shadow: 0 0 ${size * 3}px ${color};
        animation: burst-particle ${duration}s ease-out forwards;
      `;
      
      // Add CSS animation keyframes dynamically
      const style = document.createElement('style');
      style.textContent = `
        @keyframes burst-particle {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: ${opacity};
            transform: scale(1) rotate(90deg);
          }
          100% {
            transform: scale(0) rotate(360deg) translate(${endX - startX}px, ${endY - startY}px);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      }, duration * 1000);
    };

    const createTrailParticle = () => {
      const particle = document.createElement('div');
      const width = Math.random() * 2 + 0.5;
      const height = Math.random() * 30 + 10;
      const opacity = Math.random() * 0.4 + 0.1;
      const duration = Math.random() * 6 + 3;
      const startX = Math.random() * window.innerWidth;
      const rotation = Math.random() * 360;
      
      const colors = [
        'rgba(34, 211, 238, ',
        'rgba(59, 130, 246, ',
        'rgba(147, 197, 253, '
      ];
      const color = colors[Math.floor(Math.random() * colors.length)] + opacity + ')';
      
      particle.style.cssText = `
        position: fixed;
        width: ${width}px;
        height: ${height}px;
        background: linear-gradient(to bottom, ${color}, transparent);
        pointer-events: none;
        left: ${startX}px;
        top: -${height}px;
        z-index: 1;
        transform: rotate(${rotation}deg);
        animation: trail-particle ${duration}s linear forwards;
        filter: blur(0.5px);
      `;
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, duration * 1000);
    };

    // Create initial burst
    for (let i = 0; i < 5; i++) {
      setTimeout(() => createBurstParticle(), i * 300);
    }

    // Create initial trails
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createTrailParticle(), i * 500);
    }

    // Continue creating particles
    const burstInterval = setInterval(createBurstParticle, 2000);
    const trailInterval = setInterval(createTrailParticle, 1500);

    // Add global CSS for trail animation
    const globalStyle = document.createElement('style');
    globalStyle.textContent = `
      @keyframes trail-particle {
        0% {
          transform: translateY(0) rotate(var(--rotation, 0deg));
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(100vh) rotate(calc(var(--rotation, 0deg) + 180deg));
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(globalStyle);

    return () => {
      clearInterval(burstInterval);
      clearInterval(trailInterval);
      if (globalStyle.parentNode) {
        globalStyle.parentNode.removeChild(globalStyle);
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0"></div>;
};

export default DynamicParticles;
