<script lang="ts">
  import { onDestroy } from 'svelte'
  import { fly } from 'svelte/transition'

  import Logo from '../../images/logo.svelte'
  import Button from '../Button.svelte'
  import IconMenu from '../../images/icon-menu.svelte'
  import IconMenuClose from '../../images/icon-menu-close.svelte'
  import NavLinks from './NavLinks.svelte'

  import clickOutside from '../../actions/clickOutside'

  let showMenu = false

  onDestroy(() => {
    document.body.classList.remove('overflow-hidden')
  })

  function toggleMenu(): void {
    showMenu = !showMenu
    document.body.classList.toggle('overflow-hidden')
  }
</script>

<nav class="mx-auto max-w-screen-sm sm:max-w-screen-xl">
  <div class="flex items-center justify-between px-6 py-9">
    <h1>
      <span class="sr-only">brand logo</span>
      <Logo />
    </h1>
    <Button
      class="hover:text-orange text-blue-dark transition-colors"
      on:click={toggleMenu}
    >
      <IconMenu />
    </Button>
  </div>

  {#if showMenu}
    <aside class="bg-blue-dark/50 fixed inset-0">
      <div
        class="absolute right-0 top-0 bottom-0 min-w-[280px] bg-white py-9 px-10 shadow-lg"
        transition:fly|local={{ x: 300, opacity: 1 }}
        use:clickOutside
        on:outclick={toggleMenu}
      >
        <Button
          class="hover:text-orange text-blue-dark ml-auto block transition-colors"
          on:click={toggleMenu}
        >
          <IconMenuClose />
        </Button>
        <NavLinks class="text-blue-dark mt-14 space-y-5 text-lg" />
      </div>
    </aside>
  {/if}
</nav>
