<script lang="ts">
  import HeroSmall from './HeroSmall.svelte'
  import HeroLarge from './HeroLarge.svelte'
  import isDesktop from '../stores/viewport'
</script>

{#if $isDesktop}
  <HeroLarge />
{:else}
  <HeroSmall />
{/if}
