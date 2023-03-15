<script lang="ts">
  import IconCart from '../icons/icon-cart.svelte'

  import Button from './Button.svelte'
  import NavSmall from './NavSmall.svelte'
  import NavLarge from './NavLarge.svelte'

  import isDesktop from '../stores/viewport'
</script>

<nav
  class="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between px-8 py-7 xl:px-0 {$isDesktop
    ? 'border-b border-blue-gray'
    : null}"
>
  {#if $isDesktop}
    <NavLarge />
  {:else}
    <NavSmall />
  {/if}
  <div class="flex flex-wrap items-center gap-x-6">
    <Button class="text-blue-gray-dark transition-colors hover:text-black">
      <IconCart />
    </Button>
    <Button
      class="w-7 rounded-full transition-shadow hover:ring-2 hover:ring-orange"
    >
      <img src="/images/image-avatar.png" alt="man wearing sunglasses" />
    </Button>
  </div>
</nav>
