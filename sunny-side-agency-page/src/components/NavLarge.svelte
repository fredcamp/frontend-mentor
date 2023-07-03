<script>
  import { fly } from 'svelte/transition'
  import Logo from '../icons/logo.svelte'
  import links from '../constants/links'
</script>

<nav
  class="absolute left-0 right-0 top-0 px-10 py-8"
  aria-label="main navigation"
  in:fly={{ y: -100, duration: 1000, delay: 1000 }}
>
  <div class="mx-auto flex max-w-[1700px] items-center justify-between">
    <div>
      <h1 class="sr-only">sunnyside</h1>
      <a
        class="hover:text-blue text-white transition-colors duration-300"
        aria-label="Go Home"
        href="/"><Logo /></a
      >
    </div>
    <div>
      <ul class="flex items-center space-x-12">
        {#each links as link}
          {@const className =
            link === 'Contact'
              ? 'uppercase font-serif bg-white rounded-full px-8 py-4 text-base text-blue hover:bg-white/30 hover:text-white transition-colors duration-300 block'
              : 'text-white hover:text-blue transition-colors duration-300 block'}
          <li>
            <a class={className} href="/#{link}">{link}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>
