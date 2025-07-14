import { FaGraduationCap, FaCode, FaShieldAlt, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Ingeniero en Informática",
      description: "Formación sólida en desarrollo de software y sistemas"
    },
    {
      icon: <FaCode className="text-2xl" />,
      title: "Frontend Specialist",
      description: "Experto en React, Vue.js y tecnologías modernas"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Security Focused",
      description: "Especializado en desarrollo seguro y buenas prácticas"
    },
    {
      icon: <FaLaptopCode className="text-2xl" />,
      title: "Full Stack Ready",
      description: "Conocimientos completos del ecosistema web"
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Sobre <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Mí</span>
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Desarrollador apasionado por crear soluciones digitales innovadoras y seguras
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Mi Historia */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">Mi Historia</h3>
            <p className="text-gray-200 leading-relaxed mb-4">
              Como Ingeniero en Informática, he desarrollado una pasión especial por el desarrollo
              front-end y la ciberseguridad. Mi enfoque único combina la creación de interfaces
              atractivas con la implementación de medidas de seguridad robustas.
            </p>
            <p className="text-gray-200 leading-relaxed">
              Creo firmemente que la seguridad no debe ser una reflexión tardía, sino una
              consideración fundamental desde el primer día de cualquier proyecto.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {highlight.icon}
                </div>
                <h4 className="text-white font-semibold mb-2 group-hover:text-cyan-100 transition-colors duration-300">
                  {highlight.title}
                </h4>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
