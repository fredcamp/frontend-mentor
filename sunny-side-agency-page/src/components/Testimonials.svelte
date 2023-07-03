<script>
  import img1 from '../assets/image-emily.jpg'
  import img2 from '../assets/image-thomas.jpg'
  import img3 from '../assets/image-jennie.jpg'

  const testimonials = [
    {
      image: img1,
      name: 'Emily R.',
      role: 'Marketing Director',
      quote:
        'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    },
    {
      image: img2,
      name: 'Thomas S.',
      role: 'Chief Operating Officer',
      quote:
        'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
    },
    {
      image: img3,
      name: 'Jennie F.',
      role: 'Business Owner',
      quote:
        'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    },
  ]
</script>

<section>
  <div class="mx-auto max-w-[1700px] px-8 py-28 xl:px-0 xl:py-40">
    <h2
      class="text-blue-slate text-center font-serif text-2xl font-black uppercase tracking-[0.2em]"
    >
      Client Testimonials
    </h2>
    <ul
      class="mt-20 space-y-28 xl:mt-32 xl:grid xl:grid-cols-3 xl:justify-center xl:space-y-0"
    >
      {#each testimonials as item}
        <li>
          <figure
            class="flex flex-col items-center justify-center space-y-8 text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              class="h-24 w-24 rounded-full"
            />
            <blockquote class="mx-auto max-w-md text-2xl leading-10 xl:text-xl">
              {item.quote}
            </blockquote>
            <figcaption>
              <p class="text-blue font-serif text-2xl font-black xl:text-xl">
                {item.name}
              </p>
              <p class="text-blue-slate mt-2">{item.role}</p>
            </figcaption>
          </figure>
        </li>
      {/each}
    </ul>
  </div>
</section>
