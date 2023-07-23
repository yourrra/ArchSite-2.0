import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { LinkProps } from 'react-router-dom'
import cn from 'classnames'
import { Typography } from '../Typography'

import styles from './Link.module.css'

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>

type CommonProps = {
  icon?: string
}

type Props = PropsWithChildren<
  (
    | {
        type: 'a'
        props: AnchorProps
      }
    | {
        type: 'link'
        props: LinkProps
      }
    | {
        type: 'icon'
        props: LinkProps
      }
  ) &
    CommonProps
>

export function Link({ type, props, children, icon }: Props) {
  const className = cn(styles.link, props.className)

  if (type === 'a') {
    return (
      <a {...props} className={className}>
        <div>
          {icon && <img src={icon} width={32} height={32} alt="icon" />}
          <Typography variant="link" tag="span">
            {children}
          </Typography>
        </div>
      </a>
    )
  } else if (type === 'link') {
    return (
      <ReactRouterLink {...props} className={className}>
        <div>
          {icon && <img src={icon} width={32} height={32} alt="icon" />}
          <Typography variant="link" tag="span">
            {children}
          </Typography>
        </div>
      </ReactRouterLink>
    )
  }

  return (
    <ReactRouterLink {...props} className={className}>
      <div>
        {icon && <img src={icon} width={32} height={32} alt="icon" />}
        {children}
      </div>
    </ReactRouterLink>
  )
}
