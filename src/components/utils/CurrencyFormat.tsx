const CurrencyFormat = (value,currency) => {
  return value.toLocaleString('pt-br',{style:'currency', currency})
}


export default CurrencyFormat;