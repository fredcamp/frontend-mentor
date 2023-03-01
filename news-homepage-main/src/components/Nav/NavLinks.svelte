<script lang="ts">
  let className: string = ''
  const links = ['Home', 'New', 'Popular', 'Trending', 'Categories']

  export { className as class }
</script>

<ul class={className} {...$$restProps}>
  {#each links as link}
    <li class="hover:text-orange select-none transition-colors">
      <a href="/" class="block">{link}</a>
    </li>
  {/each}
</ul>
