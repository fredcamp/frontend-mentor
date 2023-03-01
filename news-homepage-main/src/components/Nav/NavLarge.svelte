<script lang="ts">
  import Logo from '../../images/logo.svelte'
  import NavLinks from './NavLinks.svelte'
</script>

<nav class="mx-auto max-w-screen-xl">
  <div class="flex items-center justify-between px-6 py-9">
    <h1>
      <span class="sr-only">brand logo</span>
      <Logo />
    </h1>
    <NavLinks class="flex items-center justify-between gap-10" />
  </div>
</nav>
