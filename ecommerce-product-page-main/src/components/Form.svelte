<script lang="ts">
  import IconMinus from '../icons/icon-minus.svelte'
  import IconPlus from '../icons/icon-plus.svelte'
  import IconCart from '../icons/icon-cart.svelte'
  import Button from './Button.svelte'

  import type { Cart } from '../types/cart.type'
  import product from '../constants/product'
  import cartStore from '../stores/cart'

  const price = product.price - product.price * product.discount

  let quantity = 0

  function onSubmit(): void {
    if (quantity < 1) return

    const cartItem: Cart = {
      id: crypto.randomUUID(),
      image: '/images/image-product-1-thumbnail.jpg',
      name: 'Fall Limited Edition Sneakers',
      price: price,
      amount: quantity,
      total: price * quantity,
    }

    $cartStore = [...$cartStore, cartItem]
    quantity = 0
  }
</script>

<form
  class="space-y-6 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-6"
  on:submit|preventDefault={onSubmit}
>
  <h3 class="sr-only">current number of items: {quantity}</h3>
  <div
    class="flex items-center justify-between rounded-xl bg-blue-gray/20 py-5 px-4 lg:py-3"
  >
    <Button
      class="p-3 text-orange transition-colors hover:text-orange/70"
      on:click={() => (quantity = Math.max(0, quantity - 1))}
    >
      <IconMinus />
    </Button>
    <p class="text-xl font-bold">{quantity}</p>
    <Button
      class="p-3 text-orange transition-colors hover:text-orange/70"
      on:click={() => quantity++}
    >
      <IconPlus />
    </Button>
  </div>
  <Button
    type="submit"
    class="w-full rounded-xl bg-orange py-5 text-white shadow-md shadow-orange/50 transition-colors hover:bg-orange/70 lg:py-3"
  >
    <span class="flex items-center justify-center gap-x-4 font-bold"
      ><IconCart /> Add to cart</span
    >
  </Button>
</form>
