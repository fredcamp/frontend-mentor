import { writable, derived } from 'svelte/store'
import type { Cart } from '../types/cart.type'

let cartStore = createStore([])

function createStore(initial: Cart[]) {
  const { subscribe, set } = writable(initial)

  return {
    subscribe,
    set: (value: Cart[]) => {
      set(value)
    },
  }
}

export const cartTotalItems = derived(cartStore, ($cartStore) => {
  return $cartStore.reduce((acc, curr) => acc + curr.amount, 0)
})

export default cartStore
