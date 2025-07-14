import { useState } from 'react';
import { useGSAP } from '../hooks/useGSAP';

const Header = () => {
  const containerRef = useGSAP();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', id: 'inicio', active: true },
    { name: 'Sobre Mí', id: 'sobre-mi' },
    { name: 'Servicios', id: 'servicios' },
    { name: 'Portafolio', id: 'portafolio' },
    { name: 'Contacto', id: 'contacto' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header ref={containerRef} className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="header-nav flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
            Cedric<span className="text-cyan-400 text-glow">.</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 hover:scale-105 ${
                  item.active
                    ? 'text-cyan-400 font-semibold'
                    : 'text-gray-200'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button - Animated Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 bg-slate-800/60 hover:bg-cyan-500/20 active:bg-cyan-500/30 border border-cyan-500/30 text-white hover:text-cyan-400 transition-all duration-300 rounded-lg backdrop-blur-sm group focus:outline-none focus:ring-2 focus:ring-cyan-500/50 hover:scale-110 active:scale-95 touch-manipulation"
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              {/* Top line */}
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : 'translate-y-0'
                }`}
              />
              {/* Middle line */}
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out mt-1 ${
                  isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
              />
              {/* Bottom line */}
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out mt-1 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0'
                }`}
              />
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-lg bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Mobile menu - Animated */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mt-4 pb-4 bg-slate-900/20 backdrop-blur-xl rounded-xl border border-cyan-500/20 shadow-xl shadow-cyan-500/5 transform transition-all duration-500 ease-in-out">
            <nav className="flex flex-col space-y-1 p-4">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`mobile-nav-item text-base font-medium transition-all duration-300 hover:text-cyan-400 hover:bg-cyan-500/10 hover:scale-105 hover:translate-x-2 active:scale-95 text-left p-3 rounded-lg transform group touch-manipulation ${
                    item.active
                      ? 'text-cyan-400 font-semibold bg-cyan-500/20 border-l-2 border-cyan-400'
                      : 'text-gray-200 hover:border-l-2 hover:border-cyan-400/50'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isMenuOpen ? 'slideInFromRight 0.5s ease-out forwards' : 'none'
                  }}
                >
                  <span className="flex items-center">
                    <span className={`w-2 h-2 bg-cyan-400 rounded-full mr-3 transition-all duration-300 ${
                      item.active ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
                    }`}></span>
                    {item.name}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
