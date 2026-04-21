import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects'
import styles from '../styles/ProjectDetail.module.scss'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <p>Projet introuvable</p>

  return (
    <main className={styles.detail}>

      {/* BARRE DE RETOUR */}
      <div className={styles.topBar}>
        <Link to="/#projets" className={styles.back}>
          ← Retour aux projets
        </Link>
        <span className={styles.topBarTitle}>{project.title}</span>
        <div className={styles.topBarActions}>
          <a href={project.live} target="_blank" rel="noreferrer" className={styles.topBarBtn}>
            Voir le site ↗
          </a>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className={styles.topBarBtn}>
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* HERO */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>{project.title}</h1>
        <p className={styles.heroDesc}>{project.description}</p>
      </div>

      {/* IMAGE */}
      <div className={styles.imageWrapper}>
        <img
          src={project.images[1]}
          alt={'Aperçu du projet ' + project.title}
          className={styles.image}
        />
      </div>

      {/* STACK */}
      <div className={styles.stackSection}>
        <span className={styles.sectionLabel}>Stack technique</span>
        <div className={styles.tags}>
          {project.stack.map((tech) => (
            <span key={tech} className={styles.tech}>{tech}</span>
          ))}
        </div>
      </div>

      {/* CONTENU */}
      <div className={styles.content}>
        <div className={styles.section}>
          <h2>Contexte</h2>
          <p>{project.context}</p>
        </div>
        <div className={styles.section}>
          <h2>Objectif</h2>
          <p>{project.objective}</p>
        </div>
        <div className={styles.section}>
          <h2>Résultats</h2>
          <p>{project.results}</p>
        </div>
        <div className={styles.section}>
          <h2>Compétences développées</h2>
          {Array.isArray(project.skills) ? (
            <ul className={styles.list}>
              {project.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          ) : (
            <p>{project.skills}</p>
          )}
        </div>
        <div className={styles.section}>
          <h2>Perspectives d'amélioration</h2>
          <p>{project.improvements}</p>
        </div>
      </div>

    </main>
  )
}

export default ProjectDetail