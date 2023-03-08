<script lang="ts">
  import favicon from './images/favicon-32x32.png'
  import Nav from './components/Nav.svelte'
  import Header from './components/Header.svelte'
  import Features from './components/Features.svelte'
  import Team from './components/Team.svelte'
  import Testimonials from './components/Testimonials.svelte'
  import SignIn from './components/SignIn.svelte'
  import Footer from './components/Footer.svelte'

  import { applyTheme } from './utils/theme'
  applyTheme()
</script>

<svelte:head>
  <link rel="shortcut icon" href={favicon} type="image/x-icon" />
</svelte:head>

<Nav />
<main>
  <Header />
  <Features />
  <Team />
  <Testimonials />
  <SignIn />
</main>
<Footer />
