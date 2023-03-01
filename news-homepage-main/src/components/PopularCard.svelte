<script lang="ts">
  export let image: string
  export let index: string
  export let title: string
  export let body: string
</script>

<article class="grid grid-cols-[auto_1fr] gap-6 xl:grid-cols-[1fr_2fr]">
  <img src={image} alt="sample" class="max-h-52 w-full xl:max-h-full" />
  <div class="space-y-3">
    <h2 class="text-gray text-4xl font-bold">{index}</h2>
    <h3 class="text-blue-dark hover:text-red text-xl font-bold">
      <a href="/" class="block">{title}</a>
    </h3>
    <p class="leading-7">{body}</p>
  </div>
</article>
