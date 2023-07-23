import { PropsWithChildren } from 'react'
import { Typography } from '../Typography'

import styles from './TextBlock.module.css'

type Props = PropsWithChildren<{
  title?: string
}>

export const TextBlock = ({ title, children }: Props) => {
  return (
    <div>
      <Typography className={styles.Title} variant="title">
        {title}
      </Typography>
      <Typography className={styles.Description} variant="description">
        {children}
      </Typography>
    </div>
  )
}
