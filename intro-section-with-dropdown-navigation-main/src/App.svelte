<script lang="ts">
  import favicon from './images/favicon-32x32.png'
  import headerImgSm from './images/image-hero-mobile.png'
  import headerImgLg from './images/image-hero-desktop.png'

  import Nav from './components/Nav.svelte'
  import Anchor from './components/Anchor.svelte'
  import { createFooterLinks } from './constants/FooterLinks.svelte'

  const footerLinks = createFooterLinks()
</script>

<svelte:head>
  <link rel="shortcut icon" href={favicon} type="image/x-icon" />
</svelte:head>

<Nav />
<main
  class="lg:mx-auto lg:grid lg:max-w-screen-lg lg:grid-cols-2 lg:grid-rows-[1fr_auto] lg:gap-x-32 lg:px-4"
>
  <header class="lg:col-[2/-1] lg:row-[1/-1]">
    <picture>
      <source media="(min-width: 768px)" srcset={headerImgLg} />
      <img
        src={headerImgSm}
        alt="man holding laptop while standing"
        class="h-full w-full object-cover object-center md:max-h-[80vh] lg:object-contain"
      />
    </picture>
  </header>
  <section
    class="mx-auto mt-8 max-w-screen-lg px-6 py-7 lg:col-[1/2] lg:row-[1/2] lg:mx-0 lg:mt-0 lg:max-w-full lg:self-center lg:pl-0"
  >
    <div
      class="flex flex-col items-center justify-center space-y-6 lg:items-start lg:justify-start lg:space-y-10"
    >
      <h2
        class="text-center text-4xl font-bold text-black lg:text-left lg:text-6xl"
      >
        Make <span class="lg:block">remote work</span>
      </h2>
      <p
        class="mx-auto max-w-md text-center tracking-wide lg:max-w-full lg:text-left"
      >
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <Anchor
        class="inline-block rounded-2xl border border-transparent bg-black px-10 py-3  font-bold text-white transition-all hover:border-black hover:bg-transparent hover:text-black"
      >
        Learn more
      </Anchor>
    </div>
  </section>
  <footer
    class="mx-auto mt-6 max-w-screen-lg px-6 py-7 lg:col-[1/2] lg:row-[2/3] lg:mx-0 lg:mt-0 lg:max-w-lg lg:p-0"
  >
    <ul
      class="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 lg:justify-between lg:gap-x-0 "
    >
      {#each footerLinks as { name, Icon }}
        <li>
          <Anchor class="text-slate hover:text-gray transition-colors">
            <span class="sr-only">{name}</span>
            <Icon />
          </Anchor>
        </li>
      {/each}
    </ul>
  </footer>
</main>
