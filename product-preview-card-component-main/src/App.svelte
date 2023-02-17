<script lang="ts">
  import icon from './images/favicon-32x32.png'
  import imgSmall from './images/image-product-mobile.jpg'
  import imgLarge from './images/image-product-desktop.jpg'
  import cartIcon from './images/icon-cart.svg'
</script>

<svelte:head>
  <link rel="icon" type="image/png" sizes="32x32" href={icon} />
</svelte:head>

<main class="grid min-h-screen place-items-center p-8">
  <section
    class="grid overflow-hidden rounded-xl shadow-lg sm:max-w-2xl sm:grid-cols-2"
  >
    <picture>
      <source media="(max-width: 640px)" srcset={imgSmall} />
      <img
        src={imgLarge}
        class="h-72 w-full object-cover object-top sm:h-full"
        alt="gabrielle chanel perfume"
      />
    </picture>
    <article class="space-y-4 bg-white py-8 px-6 leading-7">
      <p class="font-medium uppercase tracking-[0.4em]">perfume</p>
      <h1 class="font-serif text-4xl font-bold text-blue">
        Gabrielle Essence Eau De Parfum
      </h1>
      <p class="font-medium">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div class="flex items-center gap-4 pt-3">
        <span class="font-serif text-4xl font-bold text-cyan">$149.99</span>
        <span class="line-through">$169.99</span>
      </div>
      <button
        class="!mt-6 inline-flex w-full items-center justify-center rounded-lg bg-cyan p-4 text-sm font-semibold tracking-wide text-white hover:bg-cyan-dark"
      >
        <img src={cartIcon} class="mr-3" alt="cart icon" />
        Add to Cart</button
      >
    </article>
  </section>
</main>
