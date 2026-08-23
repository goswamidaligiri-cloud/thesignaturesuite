// Public image URL builder — safe on client (no token, only project id + dataset).
import {createImageUrlBuilder} from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'h0vssa9p'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

const builder = createImageUrlBuilder({projectId, dataset})

export const urlFor = (source) => builder.image(source)

export function imgUrl(source, {w, h, quality = 80} = {}) {
  if (!source) return null
  let b = builder.image(source).auto('format').fit('max').quality(quality)
  if (w) b = b.width(w)
  if (h) b = b.height(h)
  return b.url()
}
