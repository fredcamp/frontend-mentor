import type { Slide } from '../types/slides.type'

const slides: Slide[] = [
  {
    id: crypto.randomUUID(),
    thumbnail: '/images/image-product-1-thumbnail.jpg',
    image: '/images/image-product-1.jpg',
    position: 'current',
  },
  {
    id: crypto.randomUUID(),
    thumbnail: '/images/image-product-2-thumbnail.jpg',
    image: '/images/image-product-2.jpg',
    position: 'next',
  },
  {
    id: crypto.randomUUID(),
    thumbnail: '/images/image-product-3-thumbnail.jpg',
    image: '/images/image-product-3.jpg',
    position: 'next',
  },
  {
    id: crypto.randomUUID(),
    thumbnail: '/images/image-product-4-thumbnail.jpg',
    image: '/images/image-product-4.jpg',
    position: 'previous',
  },
]

export default slides
