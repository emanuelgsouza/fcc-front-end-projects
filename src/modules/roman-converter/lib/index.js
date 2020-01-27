const integerConfig = {
  minBase: {
    minValue: 1,
    minDigit: 'I'
  },
  maxBase: {
    maxValue: 5,
    maxDigit: 'V'
  },
  nextDigit: 'X',
  base: 1
}

const decimalConfig = {
  minBase: {
    minValue: 10,
    minDigit: 'X'
  },
  maxBase: {
    maxValue: 50,
    maxDigit: 'L'
  },
  nextDigit: 'C',
  base: 10
}

const centesimalConfig = {
  minBase: {
    minValue: 100,
    minDigit: 'C'
  },
  maxBase: {
    maxValue: 500,
    maxDigit: 'D'
  },
  nextDigit: 'M',
  base: 100
}

const millionConfig = {
  minBase: {
    minValue: 1000,
    minDigit: 'M'
  },
  maxBase: {
    maxValue: 5000,
    maxDigit: 'V'
  },
  nextDigit: 'X',
  base: 1000
}

const getDigits = digitConfig => number => {
  const { minBase, maxBase, nextDigit, base } = digitConfig
  const { minValue, minDigit } = minBase
  const { maxValue, maxDigit } = maxBase

  if (number === 0) {
    return ''
  }

  if (number === minValue) {
    return minDigit
  }

  if (number === maxValue) {
    return maxDigit
  }

  const diff = Math.abs(maxValue - number)
  // const baseDiff = number / base
  const dataToRepeat = number > maxValue ? diff / base : number / base

  if (diff === minValue && number < maxValue) {
    return `${minDigit}${maxDigit}`
  }

  const data = minDigit.repeat(dataToRepeat)

  if (number < maxValue) {
    return data
  }

  if (diff === 4 * minValue) {
    return `${minDigit}${nextDigit}`
  }

  const res = `${maxDigit}${data}`

  return res
}

const getIntegerDigits = getDigits(integerConfig)

const getDecimalDigits = getDigits(decimalConfig)

const getCentesimalDigits = getDigits(centesimalConfig)

const getMillionDigits = getDigits(millionConfig)

/**
 * @method convertToRoman
 * @param  {Number} num
 * @return {String}
 */
const convertToRoman = num => {
  const data = num.toString().split('').reverse()

  return data.map((_num, index) => {
    const number = Number(`${_num}${'0'.repeat(index)}`)

    if (index === 0) {
      return getIntegerDigits(number)
    }

    if (index === 1) {
      return getDecimalDigits(number)
    }

    if (index === 2) {
      return getCentesimalDigits(number)
    }

    if (index === 3) {
      return getMillionDigits(number)
    }

    return '$$'
  }).reverse().join('')
}

export default convertToRoman