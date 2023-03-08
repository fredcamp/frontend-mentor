<script lang="ts">
  import { fly } from 'svelte/transition'
  import logo from '../svg/logo.svg'
  import IconBars from '../svg/icon-bars.svelte'
  import IconClose from '../svg/icon-close.svelte'
  import IconSun from '../svg/icon-sun.svelte'
  import IconMoon from '../svg/icon-moon.svelte'

  import { mainNav } from '../constants/links'
  import { setTheme, getTheme } from '../utils/theme'
  import clickOutside from '../utils/clickoutside'
  import Anchor from './Anchor.svelte'
  import Button from './Button.svelte'

  let innerWidth = window.innerWidth
  let isDarkMode = getTheme() === 'dark'
  let showMenu = false

  function handleTheme(): void {
    isDarkMode = !isDarkMode
    const theme = isDarkMode ? 'dark' : 'light'
    setTheme(theme)
  }

  function toggleMenu(): void {
    showMenu = !showMenu
    document.body.classList.toggle('overflow-hidden')
  }
</script>

<svelte:window bind:innerWidth />

<nav class="dark:bg-dark-blue-intro bg-light px-6 py-8">
  <div class="mx-auto flex max-w-screen-xl items-center justify-between">
    <Anchor>
      <h1 class="sr-only">Fylo</h1>
      <img src={logo} alt="fylo" class="h-9 invert dark:invert-0" />
    </Anchor>
    <div
      class="flex items-center justify-center gap-6 md:flex-row-reverse md:gap-9"
    >
      <Button
        class="dark:hover:text-cyan hover:text-light-bright-blue text-2xl"
        on:click={handleTheme}
      >
        <span class="sr-only">{isDarkMode ? 'dark mode' : 'light mode'}</span>
        {#if isDarkMode}
          <IconMoon />
        {:else}
          <IconSun />
        {/if}
      </Button>
      {#if innerWidth > 768}
        <ul class="flex items-center justify-center gap-x-9">
          {#each mainNav as { url, title }}
            <li>
              <Anchor
                {url}
                class="relative px-1 after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1px] after:origin-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:hover:origin-left hover:after:scale-x-100 dark:text-white dark:after:bg-white"
              >
                {title}
              </Anchor>
            </li>
          {/each}
        </ul>
      {:else}
        <Button
          class="dark:hover:text-cyan hover:text-light-bright-blue text-3xl transition-colors"
          aria-expanded={showMenu}
          aria-controls={showMenu ? 'small-menu' : null}
          on:click={toggleMenu}
        >
          <IconBars />
        </Button>
      {/if}
    </div>
  </div>
</nav>

{#if showMenu}
  <div class="fixed inset-0 bg-black/50 text-lg">
    <aside
      class="dark:bg-dark-blue bg-light absolute top-0 right-0 bottom-0 w-full max-w-[15rem] space-y-10 py-8 px-6 shadow-lg"
      transition:fly|local={{ x: 240, opacity: 1 }}
      use:clickOutside
      on:outclick={toggleMenu}
      id="small-menu"
    >
      <Button
        class="dark:hover:text-cyan hover:text-light-bright-blue ml-auto block text-4xl transition-colors"
        on:click={toggleMenu}><IconClose /></Button
      >
      <ul class="flex flex-col justify-center gap-8">
        {#each mainNav as { url, title }}
          <li>
            <Anchor
              {url}
              class="dark:hover:text-cyan hover:text-light-bright-blue transition-colors"
              on:click={toggleMenu}
            >
              {title}
            </Anchor>
          </li>
        {/each}
      </ul>
    </aside>
  </div>
{/if}
