<script lang="ts">
  import Button from './Button.svelte'
  import Cart from './Cart.svelte'
  import NavSmall from './NavSmall.svelte'
  import NavLarge from './NavLarge.svelte'

  import isDesktop from '../stores/viewport'
</script>

<nav
  class="relative mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between px-8 py-7 xl:px-0 {$isDesktop
    ? 'border-blue-gray border-b'
    : null}"
>
  {#if $isDesktop}
    <NavLarge />
  {:else}
    <NavSmall />
  {/if}
  <div class="flex flex-wrap items-center gap-x-6">
    <Cart />
    <Button
      class="hover:ring-orange w-7 rounded-full transition-shadow hover:ring-2"
    >
      <img src="/images/image-avatar.png" alt="man wearing sunglasses" />
    </Button>
  </div>
</nav>
