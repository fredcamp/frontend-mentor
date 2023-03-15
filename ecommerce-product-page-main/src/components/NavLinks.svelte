<script lang="ts">
  let className: string = null

  export { className as class }
  const links = ['Collections', 'Men', 'Women', 'About', 'Contact']
</script>

<ul class={className}>
  {#each links as link}
    <li><a href="/" class="transition-colors hover:text-black">{link}</a></li>
  {/each}
</ul>
