<script lang="ts">
  import { slide, scale, fade } from 'svelte/transition'
  import { flip } from 'svelte/animate'
  import Button from './Button.svelte'
  import IconRemove from '../icons/icon-remove.svelte'
  import filterStore from '../stores/filter'

  function onClick(tag: string): void {
    $filterStore = $filterStore.filter((item) => item !== tag)
  }

  function onClear(): void {
    $filterStore = []
  }
</script>

{#if $filterStore.length > 0}
  <section
    class="relative flex -translate-y-1/2 items-center justify-between rounded-md bg-cyan-gray-light-tab py-6 px-8 shadow-xl shadow-cyan-primary/20"
    in:slide
    out:fade
  >
    <ul class="flex flex-wrap gap-x-4 gap-y-3">
      {#each $filterStore as item (item)}
        <li in:scale out:fade animate:flip={{ duration: 300, delay: 300 }}>
          <Button
            class="group flex items-stretch justify-center overflow-hidden rounded-md bg-cyan-primary/20 text-base font-bold text-cyan-primary"
            on:click={() => onClick(item)}
            ><span class="px-2 py-1">{item}</span>
            <span
              class="flex items-center justify-center bg-cyan-primary px-2 text-lg text-cyan-gray-light-tab transition-colors group-hover:bg-cyan-darker-gray"
            >
              <IconRemove />
            </span></Button
          >
        </li>
      {/each}
    </ul>
    <Button class="hover:text-cyan-primary hover:underline" on:click={onClear}
      >Clear</Button
    >
  </section>
{/if}
