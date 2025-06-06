import styles from './Picture.module.css'
import { type ImgHTMLAttributes, memo, forwardRef } from 'react'
import cn from 'classnames'

type Props = {
  img: string
  alt?: string
  variant?: 'adaptive'
} & ImgHTMLAttributes<HTMLImageElement>

export const Picture = memo(
  forwardRef<HTMLImageElement, Props>(
    ({ variant, img, className = '', alt, ...htmlImageElement }, ref) => {
      return (
        <picture>
          <source type="image/avif" srcSet={`${img.split(/\./)[0]}.avif`} />
          <source type="image/webp" srcSet={`${img.split(/\./)[0]}.webp`} />
          <img
            className={cn(
              {
                [styles.isAdaptive]: variant === 'adaptive',
              },
              className,
            )}
            src={img}
            alt={alt}
            ref={ref}
            loading="lazy"
            {...htmlImageElement}
          />
        </picture>
      )
    },
  ),
)
