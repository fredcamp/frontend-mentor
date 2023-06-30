<script lang="ts">
  import Logo from '../icons/logo.svelte'
  import NavLinks from './NavLinks.svelte'
  import Button from './Button.svelte'
</script>

<div class="flex items-center gap-x-16">
  <a href="/" class="hover:text-orange transition-colors">
    <h1 class="sr-only">sneakers</h1>
    <Logo />
  </a>
  <NavLinks class="text-blue-gray-dark flex items-center gap-x-9 text-base" />
</div>
