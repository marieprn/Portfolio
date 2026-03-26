import styles from '../styles/Skills.module.scss'

import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa"
import { SiVite } from "react-icons/si"
import { TbRoute } from "react-icons/tb"

const skills = [
  { name: 'React', icon: FaReact },
  { name: 'JavaScript', icon: FaJs },
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'SCSS', icon: FaSass },
  { name: 'Git', icon: FaGitAlt },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Figma', icon: FaFigma },
  { name: 'Vite', icon: SiVite },
  { name: 'React Router', icon: TbRoute },
]

function Skills() {
  return (
    <section className={styles.skills} id="competences">
      <span className={styles.tag}>Compétences</span>
      <h2>Ma stack technique</h2>
      <p className={styles.sub}>
        Les outils que j'utilise au quotidien
      </p>

      <div className={styles.grid}>
        {skills.map((skill) => {
          const Icon = skill.icon

          return (
            <div key={skill.name} className={styles.chip}>
              <Icon className={styles.icon} />
              <span className={styles.name}>{skill.name}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills