<script>
  let className = null

  export { className as class }
</script>

<a href="/" class={className} {...$$restProps} on:click|preventDefault>
  <slot />
</a>
