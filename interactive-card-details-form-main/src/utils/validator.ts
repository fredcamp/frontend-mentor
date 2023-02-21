function nameValidator(text: string): string {
  if (!text?.trim()) {
    return `Can't be blank`
  }

  const regex = /[0-9]+/g
  const result = regex.test(text)

  if (result) {
    return 'Wrong format, name must not contain numbers'
  }
}

function cardNumberValidator(input: string): string {
  if (!input?.trim()) {
    return `Can't be blank`
  }

  let regex = /[^\d ]+/g
  let result = regex.test(input)

  if (result) {
    return 'Wrong format, numbers only'
  }

  regex = /^(\d{4} ?){4}$/
  result = regex.test(input)

  if (!result) {
    return 'Wrong format, must contain only 16 numbers'
  }
}

function numberValidator(input: string, size: number): string {
  if (!input?.trim()) {
    return `Can't be blank`
  }

  if (input.length !== size) {
    return `Must contain ${size} characters`
  }

  const regex = /[\D]+/g
  const result = regex.test(input)

  if (result) {
    return `Wrong format, numbers only`
  }
}

export { nameValidator, cardNumberValidator, numberValidator }
