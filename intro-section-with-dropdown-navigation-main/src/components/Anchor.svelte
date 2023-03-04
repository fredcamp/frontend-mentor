<script lang="ts">
  let className: string = ''

  export { className as class }

  function onClick(e): void {
    e.preventDefault()
    return
  }
</script>

<a href="/" class={className} {...$$restProps} on:click={onClick}>
  <slot />
</a>
