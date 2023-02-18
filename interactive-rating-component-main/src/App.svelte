<script lang="ts">
  import icon from "./images/favicon-32x32.png";
  import star from "./images/icon-star.svg";
  import submitImg from "./images/illustration-thank-you.svg";
  import RadioButton from "./RadioButton.svelte";
  let selected: number;
  let show = false;

  function handleSubmit() {
    if (!selected) return;
    show = true;
  }
</script>

<svelte:head>
  <link rel="shortcut icon" href={icon} type="image/x-icon" />
</svelte:head>

<main class="flex min-h-screen flex-col items-center justify-center px-6">
  <section
    class="bg-blue mx-auto min-h-[400px] max-w-sm overflow-hidden rounded-lg px-6 py-8 shadow-md"
  >
    {#if show}
      <div class="flex flex-col items-center justify-center space-y-6 py-3">
        <img src={submitImg} alt="submit processed illustration" />
        <p
          class="bg-gray-dark/10 text-orange rounded-full py-2 px-5 font-bold shadow-md"
        >
          You selected {selected} out of 5
        </p>
        <div class="space-y-3 text-center">
          <h2 class="text-3xl font-bold text-white">Thank you!</h2>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    {:else}
      <form on:submit|preventDefault={handleSubmit} class="space-y-4">
        <span
          class="bg-gray-dark/10 inline-flex h-12 w-12 items-center justify-center rounded-full shadow-md"
        >
          <img src={star} alt="star icon" class="h-4" />
        </span>
        <h2 class="text-3xl font-bold text-white">How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <ul class="!mt-7 flex justify-between">
          {#each new Array(5) as item, i}
            <li>
              <RadioButton bind:selected num={i + 1} />
            </li>
          {/each}
        </ul>
        <button
          class="bg-orange hover:text-orange !mt-6 block w-full rounded-full py-3 text-center font-bold uppercase tracking-widest text-white shadow-md transition-colors hover:bg-white"
          type="submit">Submit</button
        >
      </form>
    {/if}
  </section>
</main>
