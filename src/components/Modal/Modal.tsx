import { FC, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'
import cn from 'classnames'

type Props = {
  name: string
  year: number
  imgBig: string
  isOpen: boolean
  onClose: () => void
}

export const Modal: FC<Props> = ({ name, year, imgBig, isOpen, onClose }) => {
  // Создаем корневой узел для портала
  const modalRoot = document.createElement('div')
  modalRoot.setAttribute('id', 'modal-root')

  useEffect(() => {
    // Добавляем корневой узел в DOM при монтировании компонента
    document.body.appendChild(modalRoot)

    // Удаляем корневой узел из DOM при размонтировании компонента
    return () => {
      document.body.removeChild(modalRoot)
    }
  }, [modalRoot])

  // Если модальное окно не открыто, возвращаем null
  if (!isOpen) return null

  // Проверяем ширину экрана
  const isScreenSmall = window.innerWidth < 450

  // Если ширина экрана меньше 500px, не открываем модальное окно
  if (isScreenSmall) return null

  return ReactDOM.createPortal(
    <div
      className={cn(styles.modaloverlay, {
        [styles.open]: isOpen,
        [styles.closing]: !isOpen,
      })}
      onClick={onClose}
    >
      <div className={styles.WrapperModal} onClick={e => e.stopPropagation()}>
        <img
          src={imgBig}
          alt="Avatar"
          className={styles.Content}
          onClick={e => e.stopPropagation()}
        />
        <div className={styles.Info}>
          <div className={styles.InfoName}>{name}</div>
          <div className={styles.InfoYear}>{year}</div>
        </div>
      </div>
    </div>,
    modalRoot,
  )

  // Монтируем модальное окно в портал
}
