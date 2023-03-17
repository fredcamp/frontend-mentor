<script lang="ts">
  import isDesktop from '../stores/viewport'

  let className: string = null

  export { className as class }
  const links = ['Collections', 'Men', 'Women', 'About', 'Contact']

  const anchorClass = $isDesktop
    ? 'relative transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] px-1 after:origin-right after:translate-y-8 after:scale-x-0 after:bg-orange after:transition-transform hover:text-black after:hover:origin-left hover:after:scale-x-100'
    : 'transition-colors hover:text-black'
</script>

<ul class={className}>
  {#each links as link}
    <li>
      <a href="/" class={anchorClass}>{link}</a>
    </li>
  {/each}
</ul>
