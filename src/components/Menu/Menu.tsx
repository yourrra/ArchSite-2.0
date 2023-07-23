import { useState } from 'react'
// import { Link } from '../Link'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/urls'

import styles from './Menu.module.css'

type Props = {
  active: boolean
}

export const Menu = ({ active }: Props) => {
  const [blowingActive, setProjectActive] = useState(true)

  return (
    <nav className={active ? styles.MenuActive : styles.Menu}>
      <ul className={styles.MenuContent}>
        <li>
          <Link
            to={ROUTES.MAIN}
            className={blowingActive ? styles.ProjectActive : styles.Project}
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            to={ROUTES.ABOUT}
            className={styles.About}
            onClick={() =>
              setProjectActive(blowingActive ? !blowingActive : blowingActive)
            }
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to={ROUTES.CONTACT}
            className={styles.Contact}
            onClick={() =>
              setProjectActive(blowingActive ? !blowingActive : blowingActive)
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
