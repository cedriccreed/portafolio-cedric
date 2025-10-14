import { FaExternalLinkAlt, FaGithub, FaReact, FaShieldAlt, FaMobile } from 'react-icons/fa';
import imageSequre from '../assets/M-890087-806.jpg';
import personajesBiblicos from '../assets/personajes_biblicos.png';

const Portfolio = () => {
  const projects = [
    {
      title: "SeQRNG Web App - Sistema de Gestión de Llaves Cuánticas",
      description: "Sistema profesional desarrollado para Sequre Quantum que proporciona gestión de llaves cuánticas con interfaz dual (Administrador/Usuario). Implementa autenticación JWT, dashboard interactivo con gráficos, y gestión de servicios CTM/HSM con tecnología cuántica.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "GSAP", "Chart.js", "JWT", "React Router", "i18next"],
      category: "Frontend",
      image: imageSequre,
      links: {
        demo: "https://sqq-web-app.vercel.app/",
        github: "https://github.com/cedriccreed/sqq-web-app"
      }
    },
    {
      title: "Personajes Bíblicos",
      description: "Aplicación web interactiva que presenta personajes bíblicos con animaciones avanzadas, efectos visuales impresionantes y una experiencia de usuario moderna. Desarrollada con React y tecnologías frontend modernas.",
      technologies: ["React", "JavaScript", "CSS Tailwind", "Vite", "GSAP", "Animations", "Responsive Design"],
      category: "Frontend",
      image: personajesBiblicos,
      links: {
        demo: "https://personajes-biblicos.vercel.app/",
        github: "https://github.com/cedriccreed/personajes-biblicos"
      }
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend':
        return <FaReact className="text-cyan-400" />;
      case 'Mobile':
        return <FaMobile className="text-blue-400" />;
      case 'Security':
        return <FaShieldAlt className="text-green-400" />;
      default:
        return <FaReact className="text-cyan-400" />;
    }
  };

  return (
    <section id="portafolio" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Mi <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Portafolio</span>
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Sigo perfeccionando mis habilidades y trabajando en proyectos personales para mejorar mis conocimientos y aportar valor al desarrollo web.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10">
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full z-10">
                  <span className="text-cyan-400 text-xs font-medium">{project.category}</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6 z-10">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white p-4 rounded-full transition-colors duration-300 transform hover:scale-110"
                    title="Ver Demo"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700 hover:bg-slate-600 text-white p-4 rounded-full transition-colors duration-300 transform hover:scale-110"
                    title="Ver Código"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-100 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-200 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-700/50 text-cyan-300 px-3 py-2 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <FaExternalLinkAlt />
                    <span>Ver Demo</span>
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <FaGithub />
                    <span>Ver Código</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Trabajando en más proyectos
            </h3>
            <p className="text-gray-200 mb-6">
              Actualmente estoy desarrollando nuevos proyectos que pronto estarán disponibles.
              Mientras tanto, ¿te gustaría colaborar en algo nuevo?
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
              Trabajemos Juntos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
