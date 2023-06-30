<script lang="ts">
  import { tick } from 'svelte'
  import slideStore, { currentSlide } from '../stores/slides'
  import Button from './Button.svelte'
  import Lightbox from './Lightbox.svelte'

  let loading = false
  let showLightbox = false

  function toggleLightbox(): void {
    showLightbox = !showLightbox
  }

  function changeCurrent(current: number): void {
    if (loading) return
    const currentIndex = $slideStore.findIndex(
      (item) => item.position === 'current'
    )

    if (currentIndex === current) return
    loading = true

    $slideStore = $slideStore.map((item) => ({ ...item, position: 'next' }))

    const prev = current === 0 ? $slideStore.length - 1 : current - 1
    $slideStore[current].position = 'current'
    $slideStore[prev].position = 'previous'

    tick().then(() => (loading = false))
  }
</script>

<header>
  <div class="flex flex-col items-center gap-6">
    <Button
      class="max-h-[500px] w-full cursor-pointer overflow-hidden rounded-lg"
      on:click={toggleLightbox}
    >
      <img
        src={$currentSlide.image}
        alt="white and brown low-cut profile sneakers"
        class="object-cover object-center"
        draggable="false"
      />
    </Button>
    <ul class="flex items-center justify-between gap-x-6">
      {#each $slideStore as item, i}
        <li>
          <Button
            class="group overflow-hidden rounded-lg {item.position === 'current'
              ? 'ring-orange ring'
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

{#if showLightbox}
  <Lightbox bind:show={showLightbox} slides={$slideStore} />
{/if}
