const imageFiles = ['cert-1.jpg', 'cert-2.jpg', 'cert-3.jpg', 'cert-4.jpg', 'cert-5.JPG']

export const hallOfFameImages = imageFiles.map((file, idx) => ({
  id: idx + 1,
  src: `/hall-of-fame/${file}`,
  alt: `Certificate #${idx + 1}`,
}))
