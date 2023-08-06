import { ReactNode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

type Props = {
  children: ReactNode
  isOpen: boolean
}

export const Portal = ({ isOpen, children }: Props) => {
  const [container] = useState(() => document.createElement('div'))

  useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
      enableScroll()
    }
  }, [container])

  useEffect(() => {
    if (isOpen) {
      disableScroll()
    }
  }, [isOpen])

  const disableScroll = () => {
    document.body.style.overflow = 'hidden'
  }

  const enableScroll = () => {
    document.body.style.overflow = 'auto'
  }

  return ReactDOM.createPortal(children, container)
}
