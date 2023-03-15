import { writable } from 'svelte/store'

let isDesktop = createStore(null)

function createStore(initial: boolean) {
  const { subscribe, set } = writable(initial)

  return {
    subscribe,
    set: (value: boolean) => {
      set(value)
    },
  }
}

export default isDesktop
