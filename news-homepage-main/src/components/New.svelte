<script lang="ts">
  import NewArticle from './NewArticle.svelte'

  const articles = [
    {
      title: 'Hydrogen VS Electric Cars',
      body: 'Will hydrogen-fueled cars ever catch up to EVs?',
    },
    {
      title: 'The Downsides of AI Artistry',
      body: 'What are the possible adverse effects of on-demand AI image generation?',
    },
    {
      title: 'Is VC Funding Drying Up?',
      body: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    },
  ]
</script>

<section
  class="mx-auto mt-14 max-w-screen-sm px-6 sm:max-w-screen-xl xl:mt-0 xl:max-w-md"
>
  <div class="bg-blue-dark px-5 py-9">
    <h2 class="text-orange text-4xl font-bold">New</h2>
    <ul>
      {#each articles as article}
        <li
          class="border-b-blue-gray border-b last:-mb-7 last-of-type:border-b-0"
        >
          <NewArticle {...article} />
        </li>
      {/each}
    </ul>
  </div>
</section>
