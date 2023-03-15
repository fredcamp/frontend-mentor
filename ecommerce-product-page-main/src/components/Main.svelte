<script lang="ts">
  import isDesktop from '../stores/viewport'

  let className = null

  $: if ($isDesktop) {
    className =
      'max-w-screen-xl mx-auto px-8 grid grid-cols-2 items-center justify-between gap-x-10 my-20'
  } else {
    className = null
  }
</script>

<main class={className}>
  <slot />
</main>
