import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '../../constants/urls'
import cn from 'classnames'

import styles from './Menu.module.css'

type Props = {
  active: boolean
}

export const Menu = ({ active }: Props) => {
  const location = useLocation()
  let currentPage
  if (location.pathname === ROUTES.MAIN) {
    currentPage = 'main'
  } else if (location.pathname === ROUTES.ABOUT) {
    currentPage = 'about'
  } else if (location.pathname === ROUTES.CONTACT) {
    currentPage = 'contact'
  } else {
    currentPage = 'other'
  }

  return (
    <nav className={active ? styles.MenuActive : styles.Menu}>
      <ul className={styles.MenuContent}>
        <li>
          <Link
            to={ROUTES.MAIN}
            className={cn(styles.Link, {
              [styles.LinkActive]: currentPage === 'main',
            })}
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            to={ROUTES.ABOUT}
            className={cn(styles.Link, {
              [styles.LinkActive]: currentPage === 'about',
            })}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to={ROUTES.CONTACT}
            className={cn(styles.Link, {
              [styles.LinkActive]: currentPage === 'contact',
            })}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
