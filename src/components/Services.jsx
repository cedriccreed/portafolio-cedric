import { FaCode, FaShieldAlt, FaMagic, FaUserShield } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Desarrollo Front-End Moderno",
      description: "Creación de interfaces web modernas y responsivas utilizando las últimas tecnologías como React, Vue.js y frameworks CSS avanzados."
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Integración Segura de APIs",
      description: "Implementación segura de APIs y componentes, aplicando mejores prácticas de seguridad para proteger datos sensibles."
    },
    {
      icon: <FaMagic className="text-3xl" />,
      title: "Animaciones Web y Microinteracciones",
      description: "Diseño de experiencias interactivas fluidas con animaciones CSS, GSAP y microinteracciones que mejoran la UX."
    },
    {
      icon: <FaUserShield className="text-3xl" />,
      title: "Asesoría en Seguridad Web",
      description: "Consultoría en buenas prácticas de seguridad web, auditorías básicas y implementación de medidas preventivas."
    }
  ];

  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Mis <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Especializado en desarrollo front-end y ciberseguridad, ofrezco soluciones completas para tus proyectos digitales
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="services-card group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 relative"
            >
              {/* Icon */}
              <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-100 transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {service.description}
              </p>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-200 mb-6">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contacto');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"
          >
            Iniciar Proyecto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
