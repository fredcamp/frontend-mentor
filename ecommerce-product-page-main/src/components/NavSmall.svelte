<script lang="ts">
  import { onDestroy } from 'svelte'
  import { fly } from 'svelte/transition'

  import Logo from '../icons/logo.svelte'
  import IconMenu from '../icons/icon-menu.svelte'
  import IconClose from '../icons/icon-close.svelte'

  import Button from './Button.svelte'
  import NavLinks from './NavLinks.svelte'
  import clickOutside from '../utils/clickoutside'

  onDestroy(() => {
    document.body.classList.remove('overflow-y-hidden')
  })

  let show = false

  function toggleShow(): void {
    show = !show
    document.body.classList.toggle('overflow-y-hidden')
  }
</script>

<div class="flex items-center gap-x-6">
  <Button
    class=" text-blue-gray-dark transition-colors hover:text-black"
    aria-expanded={toggleShow}
    aria-controls={toggleShow ? 'small-menu' : null}
    on:click={toggleShow}
  >
    <span class="sr-only">toggle menu</span>
    <IconMenu />
  </Button>
  <a href="/" class="hover:text-orange transition-colors">
    <h1 class="sr-only">sneakers</h1>
    <Logo />
  </a>
</div>

{#if show}
  <div class="fixed inset-0 z-50 bg-black/50">
    <div
      class="absolute top-0 left-0 bottom-0 min-w-[230px] bg-white py-7 px-8 shadow-md"
      id="small-menu"
      use:clickOutside
      on:outclick={toggleShow}
      transition:fly={{ x: -230 }}
    >
      <Button
        class="text-blue-gray-dark transition-colors hover:text-black"
        on:click={toggleShow}
      >
        <IconClose />
      </Button>
      <NavLinks
        class="text-blue-gray-dark mt-10 space-y-5 font-bold transition-colors"
      />
    </div>
  </div>
{/if}
