<script lang="ts">
  export let gridSpan = false
</script>

<p
  class="text-sm font-medium uppercase tracking-widest"
  class:col-span-2={gridSpan}
>
  <slot />
</p>
