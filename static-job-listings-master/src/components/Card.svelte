<script lang="ts">
  import Button from './Button.svelte'
  import filterStore from '../stores/filter'
  import backToTop from '../utils/backToTop'

  export let logo: string
  export let company: string
  let isNew: boolean
  export let featured: boolean
  export let position: string
  export let postedAt: string
  export let contract: string
  export let location: string
  export let role: string
  export let level: string
  export let languages: string[]
  export let tools: string[]

  export { isNew as new }

  function onClick(tag: string): void {
    if ($filterStore.includes(tag)) return

    $filterStore = [...$filterStore, tag]
    backToTop()
  }
</script>

<article
  class="relative rounded-md border-l-[6px] border-transparent  bg-cyan-gray-light-bg p-6 shadow-xl shadow-cyan-primary/20 xl:grid xl:grid-cols-2 xl:items-center xl:py-3"
  class:!border-cyan-primary={featured}
>
  <header class="border-b border-cyan-dark-gray/50 pb-4 lg:border-0">
    <div class="xl:flex xl:items-center xl:space-x-4">
      <div
        class="absolute top-0 w-16 -translate-y-1/2 xl:relative xl:w-24 xl:translate-y-0"
      >
        <img src={logo} alt="{company} logo" />
      </div>
      <div class="space-y-3 xl:space-y-1">
        <div
          class="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 xl:gap-x-5"
        >
          <h2 class="font-bold text-cyan-primary">{company}</h2>
          {#if isNew || featured}
            <div class="flex flex-wrap items-center gap-3">
              {#each [isNew, featured] as item, i}
                {#if typeof item === 'boolean' && item}
                  <span
                    class="rounded-full py-[2px] px-3 text-base font-bold uppercase text-cyan-gray-light-tab"
                    class:bg-cyan-primary={i === 0}
                    class:bg-cyan-darker-gray={i === 1}
                  >
                    {i === 0 ? 'NEW!' : 'FEATURED'}
                  </span>
                {/if}
              {/each}
            </div>
          {/if}
        </div>
        <a
          href="/"
          class="inline-block font-bold text-cyan-darker-gray transition-colors hover:text-cyan-primary xl:text-xl"
          >{position}</a
        >
        <ul
          class="flex list-disc flex-wrap gap-x-6 marker:text-cyan-dark-gray/50"
        >
          {#each [postedAt, contract, location] as item}
            <li class="first:list-none">{item}</li>
          {/each}
        </ul>
      </div>
    </div>
  </header>
  <footer class="mt-4">
    <ul class="flex flex-wrap gap-y-4 gap-x-5">
      {#each [role, level, ...languages, ...tools] as item}
        <li>
          <Button
            class="rounded-md bg-cyan-primary/20 py-1 px-3 font-bold text-cyan-primary transition-colors hover:bg-cyan-primary hover:text-cyan-gray-light-tab"
            on:click={() => onClick(item)}
          >
            {item}
          </Button>
        </li>
      {/each}
    </ul>
  </footer>
</article>
