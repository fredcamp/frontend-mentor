<script lang="ts">
  import { slide } from 'svelte/transition'

  import CaretIcon from '../icons/icon-arrow-down.svelte'

  import { createLinks } from '../constants/Links.svelte'
  import Button from './Button.svelte'
  import Anchor from './Anchor.svelte'

  let className: string = ''
  export { className as class }

  let links = createLinks()
</script>

<ul class={className} {...$$restProps}>
  {#each links as link}
    {#if link.links === undefined}
      <li>
        <Anchor class="block hover:text-black">
          {link.page}
        </Anchor>
      </li>
    {:else}
      <li>
        <Button
          class="flex w-full items-center gap-x-2 text-left hover:text-black {link.toggle
            ? 'text-black'
            : 'text-gray'}"
          on:click={() => (link.toggle = !link.toggle)}
        >
          {link.page}
          <span
            aria-hidden="true"
            class="transition-transform duration-500"
            class:rotate-x-180={link.toggle}
          >
            <CaretIcon />
          </span>
        </Button>
        {#if link.toggle}
          <ul
            transition:slide|local={{ duration: 500 }}
            class="mt-4 space-y-4 pl-6"
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
  <li>
    <Anchor class="block text-center hover:text-black">Login</Anchor>
  </li>
  <li>
    <Anchor
      class="block rounded-xl py-2 text-center ring-1 ring-black transition-all hover:text-black hover:ring-2"
      >Register</Anchor
    >
  </li>
</ul>
