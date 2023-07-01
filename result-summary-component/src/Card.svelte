<script>
  export let icon
  export let category
  export let score
  export let total

  let className

  export { className as class }
</script>

<div
  class="{className} flex flex-wrap items-center justify-between rounded-md px-6 py-4 font-bold md:text-base"
>
  <div class="flex space-x-3">
    <img src={icon} alt={category} />
    <h3>{category}</h3>
  </div>
  <p class="text-gray/50 font-extrabold">
    <span class="text-gray">{score}</span> / {total}
  </p>
</div>
