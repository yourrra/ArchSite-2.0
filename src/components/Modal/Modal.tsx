import React, { FC, ReactNode, useState } from 'react'
import { Picture } from '../Picture'
import { Portal } from '../Portal'
import cn from 'classnames'

import styles from './Modal.module.css'

type Props = {
  name: string
  year: number
  imgBig: string
  isOpen: boolean
  onClose: () => void
}

export const Modal: FC<Props> = ({ name, year, imgBig, isOpen, onClose }) => {
  const [closing, setClosing] = useState(false)

  const handleClose = () => {
    setClosing(true)
    setTimeout(() => {
      onClose()
      setClosing(false)
    }, 280)
  }

  if (!isOpen) return null

  return (
    <Portal isOpen={isOpen}>
      <div
        className={cn({
          [styles.Overlay]: isOpen,
          [styles.OverlayClose]: closing,
        })}
        onClick={handleClose}
      >
        <div
          className={styles.WrapperContent}
          onClick={e => e.stopPropagation()}
        >
          <Picture
            img={imgBig}
            alt={name}
            className={cn({
              [styles.Content]: isOpen,
              [styles.ContentClose]: closing,
            })}
            onClick={e => e.stopPropagation()}
          />
          <div
            className={cn({
              [styles.Info]: isOpen,
              [styles.InfoClose]: closing,
            })}
          >
            <div className={styles.InfoName}>{name}</div>
            <div className={styles.InfoYear}>{year}</div>
          </div>
        </div>
      </div>
    </Portal>
  )
}
