<script lang="ts">
  import NavSmall from './NavSmall.svelte'
  import NavLarge from './NavLarge.svelte'

  let innerWidth = window.innerWidth
</script>

<svelte:window bind:innerWidth />

<nav>
  {#if innerWidth > 1023}
    <NavLarge />
  {:else}
    <NavSmall />
  {/if}
</nav>
