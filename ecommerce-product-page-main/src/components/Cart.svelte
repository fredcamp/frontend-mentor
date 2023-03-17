<script lang="ts">
  import { fly, fade } from 'svelte/transition'
  import IconCart from '../icons/icon-cart.svelte'
  import IconDelete from '../icons/icon-delete.svelte'
  import Button from './Button.svelte'
  import clickOutside from '../utils/clickoutside'

  import cartStore, { cartTotalItems } from '../stores/cart'
  import { amountParser } from '../utils/parser'

  let showMenu = true

  $: console.log($cartStore.length)

  function toggleMenu(): void {
    showMenu = !showMenu
  }

  function removeCartItem(id: string): void {
    $cartStore = $cartStore.filter((item) => item.id !== id)
  }
</script>

<Button
  class="relative transition-colors hover:text-black {showMenu
    ? 'text-black'
    : 'text-blue-gray-dark'}"
  data-outclick="false"
  aria-expanded={showMenu}
  aria-controls={showMenu ? 'cart-items' : null}
  on:click={toggleMenu}
>
  <div class="pointer-events-none">
    <IconCart />
    <span
      class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full bg-orange py-[1px] px-2 text-xs text-white"
      >{$cartTotalItems}</span
    >
  </div>
</Button>

{#if showMenu}
  <div
    class="absolute top-full right-4 z-[99] w-[90%] max-w-[400px] translate-y-2 rounded-lg bg-white shadow-xl lg:right-1"
    id="cart-items"
    in:fly={{ y: -50 }}
    out:fade
    use:clickOutside
    on:outclick={toggleMenu}
  >
    <h2 class="border-b border-blue-gray py-4 px-7 font-bold">Cart</h2>
    {#if $cartStore.length > 0}
      <div class="space-y-5 px-7 py-5 text-base">
        <ul class="space-y-3">
          {#each $cartStore as item (item.id)}
            <li class="flex items-center justify-between gap-x-5" out:fade>
              <img src={item.image} alt={item.name} class="h-12 rounded-md" />
              <div class="text-blue-gray-dark">
                <p>{item.name}</p>
                <p>
                  {amountParser(item.price)} x {item.amount}
                  <strong class="text-black">{amountParser(item.total)}</strong>
                </p>
              </div>
              <Button
                class="text-blue-gray transition-colors hover:text-orange"
                on:click={() => removeCartItem(item.id)}><IconDelete /></Button
              >
            </li>
          {/each}
        </ul>
        <Button
          class="w-full rounded-lg bg-orange py-4 text-base font-bold text-white transition-colors hover:bg-orange/70"
          >Checkout</Button
        >
      </div>
    {:else}
      <div class="flex min-h-[200px] items-center justify-center">
        <p
          class="font-bold text-blue-gray-dark
        "
        >
          Your cart is empty.
        </p>
      </div>
    {/if}
  </div>
{/if}
