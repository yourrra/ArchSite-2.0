import { Logo } from '../Logo'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className="wrapper__shadows">
      <div className="wrapper">
        <div className={styles.Wrapper}>
          <header className={styles.Header}>
            <BurgerMenu />
            <div className={styles.LogoMobile}>
              <Logo variant="mobile" />
            </div>
            <div className={styles.Logo}>
              <Logo />
            </div>
          </header>
        </div>
      </div>
    </div>
  )
}
