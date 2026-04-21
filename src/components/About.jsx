import styles from '../styles/About.module.scss'

function About() {
  return (
    <section className={styles.about} id="apropos">
      <span className={styles.tag}>À propos</span>
      <h2>Une reconversion guidée par l'humain</h2>
      <div className={styles.cards}>
        <div className={styles.textCard}>
          <p>
            Développeuse frontend spécialisée en React et SCSS, je crée des interfaces 
            modernes, accessibles et responsive. J'intègre l'IA comme outil de travail 
            au quotidien — pour coder plus efficacement, déboguer et apprendre plus vite.
          </p>
          <p>
            Formée chez OpenClassrooms, j'ai travaillé sur des projets concrets couvrant 
            la création d'applications React, l'optimisation SEO et l'accessibilité WCAG. 
            Ce portfolio en est le reflet direct.
          </p>
          <p>
            Je recherche un premier poste en CDI pour continuer à progresser 
            au sein d'une équipe — startup, agence, grand groupe ou structure à impact.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About