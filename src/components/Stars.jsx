import { Star } from 'lucide-react'

export default function Stars({ rating = 0, size = 16 }) {
  const full = Math.round(rating)

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            'shrink-0 ' +
            (i < full
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-primary-navy/25')
          }
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  )
}
