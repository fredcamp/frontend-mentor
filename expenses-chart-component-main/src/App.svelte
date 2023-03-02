<script lang="ts">
  import favicon from './images/favicon-32x32.png'
  import Logo from './images/logo.svelte'
  import Chart from './Chart.svelte'

  import data from './data'
  import { amountParser } from './parser'
</script>

<svelte:head>
  <link rel="shortcut icon" href={favicon} type="image/x-icon" />
</svelte:head>

<main class="mx-auto grid min-h-screen max-w-sm place-items-center">
  <section class="w-full px-4">
    <header
      class="bg-red flex items-center justify-between rounded-xl py-5 px-6"
    >
      <div class="text-pale space-y-1">
        <h2 class="text-sm tracking-wide">My balance</h2>
        <p class="text-2xl font-bold tracking-wide">{amountParser(921.48)}</p>
      </div>
      <h1>
        <span class="sr-only">brand logo</span>
        <Logo />
      </h1>
    </header>
    <div class="bg-pale mt-4 rounded-xl px-6 py-7">
      <article
        class="border-cream flex flex-col items-center gap-4 space-y-2 border-b-2 pb-5"
      >
        <h2 class="text-brown-dark self-start text-2xl font-bold">
          Spending &ndash; Last 7 days
        </h2>
        <Chart {data} />
      </article>
      <article class="mt-7 flex items-end justify-between">
        <div class="space-y-1">
          <h2 class="text-sm tracking-wide">Total this month</h2>
          <p class="text-brown-dark text-4xl font-bold tracking-wide">
            {amountParser(478.33)}
          </p>
        </div>
        <div>
          <p class="text-brown-dark text-right text-sm font-bold">+2.4%</p>
          <p class="text-sm tracking-wide">from last month</p>
        </div>
      </article>
    </div>
  </section>
</main>
