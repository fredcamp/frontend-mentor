<script lang="ts">
  export let title: string
  export let body: string
</script>

<article class="my-7 space-y-2">
  <h3 class="hover:text-orange text-xl font-bold text-white transition-colors">
    <a href="/" class="block">{title}</a>
  </h3>
  <p class="text-gray leading-7">{body}</p>
</article>
