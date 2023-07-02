<script>
  import { slide, blur } from 'svelte/transition'
  import IconError from '../assets/icon-error.svelte'

  export let value
  export let placeholder
  export let isValid
  export let errorMessage

  const errorId = placeholder.split(' ').join('-')
</script>

<div>
  <div class="relative">
    <input
      class="placeholder:text-blue-gray border-blue-gray text-blue-dark focus:border-blue-dark block w-full rounded-lg border-2 px-4 py-3 pr-12 font-semibold placeholder:font-semibold focus:outline-none lg:text-sm"
      {...$$restProps}
      class:border-red={!isValid}
      class:focus:border-red={!isValid}
      aria-label={placeholder}
      aria-invalid={isValid ? null : true}
      aria-describedby={isValid ? null : 'error_{errorId}'}
      {placeholder}
      bind:value
      on:input
    />
    {#if !isValid}
      <span
        class="absolute right-4 top-1/2 -translate-y-1/2"
        aria-hidden="true"
        transition:blur
      >
        <IconError />
      </span>
    {/if}
  </div>

  {#if !isValid}
    <p
      class="text-red mt-1 text-right text-xs font-medium italic"
      id="error-{errorId}"
      transition:slide
    >
      {errorMessage}
    </p>
  {/if}
</div>
