import styles from '../styles/Contact.module.scss'

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <span className={styles.tag}>Contact</span>
      <h2>Travaillons ensemble</h2>

      <p>
        Disponible pour un CDI en frontend. N'hésitez pas à me contacter
        pour discuter de vos projets.
      </p>

      <div className={styles.btns}>
        
        <a
          href="mailto:marie.prn77@gmail.com"
          className={styles.btnEmail}
        >
          ✉ Envoyer un email
        </a>

        <a
          href="https://github.com/marieprn"
          target="_blank"
          rel="noreferrer"
          className={styles.btnOutline}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/marie-p%C3%A9ron-6563913a8/"
          target="_blank"
          rel="noreferrer"
          className={styles.btnOutline}
        >
          LinkedIn
        </a>

      </div>
    </section>
  )
}

export default Contact