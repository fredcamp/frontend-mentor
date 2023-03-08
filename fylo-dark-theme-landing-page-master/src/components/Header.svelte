<script lang="ts">
  import hero from '../images/illustration-intro.png'
  import heroLight from '../images/illustration-intro-light.svg'
  import Anchor from './Anchor.svelte'

  import theme from '../utils/theme'
</script>

<header
  class="dark:bg-header bg-header-light dark:xl:bg-curvy-pattern-lg dark:bg-dark-blue-intro xl:bg-curvy-pattern-lg-light xl:bg-bottomdark:xl:bg-no-repeat bg-white xl:bg-[length:100%_50%] xl:bg-bottom dark:xl:bg-[length:100%_50%] dark:xl:bg-bottom"
>
  <div class="mx-auto max-w-screen-xl px-6 pt-7">
    <section class="mx-auto max-w-sm space-y-8 text-center md:max-w-lg">
      <img
        src={$theme === 'dark' ? hero : heroLight}
        alt="illustration of two human cartoons inserting files in folder"
      />
      <h2 class="font-serif text-3xl font-bold leading-[1.45em]">
        All your files in one secure location, accessible anywhere.
      </h2>
      <p class="text-lg xl:text-base">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <Anchor
        class="dark:from-cyan dark:to-blue dark:hover:from-cyan dark:hover:to-cyan bg-light-bright-blue text-light hover:bg-light-bright-blue/80 mx-auto block max-w-xs rounded-full py-4 font-bold shadow-md dark:bg-gradient-to-r dark:text-white"
        >Get Started</Anchor
      >
    </section>
  </div>
</header>
