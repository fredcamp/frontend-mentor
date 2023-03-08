<script lang="ts">
  export let type: 'submit' | 'button' = 'button'
  let className: string = null
  export { className as class }
</script>

<button {type} class="font-serif {className}" {...$$restProps} on:click>
  <slot />
</button>
