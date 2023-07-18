import { Logo } from '../../components/Logo'
import styles from './Main.module.css'

export function Main() {
  return (
    <div className="wrapper">
      <div className={styles.MainWrapper}>
        <Logo />
      </div>
    </div>
  )
}
