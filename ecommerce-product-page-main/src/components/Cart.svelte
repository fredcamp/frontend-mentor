<script lang="ts">
  import { fly, fade } from 'svelte/transition'
  import { elasticOut } from 'svelte/easing'

  import IconCart from '../icons/icon-cart.svelte'
  import IconDelete from '../icons/icon-delete.svelte'
  import Button from './Button.svelte'
  import clickOutside from '../utils/clickoutside'

  import cartStore, { cartTotalItems } from '../stores/cart'
  import { amountParser } from '../utils/parser'

  let showMenu = false

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
  <span class="sr-only">cart total items</span>
  <span class="pointer-events-none">
    <IconCart />
    <span
      class="bg-orange absolute top-0 right-0 translate-x-1/2  -translate-y-1/2 rounded-full py-[1px] px-2 text-xs text-white"
      >{$cartTotalItems}</span
    >
  </span>
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
    <h2 class="border-blue-gray border-b py-4 px-7 font-bold">Cart</h2>
    {#if $cartStore.length > 0}
      <div class="space-y-5 px-7 py-5 text-base">
        <ul class="space-y-3">
          {#each $cartStore as item (item.id)}
            <li
              class="flex items-center justify-between gap-x-5"
              out:fade|local
            >
              <img src={item.image} alt={item.name} class="h-12 rounded-md" />
              <div class="text-blue-gray-dark">
                <p>{item.name}</p>
                <p>
                  {amountParser(item.price)} x {item.amount}
                  <strong class="ml-2 text-black"
                    >{amountParser(item.total)}</strong
                  >
                </p>
              </div>
              <Button
                class="text-blue-gray hover:text-orange transition-colors"
                on:click={() => removeCartItem(item.id)}><IconDelete /></Button
              >
            </li>
          {/each}
        </ul>
        <a
          href="/"
          class="bg-orange hover:bg-orange/70 block w-full rounded-lg py-4 text-center text-base font-bold text-white transition-colors"
          >Checkout</a
        >
      </div>
    {:else}
      <div
        class="flex min-h-[200px] items-center justify-center"
        in:fly|local={{ x: 50, easing: elasticOut }}
      >
        <p
          class="text-blue-gray-dark font-bold
        "
        >
          Your cart is empty.
        </p>
      </div>
    {/if}
  </div>
{/if}
