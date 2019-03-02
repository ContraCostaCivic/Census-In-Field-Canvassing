export const toHyphenatedText = (title) => {
  const lower = title.toLowerCase()
  const arr = lower.split(' ')
  const hyphens = arr.join('-')
  return hyphens
}