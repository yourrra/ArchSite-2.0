import { FC, useEffect } from 'react'
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
  const modalRoot = document.createElement('div')
  modalRoot.setAttribute('id', 'modal-root')

  useEffect(() => {
    document.body.appendChild(modalRoot)

    return () => {
      document.body.removeChild(modalRoot)
    }
  }, [modalRoot])

  if (!isOpen) return null

  const isScreenSmall = window.innerWidth < 450

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
}
