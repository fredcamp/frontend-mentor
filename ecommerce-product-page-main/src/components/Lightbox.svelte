<script lang="ts">
  import { onMount, tick } from 'svelte'
  import { fade } from 'svelte/transition'

  import type { Slide } from '../types/slides.type'
  import Button from './Button.svelte'
  import IconClose from '../icons/icon-close.svelte'
  import IconPrevious from '../icons/icon-previous.svelte'
  import IconNext from '../icons/icon-next.svelte'

  import clickOutside from '../utils/clickoutside'

  export let slides: Slide[]
  export let show: boolean

  let loading = false

  $: currentSlide = slides.find((item) => item.position === 'current')

  onMount(() => {
    document.body.classList.add('overflow-y-hidden')

    return () => document.body.classList.remove('overflow-y-hidden')
  })

  function handleClick(type: 'next' | 'prev'): void {
    const currentIndex = slides.findIndex((item) => item.position === 'current')

    let current: number

    if (type === 'prev') {
      current = currentIndex === 0 ? slides.length - 1 : currentIndex - 1
    } else {
      current = currentIndex === slides.length - 1 ? 0 : currentIndex + 1
    }

    changeCurrent(current)
  }

  function changeCurrent(current: number): void {
    if (loading) return

    const currentIndex = slides.findIndex((item) => item.position === 'current')

    if (currentIndex === current) return
    loading = true

    slides = slides.map((item) => ({ ...item, position: 'next' }))

    const prev = current === 0 ? slides.length - 1 : current - 1
    slides[current].position = 'current'
    slides[prev].position = 'previous'

    tick().then(() => (loading = false))
  }
</script>

<div class="fixed inset-0 bg-black/80">
  <div class="mx-auto grid h-full place-items-center" in:fade>
    <div
      class="relative max-w-[400px]"
      use:clickOutside
      on:outclick={() => (show = false)}
    >
      <Button
        class="ml-auto block py-3 text-white transition-colors hover:text-orange"
        on:click={() => (show = false)}><IconClose /></Button
      >
      <div class="relative">
        <img
          src={currentSlide.image}
          alt="Fall Limited Edition Sneakers"
          class="rounded-xl object-cover object-center"
          draggable="false"
        />
        <Button
          class="absolute top-1/2 h-12 w-12 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white transition-colors hover:text-orange"
          on:click={() => handleClick('prev')}
        >
          <div class="flex items-center justify-center">
            <span class="sr-only">previous</span>
            <IconPrevious />
          </div>
        </Button>
        <Button
          class="absolute top-1/2 right-0 h-12 w-12 -translate-y-1/2 translate-x-1/2 rounded-full bg-white transition-colors hover:text-orange"
          on:click={() => handleClick('next')}
        >
          <div class="flex items-center justify-center">
            <span class="sr-only">next</span>
            <IconNext />
          </div>
        </Button>
      </div>
      <div>
        <ul class="mt-6 flex items-center justify-between gap-x-6 px-4">
          {#each slides as item, i}
            <li>
              <Button
                class="overflow-hidden rounded-lg {item === currentSlide
                  ? 'ring-2 ring-orange'
                  : 'hover:ring-2 hover:ring-orange'} group relative transition-colors"
                on:click={() => changeCurrent(i)}
              >
                <img
                  src={item.thumbnail}
                  alt="Fall Limited Edition Sneakers"
                  draggable="false"
                />
                <span
                  aria-hidden="true"
                  class="absolute inset-0 bg-white/50 opacity-0  group-hover:opacity-100"
                  class:opacity-100={item === currentSlide}
                />
              </Button>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>
