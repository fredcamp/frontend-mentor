<script>
  import Card from './Card.svelte'
  import data from './data.json'

  const colors = [
    { class: 'bg-red/10 text-red' },
    { class: 'bg-yellow/10 text-yellow' },
    { class: 'bg-green/10 text-green' },
    { class: 'bg-blue/10 text-blue' },
  ]

  const summaryData = data.map((item, index) => {
    return {
      ...item,
      total: 100,
      class: colors[index].class,
    }
  })
</script>

<svelte:head>
  <link rel="shortcut icon" href="/favicon-32x32.png" type="image/x-icon" />
  <title>Frontend Mentor | Results summary component</title>
</svelte:head>

<main class="min-h-screen md:flex md:items-center md:justify-center">
  <h1 class="sr-only">result summary</h1>
  <section
    class="shadow-lg md:mx-auto md:grid md:max-w-screen-lg md:grid-cols-2 md:overflow-hidden md:rounded-[2rem]"
  >
    <article
      class="from-blue-slate to-blue-royal text-pale space-y-6 rounded-b-[2rem] bg-gradient-to-b p-8 text-center md:flex md:flex-col md:justify-center md:rounded-[2rem] md:px-20"
    >
      <h2 class="text-lavender text-xl">Your Result</h2>
      <div
        class="from-blue-violet to-blue-persian mx-auto max-w-fit space-y-1 rounded-full bg-gradient-to-b px-11 py-8 md:px-14 md:py-11"
      >
        <p class="flex text-6xl font-extrabold">76</p>
        <p class="text-lavender text-base">of 100</p>
      </div>
      <div class="space-y-3">
        <p class="text-2xl font-bold md:text-[1.75rem]">Great</p>
        <p
          class="text-lavender mx-auto max-w-[18rem] text-base md:max-w-[14rem]"
        >
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </article>
    <article class="space-y-7 px-7 py-8 md:flex md:flex-col md:justify-center">
      <h2 class="text-xl font-extrabold">Summary</h2>
      <ul class="space-y-5 md:space-y-4">
        {#each summaryData as item}
          <li>
            <Card {...item} />
          </li>
        {/each}
      </ul>
      <button
        class="bg-gray text-pale hover:from-blue-slate hover:to-blue-royal w-full rounded-full py-4 text-xl hover:bg-gradient-to-b md:py-3 md:text-base"
        >Continue</button
      >
    </article>
  </section>
</main>
