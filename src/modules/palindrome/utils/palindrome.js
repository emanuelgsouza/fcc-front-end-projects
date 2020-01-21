/**
 * @method palindrome
 * @param  {String} str
 * @return {Boolean}
 */
const palindrome = (str) => {
  const clear = str.replace(/[\W_]/g, '').toLowerCase()
  const reversed = clear.split('').reverse().join('')

  return clear === reversed
}

export default palindrome
