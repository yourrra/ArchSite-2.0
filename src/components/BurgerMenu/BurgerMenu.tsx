import { useState } from 'react'
import { Menu } from '../Menu/Menu'
import burger from '../../assets/burger.svg'

import styles from './BurgerMenu.module.css'

export const BurgerMenu = () => {
  const [menuActive, setMenuActive] = useState(false)
  const [buttonActive, setButtonActive] = useState(false)

  return (
    <div className={styles.Burger}>
      <button
        type="button"
        className={buttonActive ? styles.ButtonActive : styles.ButtonStandard}
        onClick={() => setButtonActive(!buttonActive)}
      >
        <img
          width={20}
          height={20}
          src={burger}
          alt="button burger-menu"
          onClick={() => setMenuActive(!menuActive)}
        />
      </button>
      <Menu active={menuActive} />
    </div>
  )
}
