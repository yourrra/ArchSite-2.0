import { ReactNode } from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'
import styles from './Layout.module.css'
import { Outlet } from 'react-router-dom'

type Props = {
  header?: 'hidden' | ReactNode
  footer?: 'hidden' | ReactNode
}

export function Layout({ header, footer }: Props) {
  return (
    <div className={styles.Layout}>
      {header === 'hidden' ? null : header || <Header />}
      <main className={styles.Main}>
        <Outlet />
      </main>
      {footer === 'hidden' ? null : footer || <Footer />}
    </div>
  )
}
