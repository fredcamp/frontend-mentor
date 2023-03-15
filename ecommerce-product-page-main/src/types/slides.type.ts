import type { Writable } from 'svelte/store'

export interface Slide {
  id: string
  thumbnail: string
  image: string
  position: 'current' | 'previous' | 'next'
}

export interface SlideStoreReturnType {
  subscribe: Writable<Slide[]>['subscribe']
  set: Writable<Slide[]>['set']
}
