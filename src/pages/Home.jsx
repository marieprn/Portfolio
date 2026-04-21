import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Parcours from '../components/Parcours'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <main>
      {/* Section Hero */}
      <section id="home" className="section">
        <Hero />
      </section>

      {/* Section À propos */}
      <section id="apropos" className="section">
        <About />
      </section>

      {/* Section Parcours */}
      <section id="parcours" className="section">
        <Parcours />
      </section>

      {/* Section Compétences */}
      <section id="competences" className="section">
        <Skills />
      </section>
      
      {/* Section Projets */}
      <section id="projets" className="section">
        <Projects />
      </section>

      {/* Section Contact */}
      <section id="contact" className="section">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default Home