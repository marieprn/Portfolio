import styles from '../styles/Contact.module.scss'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <span className={styles.tag}>Contact</span>
      <h2>Travaillons ensemble</h2>

      <div className={styles.cards}>
        
        <a
          href="mailto:marie.prn77@gmail.com"
          className={styles.card}
        >
          <FaEnvelope className={styles.cardIcon} />
          <span className={styles.cardTitle}>Email</span>
          <span className={styles.cardDesc}>
            Disponible pour un CDI frontend
          </span>
        </a>

        <a
          href="https://github.com/marieprn"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <FaGithub className={styles.cardIcon} />
          <span className={styles.cardTitle}>GitHub</span>
          <span className={styles.cardDesc}>
            Voir mes projets et mon code
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/marie-p%C3%A9ron-6563913a8/"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <FaLinkedin className={styles.cardIcon} />
          <span className={styles.cardTitle}>LinkedIn</span>
          <span className={styles.cardDesc}>
            Mon parcours professionnel
          </span>
        </a>

      </div>
    </section>
  )
}

export default Contact