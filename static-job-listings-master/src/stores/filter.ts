import { writable } from 'svelte/store'
import type { JobStore } from '../types/Job.type'

let store = createFilterStore([])

function createFilterStore(initial: string[]): JobStore {
  const { subscribe, set } = writable(initial)

  return {
    subscribe,
    set: (value: string[]) => {
      set(value)
    },
  }
}

export default store
