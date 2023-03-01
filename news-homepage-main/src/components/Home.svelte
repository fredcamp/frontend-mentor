<script lang="ts">
  import homeImgLg from '../images/image-web-3-desktop.jpg'
  import homeImgSm from '../images/image-web-3-mobile.jpg'

  import Button from './Button.svelte'
</script>

<section
  class="mx-auto max-w-screen-sm px-6 sm:max-w-screen-xl xl:grid xl:content-between"
>
  <header>
    <picture>
      <source media="(min-width: 768px)" srcset={homeImgLg} />
      <img src={homeImgSm} alt="puzzle bricks wallpaper" class="w-full" />
    </picture>
  </header>
  <article class="mt-6 space-y-6 md:grid md:grid-cols-2 md:gap-5 md:space-y-0">
    <h2
      class="text-blue-dark text-5xl font-extrabold leading-[1.15em] lg:max-w-xs"
    >
      The Bright Future of Web 3.0?
    </h2>
    <div class="space-y-6 xl:grid xl:justify-between">
      <p class="leading-7">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <Button
        class="bg-red hover:bg-blue-dark max-w-fit px-10 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:text-white"
        >Read more</Button
      >
    </div>
  </article>
</section>
