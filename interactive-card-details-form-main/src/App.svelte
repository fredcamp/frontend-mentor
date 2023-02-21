<script lang="ts">
  import favicon from './assets/favicon-32x32.png'
  import CardBack from './CardBack.svelte'
  import CardFront from './CardFront.svelte'
  import Form from './Form.svelte'
  import Success from './Success.svelte'

  let error = true

  let cardName: string
  let cardNumber: string
  let expMonth: string
  let expYear: string
  let expCvc: string

  function reset() {
    cardName = null
    cardNumber = null
    expMonth = null
    expYear = null
    expCvc = null
    error = true
  }
</script>

<svelte:head>
  <link rel="shortcut icon" href={favicon} type="image/x-icon" />
</svelte:head>

<main class="min-h-screen lg:grid lg:grid-cols-[1fr_2fr]">
  <header
    class="bg-mobile-bg lg:bg-desktop-bg overflow-y-visible bg-cover bg-center bg-no-repeat lg:overflow-x-visible"
  >
    <div
      class="relative mx-auto flex min-h-[280px] w-full max-w-md items-center justify-center lg:min-h-full lg:max-w-full lg:overflow-x-visible"
    >
      <CardBack
        bind:expCvc
        class="absolute right-4 -translate-y-2 lg:top-[23rem] lg:right-0 lg:translate-x-32"
      />
      <CardFront
        bind:cardName
        bind:cardNumber
        bind:expMonth
        bind:expYear
        class="absolute left-4 translate-y-24 lg:left-auto lg:right-0 lg:top-14 lg:translate-x-20"
      />
    </div>
  </header>
  {#if error}
    <Form
      bind:error
      bind:cardName
      bind:cardNumber
      bind:expMonth
      bind:expYear
      bind:expCvc
    />
  {:else}
    <Success on:click={reset} />
  {/if}
</main>
