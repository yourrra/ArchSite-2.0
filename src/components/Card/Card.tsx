import { useState } from 'react'
import styles from './Card.module.css'
import { Modal } from '../Modal'
import { Picture } from '../Picture'

type Props = {
  preview: string
  name: string
  year: number
  fullRes: string
}

export const Card = ({ preview, name, year, fullRes }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className={styles.Cursor}>
      <div className={styles.Render}>
        <Picture
          className={styles.Img}
          img={preview}
          alt={name}
          onClick={() => openModal()}
        />
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          imgBig={fullRes}
          name={name}
          year={year}
        />
      </div>
      <div className={styles.Info}>
        <div className={styles.Name}>{name}</div>
        <div className={styles.Year}>{year}</div>
      </div>
    </div>
  )
}
