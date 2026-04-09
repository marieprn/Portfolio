import styles from '../styles/About.module.scss'
import photo from '../assets/Marie.webp';

function About() {
  return (
    <section className={styles.about} id="apropos">
      <span className={styles.tag}>À propos</span>
      <h2>Une reconversion guidée par l'humain</h2>
      <div className={styles.cards}>
        <div className={styles.textCard}>
          <p>
            Après plusieurs années dans l'aide à domicile, j'ai choisi de me
            reconvertir dans le développement web — avec la même conviction :
            ce qu'on construit doit être utile, clair et accessible à tous.
          </p>
          <p>
            Formée chez OpenClassrooms, je me spécialise en frontend : HTML
            sémantique, CSS, JavaScript, React et SCSS. J'accorde une attention
            particulière à l'accessibilité et au responsive.
          </p>
          <p>
            Je recherche un premier poste en CDI pour continuer à progresser
            au sein d'une équipe — startup, agence, grand groupe ou structure à impact.
          </p>
        </div>
        <div className={styles.profileCard}>
          <div className={styles.photo}>
            <img src={photo} alt="photo de Marie" />
          </div>
          <span className={styles.name}>Marie</span>
          <p className={styles.role}>Développeuse Frontend</p>
        </div>
      </div>
    </section>
  )
}

export default About