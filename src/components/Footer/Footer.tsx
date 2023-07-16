import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="wrapper">
      <div className={styles.footer}>
        <div className={styles.linkslist}>
          <Link className={styles.project} to="/project">
            Project
          </Link>
          <Link className={styles.aboutMe} to="/about">
            About me
          </Link>
          <Link className={styles.contact} to="/contact">
            Contact
          </Link>
        </div>
        <div className={styles.infolist}>
          <div className={styles.emailStyle}>саня@gmail.com</div>
          <div className={styles.phonelStyle}>+ 7 (999) 999-99-99</div>
        </div>
        <div className={styles.devList}>
          <div className={styles.devWord}>Developed</div>
          <div className={styles.devName}>Yourrra</div>
        </div>
      </div>
    </div>
  )
}
