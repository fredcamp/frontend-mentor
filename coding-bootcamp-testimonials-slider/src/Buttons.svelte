<script lang="ts">
  import { getContext } from 'svelte'
  import next from './assets/icon-next.svg'
  import prev from './assets/icon-prev.svg'

  let className: string
  export { className as class }

  const updateCurrent: (type: 'increment' | 'decrement') => void =
    getContext('updateCurrent')
</script>

<div
  class="flex items-center justify-between gap-2 rounded-full bg-white px-2 py-3 shadow-lg {className}"
>
  <button class="px-2" on:click={() => updateCurrent('decrement')}>
    <img src={prev} alt="previous" class="h-3 w-2" />
  </button>
  <button class="px-2" on:click={() => updateCurrent('increment')}>
    <img src={next} alt="next" class="h-3 w-2" />
  </button>
</div>
