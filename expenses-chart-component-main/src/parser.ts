function amountParser(amount: number): string {
  const formatter = Intl.NumberFormat('us-en', {
    currency: 'USD',
    style: 'currency',
    minimumIntegerDigits: 2,
  })

  return formatter.format(amount)
}

export { amountParser }
