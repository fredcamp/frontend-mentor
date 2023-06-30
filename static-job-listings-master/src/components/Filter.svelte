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
    class="bg-cyan-gray-light-tab shadow-cyan-primary/20 relative flex -translate-y-1/2 items-center justify-between rounded-md py-6 px-8 shadow-xl"
    in:slide
    out:fade
  >
    <ul class="flex flex-wrap gap-x-4 gap-y-3">
      {#each $filterStore as item (item)}
        <li in:scale out:fade animate:flip={{ duration: 300, delay: 300 }}>
          <Button
            class="bg-cyan-primary/20 text-cyan-primary group flex items-stretch justify-center overflow-hidden rounded-md text-base font-bold"
            on:click={() => onClick(item)}
            ><span class="px-2 py-1">{item}</span>
            <span
              class="bg-cyan-primary text-cyan-gray-light-tab group-hover:bg-cyan-darker-gray flex items-center justify-center px-2 text-lg transition-colors"
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
