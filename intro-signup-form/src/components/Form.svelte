<script>
  import { slide } from 'svelte/transition'
  import InputText from './InputText.svelte'

  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

  $: formHasError =
    !firstName.isValid ||
    !firstName.value ||
    !lastName.isValid ||
    !lastName.value ||
    !email.isValid ||
    !email.value ||
    !password.isValid ||
    !password.value

  let freeTrialSuccess = false

  let firstName = {
    value: '',
    isValid: true,
    errorMessage: 'First Name cannot be empty',
  }

  let lastName = {
    value: '',
    isValid: true,
    errorMessage: 'Last Name cannot be empty',
  }

  let email = {
    value: '',
    isValid: true,
    errorMessage: 'Looks like this is not an email',
  }

  let password = {
    value: '',
    isValid: true,
    errorMessage: 'Password cannot be empty',
  }

  function firstNameEventHandler() {
    if (firstName.value.trim().length < 1) {
      firstName.isValid = false
      return
    }
    firstName.isValid = true
  }

  function lastNameEventHandler() {
    if (lastName.value.trim().length < 1) {
      lastName.isValid = false
      return
    }
    lastName.isValid = true
  }

  function emailEventHandler() {
    if (email.value.trim().length < 1 || !emailRegex.test(email.value)) {
      email.isValid = false
      return
    }
    email.isValid = true
  }

  function passwordEventHandler() {
    if (password.value.trim().length < 1) {
      password.isValid = false
      return
    }
    password.isValid = true
  }

  function onSubmit() {
    firstNameEventHandler()
    lastNameEventHandler()
    emailEventHandler()
    passwordEventHandler()

    if (formHasError) return

    firstName.value = ''
    lastName.value = ''
    email.value = ''
    password.value = ''
    freeTrialSuccess = true
  }
</script>

<form
  class="shadow-under mt-9 space-y-6 rounded-lg bg-white px-5 py-7 lg:mt-7 lg:space-y-5 lg:p-9"
  on:submit|preventDefault={onSubmit}
>
  {#if freeTrialSuccess}
    <p class="bg-green/80 rounded p-2 text-center text-sm text-white" in:slide>
      You have successfully claimed your free trial. Please check your email
    </p>
  {/if}
  <InputText
    type="text"
    bind:value={firstName.value}
    isValid={firstName.isValid}
    errorMessage={firstName.errorMessage}
    placeholder="First Name"
    on:input={firstNameEventHandler}
  />
  <InputText
    type="text"
    bind:value={lastName.value}
    isValid={lastName.isValid}
    errorMessage={lastName.errorMessage}
    placeholder="Last Name"
    on:input={lastNameEventHandler}
  />
  <InputText
    type="email"
    bind:value={email.value}
    isValid={email.isValid}
    errorMessage={email.errorMessage}
    placeholder="Email Address"
    on:input={emailEventHandler}
  />
  <InputText
    type="password"
    bind:value={password.value}
    isValid={password.isValid}
    errorMessage={password.errorMessage}
    placeholder="Password"
    on:input={passwordEventHandler}
  />
  <button
    class="bg-green shadow-inset hover:bg-green/80 w-full rounded-lg py-4 font-semibold uppercase text-white transition-colors duration-300 lg:text-sm"
  >
    Claim your free trial
  </button>
  <p class="text-blue-gray text-center text-xs">
    By clicking the button, you are agreeing to our <span
      class="text-red font-bold">Terms and services</span
    >
  </p>
</form>
