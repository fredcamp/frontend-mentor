<script lang="ts">
  import { slide, blur } from 'svelte/transition'
  import InputText from './InputText.svelte'
  import InputLabel from './InputLabel.svelte'
  import Button from './Button.svelte'
  import {
    nameValidator,
    cardNumberValidator,
    numberValidator,
  } from './utils/validator'

  export let error: boolean
  export let cardName: string
  export let cardNumber: string
  export let expMonth: string
  export let expYear: string
  export let expCvc: string

  let cardNameFeedback: string
  let cardNumberFeedback: string
  let expMonthFeedback: string
  let expYearFeedback: string
  let expCvcFeedback: string

  function onSubmit(): void {
    cardNameFeedback = nameValidator(cardName)
    cardNumberFeedback = cardNumberValidator(cardNumber)
    expMonthFeedback = numberValidator(expMonth, 2)
    expYearFeedback = numberValidator(expYear, 2)
    expCvcFeedback = numberValidator(expCvc, 3)

    error =
      typeof cardNameFeedback === 'string' ||
      typeof cardNumberFeedback === 'string' ||
      typeof expMonthFeedback === 'string' ||
      typeof expYearFeedback === 'string' ||
      typeof expCvcFeedback === 'string'
        ? true
        : false
  }
</script>

<section
  class="mx-auto mt-20 max-w-md p-5 lg:mt-0 lg:place-self-center"
  in:blur
>
  <form on:submit|preventDefault={onSubmit} class="space-y-5">
    <label for="name" class="block space-y-1">
      <InputLabel>cardholder name</InputLabel>
      <InputText
        id="name"
        placeholder="e.g. Fred Campo"
        maxlength="25"
        bind:value={cardName}
        bind:error={cardNameFeedback}
      />
      {#if typeof cardNameFeedback === 'string'}
        <p class="text-red text-xs" transition:slide|local>
          {cardNameFeedback}
        </p>
      {/if}
    </label>
    <label for="card-number" class="block space-y-1">
      <InputLabel>card number</InputLabel>
      <InputText
        id="card-number"
        placeholder="e.g. 1234 5678 9123 0000"
        maxlength="19"
        bind:value={cardNumber}
        bind:error={cardNumberFeedback}
      />
      {#if typeof cardNumberFeedback === 'string'}
        <p class="text-red text-xs" transition:slide|local>
          {cardNumberFeedback}
        </p>
      {/if}
    </label>
    <div class="grid grid-cols-2 place-items-start gap-2">
      <label for="exp-date" class="grid gap-x-2 space-y-1">
        <InputLabel gridSpan={true}>exp. date (mm/yy)</InputLabel>
        <InputText
          id="exp-date"
          placeholder="MM"
          maxlength="2"
          size="3"
          bind:value={expMonth}
          bind:error={expMonthFeedback}
        />
        <InputText
          placeholder="YY"
          maxlength="2"
          size="3"
          bind:value={expYear}
          bind:error={expYearFeedback}
        />
        {#if typeof expMonthFeedback === 'string' || typeof expYearFeedback === 'string'}
          <p class="text-red text-xs" transition:slide|local>
            {typeof expMonthFeedback === 'string'
              ? expMonthFeedback
              : typeof expYearFeedback === 'string'
              ? expYearFeedback
              : ''}
          </p>
        {/if}
      </label>
      <label for="cvc" class="space-y-1 self-stretch">
        <InputLabel>cvc</InputLabel>
        <InputText
          id="cvc"
          placeholder="e.g. 123"
          maxlength="3"
          bind:value={expCvc}
          bind:error={expCvcFeedback}
        />
        {#if typeof expCvcFeedback === 'string'}
          <p class="text-red text-xs" transition:slide|local>
            {expCvcFeedback}
          </p>
        {/if}
      </label>
    </div>
    <Button
      type="submit"
      class="bg-violet hover:bg-violet/90 focus:ring-violet !mt-7 w-full rounded-md py-3 text-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
      >Confirm</Button
    >
  </form>
</section>
