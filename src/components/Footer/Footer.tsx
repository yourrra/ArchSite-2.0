import { ROUTES } from '../../constants/urls'
import { Link } from '../Link'
import { Typography } from '../Typography'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <div className="wrapper">
      <div className={styles.Wrapper}>
        <div className={styles.Footer}>
          <nav>
            <ul className={styles.Links}>
              <li>
                <Link type="link" props={{ to: ROUTES.MAIN }}>
                  Project
                </Link>
              </li>
              <li>
                <Link type="link" props={{ to: ROUTES.ABOUT }}>
                  About me
                </Link>
              </li>
              <li>
                <Link type="link" props={{ to: ROUTES.CONTACT }}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.Info}>
            <Link type="a" props={{ href: 'tel:+79002891404' }}>
              8 (900) 289-14-04
            </Link>
            <Link type="a" props={{ href: 'mailto:alextecture@gmail.com' }}>
              alextecture@gmail.com
            </Link>
          </div>
          <div className={styles.Developed}>
            <div>Developed</div>
            <Link type="a" props={{ href: 'https://github.com/yourrra' }}>
              <Typography className={styles.devName} variant="label">
                Yourrra
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
