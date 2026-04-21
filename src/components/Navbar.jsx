import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.module.scss'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={styles.navbar} aria-label="Navigation principale">
      
      {/* Logo */}
      <Link 
        to="/" 
        className={styles.logo} 
        aria-label="Accueil Marie portfolio"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Marie
      </Link>

      {/* Burger */}
      <button
        className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        <span className={menuOpen ? styles.burgerLineOpen : styles.burgerLine}></span>
        <span className={menuOpen ? styles.burgerLineOpen : styles.burgerLine}></span>
        <span className={menuOpen ? styles.burgerLineOpen : styles.burgerLine}></span>
      </button>

      {/* Liens desktop */}
      <div className={styles.links}>
        <a href="#apropos">À propos</a>
        <a href="#parcours">Parcours</a>
        <a href="#competences">Compétences</a>
        <a href="#projets">Projets</a>
        <a href="#contact">Contact</a>

        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cvBtn}
          aria-label="Voir le CV de Marie (PDF, nouvelle fenêtre)"
        >
          Voir CV
        </a>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#apropos" onClick={closeMenu}>À propos</a>
          <a href="#parcours" onClick={closeMenu}>Parcours</a>
          <a href="#competences" onClick={closeMenu}>Compétences</a>
          <a href="#projets" onClick={closeMenu}>Projets</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cvBtn}
            onClick={closeMenu}
            aria-label="Voir le CV de Marie (PDF, nouvelle fenêtre)"
          >
            Voir CV
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar