<script lang="ts">
  import { blur } from 'svelte/transition'
  import completeIcon from './assets/icon-complete.svg'
  import Button from './Button.svelte'
</script>

<section
  class="mx-auto mt-20 max-w-md p-5 lg:mt-0 lg:place-self-center lg:py-0"
  in:blur
>
  <div class="flex flex-col items-center justify-center space-y-6">
    <img src={completeIcon} alt="success" />
    <h2 class="text-3xl uppercase tracking-widest">thank you!</h2>
    <p class="text-gray-dark">We've added your card details</p>
    <Button
      class="bg-violet hover:bg-violet/90 focus:ring-violet !mt-7 w-full rounded-md py-3 text-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
      on:click>Continue</Button
    >
  </div>
</section>
