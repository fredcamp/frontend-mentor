<script lang="ts">
  import Button from './Button.svelte'

  let email: string
  let isEmailValid: boolean

  function onSubmit(): void {
    const regex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    isEmailValid = regex.test(email)
  }
</script>

<section
  class="relative mx-auto max-w-screen-xl translate-y-1/2 px-6"
  id="sign-in"
>
  <form
    class="dark:bg-dark-blue-intro bg-light-desaturated-blue mx-auto max-w-4xl space-y-6 rounded-xl px-8 py-11 text-center text-lg text-white shadow-xl xl:text-base"
    on:submit|preventDefault={onSubmit}
  >
    <h3 class="text-2xl font-bold">Get early access today</h3>
    <p class="mx-auto max-w-3xl">
      It only takes a minute to sign up and our free starter tier is extremely
      generous. If you have any questions, our support team would be happy to
      help you.
    </p>
    <div class="grid gap-6 md:grid-cols-[2fr_1fr] md:px-14">
      <span class="sr-only">email address</span>
      <input
        type="text"
        class="text-dark-blue focus:ring-light-bright-blue focus:ring-offset-light-desaturated-blue dark:focus:ring-cyan dark:focus:ring-offset-dark-blue-intro rounded-full py-3 px-8 focus:outline-none focus:ring-2 focus:ring-offset-2"
        placeholder="email@example.com"
        bind:value={email}
      />
      <Button
        type="submit"
        class="dark:from-cyan dark:to-blue dark:hover:to-cyan bg-light-bright-blue hover:bg-light-bright-blue/80 block cursor-pointer rounded-full py-3 font-bold dark:bg-gradient-to-r"
      >
        Get Started For Free</Button
      >
      {#if isEmailValid === false}
        <p
          class="dark:text-red text-light -mt-4 pl-8 text-left text-xs tracking-wider"
        >
          Please enter a valid email address
        </p>
      {/if}
    </div>
  </form>
</section>
