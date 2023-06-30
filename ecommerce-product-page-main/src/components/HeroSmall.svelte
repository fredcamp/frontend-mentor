<script lang="ts">
  import { onDestroy } from 'svelte'

  import IconPrevious from '../icons/icon-previous.svelte'
  import IconNext from '../icons/icon-next.svelte'
  import Button from './Button.svelte'

  import slideStore from '../stores/slides'

  let loading = false
  let timeoutId: number

  onDestroy(() => clearTimeout(timeoutId))

  function onClick(type: 'next' | 'prev'): void {
    if (loading) return

    loading = true
    const currentIndex = $slideStore.findIndex(
      (item) => item.position === 'current'
    )

    let current: number, prev: number

    $slideStore = $slideStore.map((item) => ({ ...item, position: 'next' }))

    if (type === 'next') {
      current = currentIndex === $slideStore.length - 1 ? 0 : currentIndex + 1
    } else {
      current = currentIndex === 0 ? $slideStore.length - 1 : currentIndex - 1
    }

    prev = current === 0 ? $slideStore.length - 1 : current - 1

    $slideStore[current].position = 'current'
    $slideStore[prev].position = 'previous'

    timeoutId = setTimeout(() => (loading = false), 500)
  }
</script>

<header>
  <div class="relative h-[70vh] max-h-[450px] overflow-hidden">
    <ul>
      {#each $slideStore as slide (slide.id)}
        <li
          class="absolute inset-0 opacity-0 transition-all"
          class:translate-x-0={slide.position === 'current'}
          class:translate-x-full={slide.position === 'next'}
          class:-translate-x-full={slide.position === 'previous'}
          class:opacity-100={slide.position === 'current'}
        >
          <img
            src={slide.image}
            alt="white and brown low-cut profile sneakers"
            class="h-full w-full object-cover object-center"
            draggable="false"
          />
        </li>
      {/each}
    </ul>
    <Button
      class="hover:text-orange absolute left-4 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-white transition-colors
    "
      on:click={() => onClick('prev')}
    >
      <div class="flex items-center justify-center">
        <span class="sr-only">previous</span>
        <IconPrevious />
      </div>
    </Button>
    <Button
      class="hover:text-orange absolute right-4 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-white transition-colors
    "
      on:click={() => onClick('next')}
    >
      <div class="flex items-center justify-center">
        <span class="sr-only">next</span>
        <IconNext />
      </div>
    </Button>
  </div>
</header>
