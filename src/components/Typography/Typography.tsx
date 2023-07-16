import cn from 'classnames'
import type { PropsWithChildren, HTMLAttributes } from 'react'

import styles from './Typography.module.css'

type Props = PropsWithChildren<
  {
    variant?:
      | 'logo'
      | 'h1-extra'
      | 'h1'
      | 'h2-extra'
      | 'h2'
      | 'h3'
      | 'h3-strikethrough'
      | 'small'
      | 'big'
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
          [styles.isLogo]: variant === 'logo',
          [styles.isH1Extra]: variant === 'h1-extra',
          [styles.isH1]: variant === 'h1',
          [styles.isH2Extra]: variant === 'h2-extra',
          [styles.isH2]: variant === 'h2',
          [styles.isH3]: variant === 'h3',
          [styles.isH3Strikethrough]: variant === 'h3-strikethrough',
          [styles.isSmall]: variant === 'small',
          [styles.isBig]: variant === 'big',
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
