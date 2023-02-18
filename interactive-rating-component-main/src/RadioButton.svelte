<script lang="ts">
  export let selected: number;
  export let num: number;

  const isSelected = "bg-orange text-white";
  const notSelected = "bg-gray-dark/10 hover:bg-gray-dark/50 hover:text-white";
</script>

<label
  class="inline-flex h-12 w-12 cursor-pointer select-none items-center justify-center rounded-full font-bold shadow-md transition-colors {selected ===
  num
    ? isSelected
    : notSelected}"
>
  <input
    type="radio"
    bind:group={selected}
    class="appearance-none"
    value={num}
  />{num}
</label>
