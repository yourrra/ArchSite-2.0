import { Typography } from '../../components/Typography'
import styles from './404.module.css'

export function NotFound() {
  return (
    <div className={styles.notFound}>
      <Typography tag="h1" variant="h1">
        404
      </Typography>
      <Typography tag="p" variant="label">
        <div className={styles.Description}>Sorry, an error occurred</div>
      </Typography>
    </div>
  )
}
