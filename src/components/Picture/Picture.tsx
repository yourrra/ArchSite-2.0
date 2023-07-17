import styles from './Picture.module.css'
import { type ImgHTMLAttributes, memo, forwardRef } from 'react'

type Props = {
  img: string
  alt?: string
} & ImgHTMLAttributes<HTMLImageElement>

export const Picture = memo(
  forwardRef<HTMLImageElement, Props>(
    ({ img, className = '', alt, ...htmlImageElement }, ref) => {
      return (
        <picture>
          <source type="image/avif" srcSet={`${img.slice(0, -4)}.avif`} />
          <source type="image/webp" srcSet={`${img.slice(0, -4)}webp`} />
          <img src={img} alt={alt} {...htmlImageElement} ref={ref} />
        </picture>
      )
    },
  ),
)
