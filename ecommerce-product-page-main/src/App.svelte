<script lang="ts">
  import Nav from './components/Nav.svelte'
  import Main from './components/Main.svelte'
  import Hero from './components/Hero.svelte'
  import Form from './components/Form.svelte'

  import product from './constants/product'
  import isDesktop from './stores/viewport'
  import { amountParser } from './utils/parser'

  let innerWidth = window.innerWidth

  $: if (innerWidth > 1024) {
    $isDesktop = true
  } else {
    $isDesktop = false
  }
</script>

<svelte:window bind:innerWidth />

<Nav />
<Main>
  <Hero />
  <section class="mx-auto space-y-9 px-8 py-7 lg:max-w-screen-sm">
    <div class="space-y-4">
      <h2 class="font-bold uppercase tracking-wider text-orange">
        sneaker company
      </h2>
      <h3 class="text-4xl font-bold">Fall Limited Edition Sneakers</h3>
    </div>
    <p class="text-blue-gray-dark">
      These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they’ll withstand everything the
      weather can offer.
    </p>
    <article class="flex flex-wrap items-center justify-between font-bold">
      <div class="flex flex-wrap items-center gap-x-8">
        <div>
          <h2 class="sr-only">current price</h2>
          <p class="text-4xl">
            {amountParser(product.price * product.discount)}
          </p>
        </div>
        <div>
          <h3 class="sr-only">{product.discount * 100}% discount</h3>
          <p class="rounded-lg bg-orange/20 py-1 px-3 text-xl text-orange">
            {product.discount * 100}%
          </p>
        </div>
      </div>
      <div>
        <h3 class="sr-only">discounted price</h3>
        <p class="text-xl text-blue-gray line-through">
          {amountParser(product.price)}
        </p>
      </div>
    </article>
    <Form />
  </section>
</Main>
