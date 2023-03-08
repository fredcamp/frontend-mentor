<script lang="ts">
  import img1 from '../svg/icon-access-anywhere.svelte'
  import img2 from '../svg/icon-security.svelte'
  import img3 from '../svg/icon-collaboration.svelte'
  import img4 from '../svg/icon-any-file.svelte'

  const articles = [
    {
      Icon: img1,
      title: 'Access your files, anywhere',
      body: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
    },
    {
      Icon: img2,
      title: 'Security you can trust',
      body: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
    },
    {
      Icon: img3,
      title: 'Real-time collaboration',
      body: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
    },
    {
      Icon: img4,
      title: 'Store any type of file',
      body: `Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored ad shared.`,
    },
  ]
</script>

<section class="mx-auto mt-48 max-w-screen-xl px-6" id="features">
  <ul class="grid items-center justify-center gap-28 lg:grid-cols-2">
    {#each articles as item}
      {@const Icon = item.Icon}
      <li>
        <article
          class="flex flex-col place-items-center items-center space-y-4 text-center"
        >
          <span
            class="text-light dark:text-dark-blue contrast-100 hue-rotate-30 dark:filter-none"
          >
            <Icon />
          </span>
          <h3 class="!mt-8 text-2xl font-bold">{item.title}</h3>
          <p class="mx-auto max-w-md text-lg xl:text-base">{item.body}</p>
        </article>
      </li>
    {/each}
  </ul>
</section>
