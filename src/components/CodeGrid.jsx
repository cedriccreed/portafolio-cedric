import { useEffect, useRef } from 'react';

const CodeGrid = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if mobile device
    const isMobile = window.innerWidth < 768;

    // Create animated code lines
    const createCodeLine = () => {
      const codeLine = document.createElement('div');
      const codeSnippets = [
        'const developer = "Cedric";',
        'function createAwesome() {',
        '  return security + frontend;',
        '}',
        'import React from "react";',
        'const [secure, setSecure] = useState(true);',
        'export default Portfolio;',
        '// Building the future',
        'npm install awesome-portfolio',
        'git commit -m "Epic update"',
        'const skills = ["React", "Security"];',
        'console.log("Hello World!");'
      ];
      
      const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      const fontSize = isMobile ? Math.random() * 4 + 8 : Math.random() * 8 + 10;
      const opacity = isMobile ? Math.random() * 0.2 + 0.05 : Math.random() * 0.3 + 0.1;
      const duration = Math.random() * 20 + 15;
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      
      codeLine.textContent = snippet;
      codeLine.style.cssText = `
        position: fixed;
        font-family: 'Fira Code', 'Courier New', monospace;
        font-size: ${fontSize}px;
        color: rgba(34, 211, 238, ${opacity});
        pointer-events: none;
        left: ${startX}px;
        top: ${startY}px;
        z-index: 1;
        white-space: nowrap;
        animation: float-code ${duration}s linear infinite;
        text-shadow: 0 0 10px rgba(34, 211, 238, 0.3);
      `;
      
      document.body.appendChild(codeLine);
      
      setTimeout(() => {
        if (codeLine.parentNode) {
          codeLine.parentNode.removeChild(codeLine);
        }
      }, duration * 1000);
    };

    // Create matrix-style grid
    const createGridLine = () => {
      const gridLine = document.createElement('div');
      const isVertical = Math.random() > 0.5;
      const size = isVertical ? window.innerHeight : window.innerWidth;
      const position = Math.random() * (isVertical ? window.innerWidth : window.innerHeight);
      const opacity = Math.random() * 0.2 + 0.05;
      const duration = Math.random() * 8 + 5;
      
      gridLine.style.cssText = `
        position: fixed;
        background: linear-gradient(${isVertical ? '0deg' : '90deg'}, 
          transparent, 
          rgba(34, 211, 238, ${opacity}), 
          transparent);
        ${isVertical ? `
          width: 1px;
          height: ${size}px;
          left: ${position}px;
          top: 0;
        ` : `
          width: ${size}px;
          height: 1px;
          left: 0;
          top: ${position}px;
        `}
        pointer-events: none;
        z-index: 1;
        animation: grid-pulse ${duration}s ease-in-out infinite;
      `;
      
      document.body.appendChild(gridLine);
      
      setTimeout(() => {
        if (gridLine.parentNode) {
          gridLine.parentNode.removeChild(gridLine);
        }
      }, duration * 1000);
    };

    // Create initial elements (fewer on mobile)
    const initialCodeLines = isMobile ? 4 : 8;
    const initialGridLines = isMobile ? 6 : 12;

    for (let i = 0; i < initialCodeLines; i++) {
      setTimeout(() => createCodeLine(), i * 500);
    }

    for (let i = 0; i < initialGridLines; i++) {
      setTimeout(() => createGridLine(), i * 300);
    }

    // Continue creating elements (less frequent on mobile)
    const codeInterval = setInterval(createCodeLine, isMobile ? 5000 : 3000);
    const gridInterval = setInterval(createGridLine, isMobile ? 4000 : 2000);

    // Add global CSS for animations
    const globalStyle = document.createElement('style');
    globalStyle.textContent = `
      @keyframes float-code {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-50px) rotate(2deg);
          opacity: 0;
        }
      }
      
      @keyframes grid-pulse {
        0%, 100% {
          opacity: 0.1;
          transform: scale(1);
        }
        50% {
          opacity: 0.3;
          transform: scale(1.02);
        }
      }
    `;
    document.head.appendChild(globalStyle);

    return () => {
      clearInterval(codeInterval);
      clearInterval(gridInterval);
      if (globalStyle.parentNode) {
        globalStyle.parentNode.removeChild(globalStyle);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      {/* Static grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-cyan-400/20"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-b border-cyan-400/20"></div>
          ))}
        </div>
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/40"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400/40"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400/40"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400/40"></div>
    </div>
  );
};

export default CodeGrid;
