<script>
  import { fly, fade } from 'svelte/transition'

  import Logo from '../icons/logo.svelte'
  import IconHamburger from '../icons/icon-hamburger.svelte'
  import Button from './Button.svelte'
  import clickOutside from '../utils/clickOutside'
  import onScroll from '../utils/onScroll'
  import links from '../constants/links'

  let showLinks = false

  function toggleShowLinks() {
    showLinks = !showLinks
  }
</script>

<nav
  class="absolute left-0 right-0 top-0 px-8 py-9"
  aria-label="main navigation"
  in:fly={{ y: -100, duration: 1000 }}
>
  <div class="flex items-center justify-between">
    <div>
      <h1 class="sr-only">sunnyside</h1>
      <a
        class="hover:text-blue text-white transition-colors duration-300"
        aria-label="Go Home"
        href="/"><Logo /></a
      >
    </div>
    <div
      class="relative"
      use:clickOutside
      on:outclick={() => (showLinks = false)}
    >
      <Button
        class="hover:text-blue text-white transition-colors duration-300"
        aria-expanded={showLinks ? true : null}
        aria-controls={showLinks ? 'nav-links' : null}
        on:click={toggleShowLinks}
      >
        <IconHamburger />
      </Button>

      {#if showLinks}
        <div
          class="absolute right-0 top-full w-full min-w-[18rem] translate-y-14 bg-white py-10 shadow-xl"
          in:fly={{ y: -30, duration: 500 }}
          out:fade
          use:onScroll
          on:scroll-apply={() => (showLinks = false)}
        >
          <span
            class="absolute -top-8 right-0 h-8 w-8 border-[17px] border-white border-l-transparent border-t-transparent"
            aria-hidden="true"
          />
          <ul
            class="flex flex-col items-center justify-center space-y-6"
            id="nav-links"
          >
            {#each links as link}
              {@const className =
                link === 'Contact'
                  ? 'uppercase font-serif bg-yellow rounded-full px-7 py-4 text-base text-blue hover:bg-yellow/70 hover:text-white transition-colors duration-300 block'
                  : 'text-blue-dark transition-colors duration-300 hover:text-blue block'}
              <li>
                <a class={className} href="/#{link}">{link}</a>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  </div>
</nav>
