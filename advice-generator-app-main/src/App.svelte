<script lang="ts">
  import dividerMobile from './images/pattern-divider-mobile.svg'
  import dividerDesktop from './images/pattern-divider-desktop.svg'
  import iconDice from './images/icon-dice.svg'
  import favicon from './images/favicon-32x32.png'

  interface Advice {
    id: number
    advice: string
  }

  let advice: Advice = {
    id: 117,
    advice: `It is easy to sit up and take notice, what's difficult is getting up and taking action.`,
  }

  async function fetchAdvise(): Promise<void> | never {
    try {
      const response = await fetch('https://api.adviceslip.com/advice')

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const { slip } = await response.json()
      advice = slip
    } catch (error) {
      console.log(error)
    }
  }
</script>

<svelte:head>
  <link rel="shortcut icon" href={favicon} type="image/x-icon" />
</svelte:head>

<main class="grid min-h-screen place-items-center px-4">
  <section
    class="bg-dark-gray-blue relative mx-auto max-w-sm rounded-2xl px-6 pt-12 pb-16 shadow-2xl sm:max-w-lg"
  >
    <article
      class="flex flex-col items-center justify-center space-y-6 text-center"
    >
      {#if advice}
        <h1 class="text-neon text-sm uppercase tracking-[0.3rem]">
          advice #{advice.id}
        </h1>
        <q class="text-[1.75rem]">
          {advice.advice}
        </q>
      {:else}
        <h2 class="sr-only">loading...</h2>
        <span
          class="!my-6 h-16 w-16 animate-spin rounded-full border-8 border-white/50 border-t-transparent"
          aria-hidden="true"
        />
      {/if}
      <picture>
        <source media="(min-width: 640px)" srcset={dividerDesktop} />
        <img src={dividerMobile} alt="divider pattern" aria-hidden="true" />
      </picture>

      <button
        class="bg-neon hover:shadow-neon hover:shadow-custom absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 rounded-full p-5 transition-shadow duration-200"
        on:click={() => {
          advice = null
          fetchAdvise()
        }}
      >
        <img src={iconDice} alt="dice" class="pointer-events-none h-6 w-full" />
      </button>
    </article>
  </section>
</main>
