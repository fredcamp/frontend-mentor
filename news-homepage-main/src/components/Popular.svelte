<script lang="ts">
  import img1 from '../images/image-retro-pcs.jpg'
  import img2 from '../images/image-top-laptops.jpg'
  import img3 from '../images/image-gaming-growth.jpg'
  import PopularCard from './PopularCard.svelte'

  const articles = [
    {
      index: '01',
      image: img1,
      title: 'Reviving Retro PCs',
      body: 'What happens when old PCs are given modern upgrades?',
    },
    {
      index: '02',
      image: img2,
      title: 'Top 10 Laptops of 2022',
      body: 'Our best picks for various needs and budgets.',
    },
    {
      index: '03',
      image: img3,
      title: 'The Growth of Gaming',
      body: 'How the pandemic has sparked fresh opportunities.',
    },
  ]
</script>

<section class="mx-auto my-14 max-w-screen-sm px-6 sm:max-w-screen-xl xl:my-20">
  <ul class="space-y-8 xl:grid xl:grid-cols-3 xl:gap-8 xl:space-y-0">
    {#each articles as article}
      <li>
        <PopularCard {...article} />
      </li>
    {/each}
  </ul>
</section>
