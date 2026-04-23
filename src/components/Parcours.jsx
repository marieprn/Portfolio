import styles from '../styles/Parcours.module.scss'
import { FaGraduationCap, FaHeart } from 'react-icons/fa'

function Parcours() {
  return (
    <section className={styles.parcours} id="parcours">
      <span className={styles.tag}>Parcours</span>
      <h2>Mon chemin</h2>
      <div className={styles.grid}>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaGraduationCap className={styles.icon} />
            <span className={styles.period}>2025 — 2026</span>
          </div>
          <h3>Formation Intégrateur Web</h3>
          <p className={styles.place}>OpenClassrooms</p>
          <p className={styles.desc}>
            Formation en alternance couvrant l'intégration web, le développement 
            frontend et la gestion de projet. Réalisation de 12 projets concrets 
            dont un portfolio, une application React et une optimisation SEO complète.
          </p>
          <div className={styles.tags}>
            <span>HTML / CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>SCSS</span>
            <span>Git</span>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaHeart className={styles.icon} />
            <span className={styles.period}>2019 — 2025</span>
          </div>
          <h3>Responsable secteur / Auxiliaire de vie</h3>
          <p className={styles.place}>Aide à domicile</p>
          <p className={styles.desc}>
            Accompagnement de personnes en situation de dépendance au quotidien. 
            Ces années m'ont appris l'écoute, l'empathie et le souci du détail — 
            des qualités que je mets aujourd'hui au service de l'expérience utilisateur.
          </p>
          <div className={styles.tags}>
            <span>Empathie</span>
            <span>Écoute</span>
            <span>Rigueur</span>
            <span>Adaptabilité</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Parcours