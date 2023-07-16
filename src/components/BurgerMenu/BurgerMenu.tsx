import { useState } from 'react'
import { Menu } from '../Menu/Menu'
import burger from '../../assets/burger.svg'

import styles from './BurgerMenu.module.css'

export const BurgerMenu = () => {
  const [menuActive, setMenuActive] = useState(false)
  const [buttonActive, setButtonActive] = useState(false)

  return (
    <div className={styles.Burger}>
      <div
        className={buttonActive ? styles.ButtonActive : styles.ButtonStandart}
        onClick={() => setButtonActive(!buttonActive)}
      >
        <img
          width={20}
          height={20}
          src={burger}
          alt="burger"
          className={styles.BurgerButton}
          onClick={() => setMenuActive(!menuActive)}
        />
      </div>
      <Menu active={menuActive} setActive={setMenuActive} />
    </div>
  )
}
