const formatPriceInCentsToCurrency = (value: number) => {
  const cents_to_currency = value / 100
  return cents_to_currency.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export default formatPriceInCentsToCurrency
