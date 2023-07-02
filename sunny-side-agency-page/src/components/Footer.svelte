<script>
  import logo from '../icons/footer-logo.svg'
  import Anchor from './Anchor.svelte'
  import IconFacebook from '../icons/icon-facebook.svelte'
  import IconInstagram from '../icons/icon-instagram.svelte'
  import IconTwitter from '../icons/icon-twitter.svelte'
  import IconPinterest from '../icons/icon-pinterest.svelte'
  import links from '../constants/links'

  const socials = [
    {
      name: 'Facebook',
      icon: IconFacebook,
    },
    {
      name: 'Instagram',
      icon: IconInstagram,
    },
    {
      name: 'Twitter',
      icon: IconTwitter,
    },
    {
      name: 'Pinterest',
      icon: IconPinterest,
    },
  ]
</script>

<footer class="bg-[#90d4c5]" id="Contact">
  <div class="text-primary-cyan flex flex-col items-center px-8 pb-10 pt-24">
    <Anchor aria-label="go home">
      <img src={logo} alt="brand logo" class="h-10" />
    </Anchor>
    <nav aria-label="footer navigation" class="w-full">
      <ul
        class="mx-auto mt-12 flex w-full max-w-lg flex-wrap items-center justify-around"
      >
        {#each links.slice(0, 3) as link}
          <li>
            <a
              href="/#{link}"
              class="text-primary-moderate-cyan text-xl transition-colors duration-300 hover:text-white"
              >{link}</a
            >
          </li>
        {/each}
      </ul>
      <ul
        class="mx-auto mt-20 flex w-full max-w-xs items-center justify-around"
        aria-label="socials"
      >
        {#each socials as social}
          <li>
            <Anchor
              aria-label={social.name}
              class="transition-colors duration-300 hover:text-white"
            >
              <svelte:component this={social.icon} />
            </Anchor>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</footer>
