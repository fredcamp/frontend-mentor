<script lang="ts">
  import slideStore, { currentSlide } from '../stores/slides'
  import Button from './Button.svelte'

  function changeCurrent(current: number): void {
    const currentIndex = $slideStore.findIndex(
      (item) => item.position === 'current'
    )

    if (currentIndex === current) return

    $slideStore = $slideStore.map((item) => ({ ...item, position: 'next' }))

    const prev = current === 0 ? $slideStore.length - 1 : current - 1
    $slideStore[current].position = 'current'
    $slideStore[prev].position = 'previous'
  }
</script>

<header>
  <div class="flex flex-col items-center gap-6">
    <img
      src={$currentSlide.image}
      alt="white and brown low-cut profile sneakers"
      class="max-h-[500px] w-full rounded-lg object-cover object-center"
      draggable="false"
    />
    <ul class="flex items-center justify-between gap-x-6">
      {#each $slideStore as item, i}
        <li>
          <Button
            class="group overflow-hidden rounded-lg {item.position === 'current'
              ? 'ring ring-orange'
              : null}"
            on:click={() => changeCurrent(i)}
          >
            <img
              src={item.thumbnail}
              alt="white and brown low-cut profile sneakers"
              class="object-cover object-center transition-opacity group-hover:opacity-50 {item.position ===
              'current'
                ? 'opacity-50'
                : null}"
              draggable="false"
            />
          </Button>
        </li>
      {/each}
    </ul>
  </div>
</header>
