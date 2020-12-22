function getFormattedNumber(n, decimals=2) {

  if (isNaN(Number(n))) return '...';

  let formatter = new Intl.NumberFormat()
  let [first, second] = Number(n).toFixed(decimals).split('.')
  first = formatter.format(first)
  if (decimals === 0) return first;
  return first + '.' + second
}

export default getFormattedNumber