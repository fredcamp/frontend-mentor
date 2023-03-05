<script lang="ts">
  import { onDestroy } from 'svelte'
  import { fly } from 'svelte/transition'

  import Logo from '../icons/logo.svelte'
  import MenuToggle from '../icons/icon-menu.svelte'
  import MenuClose from '../icons/icon-close-menu.svelte'

  import Button from './Button.svelte'
  import NavLinks from './NavSmallLinks.svelte'
  import clickOutside from '../utils/clickOutside'

  let showMenu = false
  let ariaExpanded = false

  onDestroy(() => {
    document.body.classList.remove('overflow-hidden')
  })

  function toggleMenu(): void {
    document.body.classList.toggle('overflow-hidden')
    showMenu = !showMenu
    ariaExpanded = !ariaExpanded
  }
</script>

<div class="px-6 py-7">
  <div class="flex items-center justify-between">
    <div>
      <h1 class="sr-only">snap</h1>
      <Logo />
    </div>
    <Button
      class="text-black transition-transform hover:scale-110"
      aria-expanded={ariaExpanded}
      aria-controls={ariaExpanded ? 'small-menu' : null}
      on:click={toggleMenu}
    >
      <MenuToggle />
    </Button>
  </div>
</div>

{#if showMenu}
  <div class="fixed inset-0 bg-black/50">
    <aside
      class="absolute right-0 top-0 bottom-0 w-full max-w-[270px] overflow-y-auto bg-white px-9 py-7 shadow-lg"
      id="small-menu"
      transition:fly|local={{ x: 270 }}
      use:clickOutside
      on:outclick={toggleMenu}
    >
      <Button
        class="ml-auto block text-black transition-transform hover:scale-110"
        on:click={toggleMenu}
      >
        <MenuClose />
      </Button>
      <NavLinks class="mt-8 space-y-4" />
    </aside>
  </div>
{/if}
