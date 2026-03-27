import styles from '../styles/ProjectDetail.module.scss'
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import projects from '../data/projects'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  const [current, setCurrent] = useState(0)

  if (!project) {
    return (
      <main className={styles.notFound}>
        <p>Projet introuvable.</p>
        <Link to="/">Retour à l'accueil</Link>
      </main>
    )
  }

  const hasMultipleImages = project.images.length > 1

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  return (
    <main className={styles.detail}>
      <Link to="/#projets" className={styles.back}>
        ← Retour aux projets
      </Link>

      <div className={styles.header}>
        <span className={styles.tag}>Projet</span>
        <h1>{project.title}</h1>
        <p className={styles.desc}>{project.description}</p>

        <div className={styles.stack}>
          {project.stack.map((tech) => (
            <span key={tech} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          <a href={project.live} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
            Voir le site live ↗
          </a>

          <a href={project.github} target="_blank" rel="noreferrer" className={styles.btnSecondary}>
            GitHub
          </a>
        </div>
      </div>

      {/* CARROUSEL */}
      <div className={styles.carousel}>
        {hasMultipleImages && (
          <button onClick={prevSlide} className={styles.arrow}>
            <FaArrowLeft />
          </button>
        )}

        <img
          src={project.images[current]}
          alt={`${project.title} ${current + 1}`}
          className={styles.img}
        />

        {hasMultipleImages && (
          <button onClick={nextSlide} className={styles.arrow}>
            <FaArrowRight />
          </button>
        )}
      </div>

      {/* DOTS */}
      {hasMultipleImages && (
        <div className={styles.dots}>
          {project.images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === current ? styles.active : ''
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.block}>
          <h2>Contexte</h2>
          <p>{project.context}</p>
        </div>

        <div className={styles.block}>
          <h2>Mon rôle</h2>
          <p>{project.role}</p>
        </div>

        <div className={styles.block}>
          <h2>Défi principal</h2>
          <p>{project.challenge}</p>
        </div>
      </div>
    </main>
  )
}

export default ProjectDetail