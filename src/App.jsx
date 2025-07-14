import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import FloatingParticles from './components/FloatingParticles'
import DynamicParticles from './components/DynamicParticles'
import CodeGrid from './components/CodeGrid'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative">
      {/* Animated code grid - behind everything */}
      <CodeGrid />

      {/* Dynamic particles system */}
      <DynamicParticles />

      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Floating particles */}
      <FloatingParticles />

      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
