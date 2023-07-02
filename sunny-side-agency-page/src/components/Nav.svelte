<script>
  import NavMobile from './NavMobile.svelte'
  import NavLarge from './NavLarge.svelte'

  let innerWidth = window.innerWidth
</script>

<svelte:window bind:innerWidth />

{#if innerWidth > 760}
  <NavLarge />
{:else}
  <NavMobile />
{/if}
