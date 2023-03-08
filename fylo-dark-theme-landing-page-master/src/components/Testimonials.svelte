<script lang="ts">
  import profile1 from '../images/profile-1.jpg'
  import profile2 from '../images/profile-2.jpg'
  import profile3 from '../images/profile-3.jpg'
  import quoteBg from '../images/bg-quotes.png'

  const testimonials = [
    {
      body: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      image: profile1,
      name: 'Satish Patel',
      position: 'Founder & CEO, Huddle',
    },
    {
      body: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      image: profile2,
      name: 'Bruce McKenzie',
      position: 'Founder & CEO, Huddle',
    },
    {
      body: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      image: profile3,
      name: 'Iva Boyd',
      position: 'Founder & CEO, Huddle',
    },
  ]
</script>

<section class="relative mx-auto mt-48 max-w-screen-xl px-6">
  <div class="mx-auto max-w-xl lg:max-w-full">
    <img
      src={quoteBg}
      alt="quote"
      class="absolute -top-12 contrast-50 grayscale dark:filter-none lg:-top-8 lg:-translate-x-5"
      aria-hidden="true"
    />
    <ul class="relative grid gap-10 lg:grid-cols-3">
      {#each testimonials as item}
        <li class="text-sm">
          <article
            class="dark:bg-dark-blue-testimonials dark:shadow-dark-blue-intro bg-light space-y-5 rounded-lg px-8 py-9 shadow-lg shadow-black/40"
          >
            <h4 class="leading-7">{item.body}</h4>
            <footer class="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                class="h-10 shrink-0 rounded-full"
              />
              <div class="space-y-1">
                <h5 class="font-bold tracking-widest">{item.name}</h5>
                <p class="text-xs tracking-wider">{item.position}</p>
              </div>
            </footer>
          </article>
        </li>
      {/each}
    </ul>
  </div>
</section>
