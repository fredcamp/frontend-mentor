<script lang="ts">
  export let id: string = null
  export let value: unknown
  export let error: string
</script>

<input
  type="text"
  {id}
  class="bg-clip-paddbox focus:bg-custom-gradient w-full rounded-lg border-2 bg-origin-border p-2 tracking-wider transition-colors focus:border-transparent focus:outline-none"
  autocomplete="no"
  class:border-red={error}
  class:border-gray={!error}
  {...$$restProps}
  bind:value
/>
