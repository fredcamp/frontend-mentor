<script lang="ts">
  import NavSmall from './NavSmall.svelte'
  import NavLarge from './NavLarge.svelte'

  let innerWidth = window.innerWidth
</script>

<svelte:window bind:innerWidth />

{#if innerWidth > 670}
  <NavLarge />
{:else}
  <NavSmall />
{/if}
