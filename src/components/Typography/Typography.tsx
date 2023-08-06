import cn from 'classnames'
import type { PropsWithChildren, HTMLAttributes } from 'react'

import styles from './Typography.module.css'

type Props = PropsWithChildren<
  {
    variant?:
      | 'h1'
      | 'logo'
      | 'title'
      | 'description'
      | 'normal'
      | 'link'
      | 'label'
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  } & HTMLAttributes<HTMLParagraphElement>
>

export const Typography = ({
  variant = 'normal',
  tag = 'p',
  children,
  className = '',
  ...htmlProps
}: Props) => {
  const Tag = tag
  return (
    <Tag
      className={cn(
        styles.Typography,
        {
          [styles.isH1]: variant === 'h1',
          [styles.isLogo]: variant === 'logo',
          [styles.isTitle]: variant === 'title',
          [styles.isDescription]: variant === 'description',
          [styles.isNormal]: variant === 'normal',
          [styles.isLink]: variant === 'link',
          [styles.isLabel]: variant === 'label',
        },
        className,
      )}
      {...htmlProps}
    >
      {children}
    </Tag>
  )
}
