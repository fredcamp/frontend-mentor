<script lang="ts">
  import Filter from './components/Filter.svelte'
  import List from './components/List.svelte'
  import data from './constants/data.json'
  import type { Job } from './types/Job.type'

  import filterStore from './stores/filter'

  let jobs: Job[]

  //svelte reactivity, so whenever filterStore value changes, the function would execute
  $: applyFilter(), $filterStore

  function applyFilter(): void {
    if ($filterStore.length === 0) {
      jobs = [...data]
      return
    }

    jobs = data.filter((post) => {
      const { role, level, languages, tools } = post
      const keys = [role, level, ...languages, ...tools]

      const hasAllElements = $filterStore.every((item) => keys.includes(item))
      if (hasAllElements) return post
    })
  }
</script>

<header
  class="min-h-[30vh] bg-cyan-primary bg-header-mobile bg-cover bg-center bg-no-repeat"
>
  <h1 class="sr-only">static job listing</h1>
</header>
<main class="relative mx-auto max-w-screen-xl px-8">
  <Filter />
  <List bind:data={jobs} />
</main>
