<script lang="ts">
  import patternBg from './assets/pattern-bg.svg'
  import patternQuote from './assets/pattern-quotes.svg'
  import patternCurve from './assets/pattern-curve.svg'
  import Buttons from './Buttons.svelte'

  export let name: string
  export let job: string
  export let image: string
  export let message: string
</script>

<article
  class="border-gray/20 relative mx-auto max-w-xs border p-4 shadow-lg lg:grid lg:max-w-3xl lg:grid-flow-row-dense lg:grid-cols-2 lg:place-items-center lg:py-12 lg:pl-0"
>
  <div
    class="relative z-10 grid place-items-center px-6 py-7 lg:col-start-2 lg:col-end-2"
  >
    <img
      src={patternBg}
      alt="blob pattern background"
      class="absolute h-full w-full object-fill"
      aria-hidden="true"
    />
    <div class="relative">
      <img
        src={image}
        alt={name}
        class="max-h-52 max-w-full shadow-xl lg:max-h-72"
      />
      <Buttons
        class="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 lg:left-4 lg:translate-x-0"
      />
    </div>
  </div>
  <div
    class="relative z-20 mt-5 pb-9 pt-3 lg:col-start-1 lg:col-end-1 lg:translate-x-20"
  >
    <img
      src={patternQuote}
      alt="quote"
      aria-hidden="true"
      class="absolute top-0 left-1/2 h-12 -translate-x-1/2 lg:left-14 lg:translate-x-0"
    />
    <div
      class="mt-4 px-4 text-center text-sm lg:px-2 lg:text-left lg:text-base"
    >
      <p class="font-light">
        {message}
      </p>
      <footer class="mt-6 lg:flex lg:gap-2">
        <p class="font-bold">{name}</p>
        <p class="text-gray">{job}</p>
      </footer>
    </div>
  </div>
  <div class="absolute left-0 bottom-0">
    <img
      src={patternCurve}
      alt="curve pattern"
      aria-hidden="true"
      class="h-16 object-cover lg:h-20"
    />
  </div>
</article>
