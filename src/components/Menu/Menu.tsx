import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Menu.module.css'

export const Menu = ({ active }: any) => {
  const [projectActive, setProjectActive] = useState(true)

  return (
    <div className={active ? styles.menuActive : styles.menu}>
      <div className={styles.menuContent}>
        <Link
          className={projectActive ? styles.projectActive : styles.project}
          to="/"
        >
          Project
        </Link>
        <Link
          className={styles.aboutMe}
          onClick={() =>
            setProjectActive(projectActive ? !projectActive : projectActive)
          }
          to="/about"
        >
          About me
        </Link>
        <Link
          className={styles.contact}
          onClick={() =>
            setProjectActive(projectActive ? !projectActive : projectActive)
          }
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  )
}
