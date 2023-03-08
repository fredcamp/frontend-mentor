<script lang="ts">
  let className: string = null

  export { className as class }
  export let url: string = '/'
</script>

<a href={url} class="font-serif {className}" {...$$restProps} on:click>
  <slot />
</a>
