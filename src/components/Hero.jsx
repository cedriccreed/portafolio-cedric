import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { useGSAP } from '../hooks/useGSAP';
import fotoPerfil from '../assets/foto-perfil-cedric.jpg';
import ImageParticles from './ImageParticles';

const Hero = () => {
  const containerRef = useGSAP();

  const handleHireMe = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLetsTalk = () => {
    // Open email
    window.open('mailto:cedriclavin@gmail.com?subject=Hablemos sobre tu proyecto&body=Hola Cedric, me interesa trabajar contigo...', '_blank');
  };

  return (
    <section id="inicio" ref={containerRef} className="min-h-screen flex items-center justify-center pt-24 sm:pt-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                Hola, soy{' '}
                <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Cedric Lavin
                </span>
              </h1>
              <h2 className="hero-subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Desarrollador Front-End y Apasionado por la Ciberseguridad
              </h2>
              <h3 className="hero-subtitle-2 text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-200">
                Diseño experiencias digitales modernas y seguras
              </h3>
            </div>

            {/* Description */}
            <p className="hero-description text-gray-200 text-base sm:text-lg leading-relaxed max-w-lg">
              Ingeniero en Informática con especialización en Desarrollo Front-End y Seguridad Web.
              Me apasiona crear interfaces modernas, funcionales y seguras para los usuarios.
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleHireMe}
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 active:from-cyan-700 active:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-cyan-500/30 active:shadow-lg glow-cyan relative overflow-hidden touch-manipulation"
              >
                <span className="relative z-10">Contrátame</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20 group-active:opacity-30 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={handleLetsTalk}
                className="group border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white active:bg-cyan-600 active:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-cyan-500/25 active:shadow-md backdrop-blur-sm relative overflow-hidden touch-manipulation"
              >
                <span className="relative z-10">Hablemos</span>
                <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Social Icons */}
            <div className="hero-social flex justify-center sm:justify-start space-x-4 pt-6 lg:pt-8">
              <a
                href="https://www.facebook.com/Cedric.lavincd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 hover:bg-cyan-500 active:bg-cyan-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white active:text-white transition-all duration-300 transform hover:scale-110 active:scale-95 touch-manipulation"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://x.com/cedriccreed2004"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 hover:bg-cyan-500 active:bg-cyan-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white active:text-white transition-all duration-300 transform hover:scale-110 active:scale-95 touch-manipulation"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/cedric-lavin-alarcon-b9949424a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 hover:bg-cyan-500 active:bg-cyan-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white active:text-white transition-all duration-300 transform hover:scale-110 active:scale-95 touch-manipulation"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Right Content - Image Area */}
          <div className="hero-image relative order-1 lg:order-2 w-full flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg mx-auto">

              {/* Image-specific particles */}
              <ImageParticles />

              {/* Outer glow effects - static */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-cyan-400/15 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-blue-400/15 rounded-full blur-3xl"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-cyan-300/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl"></div>

              {/* Main image container with enhanced effects */}
              <div className="relative aspect-square bg-gradient-to-br from-slate-800/40 to-slate-900/60 rounded-3xl overflow-hidden backdrop-blur-sm border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">

                {/* Inner static glow effects */}
                <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-cyan-400/25 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-blue-400/25 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-cyan-300/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

                {/* Static light streaks */}
                <div className="absolute top-1/4 right-1/4 w-1 h-24 bg-gradient-to-b from-cyan-400/70 to-transparent rotate-12 blur-sm"></div>
                <div className="absolute top-1/3 right-1/3 w-0.5 h-20 bg-gradient-to-b from-blue-400/60 to-transparent rotate-25 blur-sm"></div>
                <div className="absolute top-1/2 right-1/5 w-1 h-18 bg-gradient-to-b from-cyan-300/50 to-transparent rotate-8 blur-sm"></div>
                <div className="absolute bottom-1/3 left-1/4 w-0.5 h-16 bg-gradient-to-b from-cyan-400/60 to-transparent -rotate-15 blur-sm"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1 h-14 bg-gradient-to-b from-blue-400/50 to-transparent -rotate-20 blur-sm"></div>

                {/* Your actual photo with effects */}
                <div className="photo-container absolute inset-6 rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-xl shadow-cyan-500/20 super-glow">
                  <img
                    src={fotoPerfil}
                    alt="Cedric Lavin - Desarrollador Front-End y Especialista en Ciberseguridad"
                    className="w-full h-full object-cover object-center filter brightness-110 contrast-110 saturate-110"
                  />

                  {/* Overlay effects on the photo */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10"></div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-cyan-400/5 to-transparent"></div>

                  {/* Light streaks over the photo */}
                  <div className="absolute top-1/4 right-1/6 w-0.5 h-16 bg-gradient-to-b from-cyan-400/40 to-transparent rotate-12 blur-sm"></div>
                  <div className="absolute bottom-1/3 left-1/6 w-0.5 h-12 bg-gradient-to-b from-blue-400/30 to-transparent -rotate-12 blur-sm"></div>
                </div>

                {/* Static outer ring effect */}
                <div className="absolute inset-0 rounded-3xl border border-cyan-400/20"></div>
                <div className="absolute inset-2 rounded-2xl border border-blue-400/15"></div>
              </div>

              {/* Floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border border-cyan-400/40 rounded-lg rotate-45 animate-spin-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border border-blue-400/40 rounded-full"></div>
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-cyan-400/30 rounded-full"></div>
              <div className="absolute top-1/4 -right-6 w-3 h-3 bg-blue-400/40 rounded-full"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
