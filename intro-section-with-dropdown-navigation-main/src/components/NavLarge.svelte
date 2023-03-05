<script lang="ts">
  import { fly, fade } from 'svelte/transition'

  import Logo from '../icons/logo.svelte'
  import CaretIcon from '../icons/icon-arrow-down.svelte'

  import { createLinks } from '../constants/Links.svelte'
  import Anchor from './Anchor.svelte'
  import Button from './Button.svelte'
  import clickOutside from '../utils/clickOutside'

  const links = createLinks()
</script>

<div
  class="flex items-center justify-between px-6 py-7 xl:mx-auto xl:max-w-screen-xl"
>
  <ul class="flex items-center justify-center gap-x-11">
    <li class="mr-14">
      <Anchor
        class="flex items-center justify-center transition-transform hover:scale-110"
      >
        <h1 class="sr-only">snap</h1>
        <Logo />
      </Anchor>
    </li>
    {#each links as link}
      {#if link.links === undefined}
        <li>
          <Anchor class="hover:text-black">
            {link.page}
          </Anchor>
        </li>
      {:else}
        <li
          class="relative"
          use:clickOutside
          on:outclick={() => (link.toggle = false)}
        >
          <Button
            class="flex items-center justify-center gap-x-2 hover:text-black {link.toggle
              ? 'text-black'
              : 'text-gray'}"
            aria-expanded={link.toggle}
            aria-controls={link.toggle ? 'link-dropdown' : null}
            on:click={() => (link.toggle = !link.toggle)}
          >
            {link.page}
            <span
              class="transition-transform duration-500"
              class:rotate-x-180={link.toggle}
            >
              <CaretIcon />
            </span>
          </Button>
          {#if link.toggle}
            <ul
              class="shadow-custom absolute top-full min-w-[150px] translate-y-4  space-y-3 rounded-lg bg-white p-6"
              id="link-dropdown"
              in:fly={{ y: -30, duration: 500 }}
              out:fade
            >
              {#each link.links as { Icon, page }}
                <li>
                  <Anchor class="flex items-center gap-x-2 hover:text-black">
                    {#if typeof Icon !== 'string'}
                      <span
                        aria-hidden="true"
                        class="inline-flex w-5 items-center justify-center"
                      >
                        <Icon />
                      </span>
                    {/if}
                    <span>{page}</span>
                  </Anchor>
                </li>
              {/each}
            </ul>
          {/if}
        </li>
      {/if}
    {/each}
  </ul>
  <ul class="flex items-center gap-x-11">
    <li>
      <Anchor class="block text-center hover:text-black">Login</Anchor>
    </li>
    <li>
      <Anchor
        class="block rounded-xl py-2 px-7 text-center ring-1 ring-black transition-all hover:text-black hover:ring-2"
        >Register</Anchor
      >
    </li>
  </ul>
</div>
