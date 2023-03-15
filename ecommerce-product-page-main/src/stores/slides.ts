import { writable, derived } from 'svelte/store'
import type { Slide, SlideStoreReturnType } from '../types/slides.type'
import data from '../constants/slides'

const slideStore = createStore(data)

function createStore(initial: Slide[]): SlideStoreReturnType {
  const { subscribe, set } = writable(initial)

  return {
    subscribe,
    set: (value: Slide[]) => {
      set(value)
    },
  }
}

let currentSlide = derived(slideStore, ($slideStore) => {
  return $slideStore.find((item) => item.position === 'current')
})

export default slideStore
export { currentSlide }
