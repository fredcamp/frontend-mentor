function amountParser(amount: number): string {
  const f = Intl.NumberFormat('us-en', {
    currency: 'USD',
    style: 'currency',
    maximumFractionDigits: 2,
  })

  return f.format(amount)
}

export { amountParser }
