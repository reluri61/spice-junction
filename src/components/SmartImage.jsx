import { useState } from 'react'
import foodFallback from '../assets/fallback-food.svg'
import interiorFallback from '../assets/fallback-interior.svg'

export default function SmartImage({ src, alt, kind = 'food', className = '', ...props }) {
  const fallback = kind === 'interior' ? interiorFallback : foodFallback
  const [currentSrc, setCurrentSrc] = useState(src || fallback)

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setCurrentSrc(fallback)}
      {...props}
    />
  )
}
