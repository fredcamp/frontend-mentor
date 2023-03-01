<script lang="ts">
  import favicon from './images/favicon-32x32.png'
  import Nav from './components/Nav/Nav.svelte'
  import Home from './components/Home.svelte'
  import New from './components/New.svelte'
  import Popular from './components/Popular.svelte'
</script>

<svelte:head>
  <link rel="shortcut icon" href={favicon} type="image/x-icon" />
</svelte:head>

<Nav />
<main>
  <div
    class="xl:mx-auto xl:my-4 xl:grid xl:max-w-screen-xl xl:grid-cols-[1fr_auto]"
  >
    <Home />
    <New />
  </div>
  <Popular />
</main>
