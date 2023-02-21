<script lang="ts">
  let className: string
  export { className as class }
  export let type: 'button' | 'submit' = 'button'
</script>

<button {type} class={className} {...$$restProps} on:click>
  <slot />
</button>
