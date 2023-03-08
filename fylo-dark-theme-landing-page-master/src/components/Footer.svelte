<script lang="ts">
  import logo from '../svg/logo.svg'
  import LocationIcon from '../svg/icon-location.svelte'
  import PhoneIcon from '../svg/icon-phone.svelte'
  import EmailIcon from '../svg/icon-email.svelte'
  import IconFacebook from '../svg/icon-facebook.svelte'
  import IconTwitter from '../svg/icon-twitter.svelte'
  import IconInstagram from '../svg/icon-instagram.svelte'
  import Anchor from './Anchor.svelte'
  import { footerNav } from '../constants/links'

  const socials = [
    {
      Icon: IconFacebook,
      name: 'Facebook',
    },
    {
      Icon: IconTwitter,
      name: 'Twitter',
    },
    {
      Icon: IconInstagram,
      name: 'Instagram',
    },
  ]
</script>

<footer
  class="dark:bg-dark-blue-footer bg-light-very-dark-blue pt-72 pb-14 text-lg text-white md:pt-52 xl:text-base"
>
  <div class="mx-auto max-w-screen-xl space-y-10 px-6">
    <div>
      <h3 class="sr-only">fylo</h3>
      <img src={logo} alt="fylo" class="h-9" />
    </div>
    <nav
      class="space-y-16 xl:grid xl:grid-cols-[auto_auto_auto_auto_auto] xl:items-start xl:gap-2 xl:space-y-0"
    >
      <ul class="space-y-5">
        <li class="flex items-center gap-6">
          <span class="mt-2 self-start"><LocationIcon /></span>
          <p class="max-w-[22rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </li>
      </ul>
      <ul class="!mt-5 space-y-5 xl:!mt-0">
        <li class="flex items-center gap-6">
          <span><PhoneIcon /></span>
          <p>+1-543-123-4567</p>
        </li>
        <li class="flex items-center gap-6">
          <span><EmailIcon /></span>
          <p>example@fylo.com</p>
        </li>
      </ul>
      <ul class="space-y-3">
        {#each footerNav.slice(0, 4) as item}
          <li><Anchor class="hover:font-bold">{item.title}</Anchor></li>
        {/each}
      </ul>
      <ul class="space-y-3">
        {#each footerNav.slice(4, 7) as item}
          <li><Anchor class="hover:font-bold">{item.title}</Anchor></li>
        {/each}
      </ul>
      <ul class="flex items-center justify-center gap-4 xl:justify-start">
        {#each socials as { Icon, name }}
          <li>
            <Anchor
              class="dark:hover:border-cyan hover:border-light-bright-blue dark:hover:text-cyan hover:text-light-bright-blue inline-flex items-center justify-center rounded-full border p-2"
            >
              <span class="sr-only">{name}</span>
              <Icon />
            </Anchor>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</footer>
