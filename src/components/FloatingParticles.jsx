import { useEffect, useRef } from 'react';

const FloatingParticles = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create dynamic particles
    const createParticle = () => {
      const particle = document.createElement('div');
      const size = Math.random() * 4 + 1;
      const opacity = Math.random() * 0.5 + 0.1;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;

      // Random colors from cyan/blue palette
      const colors = [
        'rgba(34, 211, 238, ',
        'rgba(59, 130, 246, ',
        'rgba(147, 197, 253, ',
        'rgba(6, 182, 212, ',
        'rgba(14, 165, 233, '
      ];
      const color = colors[Math.floor(Math.random() * colors.length)] + opacity + ')';

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: float-particle ${duration}s linear infinite;
        animation-delay: ${delay}s;
        box-shadow: 0 0 ${size * 2}px ${color};
      `;

      container.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, (duration + delay) * 1000);
    };

    // Create initial particles
    for (let i = 0; i < 30; i++) {
      setTimeout(() => createParticle(), i * 200);
    }

    // Continue creating particles
    const interval = setInterval(createParticle, 800);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Only moving particles - no blinking/pulsing */}

      {/* Orbiting particles */}
      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400/60 rounded-full orbit-particle-1"></div>
      <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-blue-400/50 rounded-full orbit-particle-2"></div>
      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-300/40 rounded-full orbit-particle-3"></div>
    </div>
  );
};

export default FloatingParticles;
