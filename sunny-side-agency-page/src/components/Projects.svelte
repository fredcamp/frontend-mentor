<script>
  const projects = [
    {
      mobile: '/images/mobile/image-gallery-milkbottles.jpg',
      desktop: '/images/desktop/image-gallery-milkbottles.jpg',
      alt: 'milk bottles',
    },
    {
      mobile: '/images/mobile/image-gallery-orange.jpg',
      desktop: '/images/desktop/image-gallery-orange.jpg',
      alt: 'sliced orange on plate',
    },
    {
      mobile: '/images/mobile/image-gallery-cone.jpg',
      desktop: '/images/desktop/image-gallery-cone.jpg',
      alt: 'icecream cone',
    },
    {
      mobile: '/images/mobile/image-gallery-sugar-cubes.jpg',
      desktop: '/images/desktop/image-gallery-sugar-cubes.jpg',
      alt: 'stacks of sugar cubes',
    },
  ]
</script>

<section id="Projects">
  <ul class="grid grid-cols-2 lg:grid-cols-4">
    {#each projects as project}
      <li>
        <picture>
          <source media="(min-width: 1240px )" srcset={project.desktop} />
          <img
            src={project.mobile}
            alt={project.alt}
            class="h-full w-full cursor-pointer object-cover object-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          />
        </picture>
      </li>
    {/each}
  </ul>
</section>
