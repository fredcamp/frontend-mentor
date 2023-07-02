<script>
  // @ts-nocheck

  export let type = 'button'
  let className = null

  export { className as class }
</script>

<button {type} class={className} {...$$restProps} on:click>
  <slot />
</button>
