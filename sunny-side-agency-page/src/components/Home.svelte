<script>
  import { scale, fly } from 'svelte/transition'
  import iconArrow from '../icons/icon-arrow-down.svg'
</script>

<header
  class="bg-header-mobile sm:bg-header-desktop flex h-full min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
>
  <div class="flex flex-col items-center space-y-10 md:space-y-16">
    <h2
      class="max-w-sm text-center font-serif text-4xl font-black uppercase leading-[1.25em] tracking-[0.2em] text-white sm:max-w-none md:text-5xl"
      in:scale={{ duration: 1000, delay: 2000 }}
    >
      We are creatives
    </h2>
    <img
      src={iconArrow}
      alt="arrow down"
      aria-hidden="true"
      class="h-24 animate-bounce"
      in:fly={{ y: 10, delay: 3000, duration: 500 }}
    />
  </div>
</header>
