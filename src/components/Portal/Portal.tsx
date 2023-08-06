import { ReactNode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

type Props = {
  children: ReactNode
  isOpen: boolean
}

export const Portal = ({ isOpen, children }: Props) => {
  const [modalRoot] = useState(() => document.createElement('div'))
  modalRoot.setAttribute('id', 'modal-root')

  useEffect(() => {
    document.body.appendChild(modalRoot)
    return () => {
      document.body.removeChild(modalRoot)
      enableScroll()
    }
  }, [modalRoot])

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

  return ReactDOM.createPortal(children, modalRoot)
}
