export function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}

export function averageRating(reviews) {
  if (!reviews?.length) return 0
  const total = reviews.reduce((sum, r) => sum + (r.rating || 0), 0)
  return total / reviews.length
}

export function ratingPercent(reviews) {
  const avg = averageRating(reviews)
  return clamp((avg / 5) * 100, 0, 100)
}
