<script>
  import Anchor from './Anchor.svelte'
</script>

<section id="About">
  <div class="grid lg:grid-cols-2">
    <picture>
      <source
        media="(min-width: 1024px)"
        srcset="/images/desktop/image-transform.jpg"
      />
      <img
        src="/images/mobile/image-transform.jpg"
        alt="closeup photography of white egg"
        class="h-full w-full object-cover object-center lg:row-[1/2]"
      />
    </picture>
    <div class="lg:row-[2/-1] lg:self-center">
      <article
        class="mx-auto max-w-sm space-y-8 py-20 text-center lg:text-left"
      >
        <h2 class="text-blue font-serif text-4xl font-black">
          Transform your brand
        </h2>
        <p class="text-blue-dark text-xl">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <Anchor
          class="text-blue after:bg-yellow/40 hover:after:bg-yellow relative inline-block font-serif text-xl font-black uppercase after:absolute after:-bottom-[1px] after:-left-2 after:-right-2 after:-z-10 after:h-3 after:rounded-full after:transition-colors after:duration-300"
        >
          learn more
        </Anchor>
      </article>
    </div>
  </div>
  <div class="grid lg:grid-cols-2">
    <picture>
      <source
        media="(min-width: 1024px)"
        srcset="/images/desktop/image-stand-out.jpg"
      />
      <img
        src="/images/mobile/image-stand-out.jpg"
        alt="closeup photography of wine glass"
        class="h-full w-full object-cover object-center"
      />
    </picture>
    <div class="lg:self-center">
      <article
        class="mx-auto max-w-sm space-y-8 py-20 text-center lg:text-left"
      >
        <h2 class="text-blue font-serif text-4xl font-black">
          Stand out to the right audience
        </h2>
        <p class="text-blue-dark text-xl">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <Anchor
          class="text-blue after:bg-red/40 hover:after:bg-red relative inline-block font-serif text-xl font-black uppercase after:absolute after:-bottom-[1px] after:-left-2 after:-right-2 after:-z-10 after:h-3 after:rounded-full after:transition-colors after:duration-300"
        >
          learn more
        </Anchor>
      </article>
    </div>
  </div>
</section>
