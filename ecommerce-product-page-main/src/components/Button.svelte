<script lang="ts">
  export let type: 'button' | 'submit' = 'button'
  let className: string = null

  export { className as class }
</script>

<button {type} class={className} {...$$restProps} on:click>
  <slot />
</button>
