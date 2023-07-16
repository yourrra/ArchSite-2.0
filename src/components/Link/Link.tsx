import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { LinkProps } from 'react-router-dom'
import cn from 'classnames'
import { Typography } from '../Typography'

import styles from './Link.module.css'

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>

type CommonProps = {
  icon?: string
  variant?: 'default' | 'accent'
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
  ) &
    CommonProps
>

export function Link({
  type,
  props,
  children,
  icon,
  variant = 'default',
}: Props) {
  const className = cn(
    styles.link,
    {
      [styles[variant]]: variant,
    },
    props.className,
  )

  if (type === 'a') {
    return (
      <a {...props} className={className}>
        <div>
          {icon && <img src={icon} width={16} height={16} alt="" />}
          <Typography variant="link" tag="span">
            {children}
          </Typography>
        </div>
      </a>
    )
  }

  return (
    <ReactRouterLink {...props} className={className}>
      <div>
        {icon && <img src={icon} width={16} height={16} alt="" />}
        <Typography variant="link" tag="span">
          {children}
        </Typography>
      </div>
    </ReactRouterLink>
  )
}
