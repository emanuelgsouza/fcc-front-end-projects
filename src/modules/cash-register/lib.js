const COINS = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  'ONE HUNDRED': 100
}

/**
 * @method getActualValue
 * @param  {Array<Array>} cid [[ String, Number ]]
 * @return {Number}
 */
const getActualValue = cid => {
  return cid.reduce((acc, currentValue) => {
    const [, value] = currentValue
    return acc + value
  }, 0)
}

/**
 * @method getActualValue
 * @param  {Array<Array>} cid [[ String, Number, Number ]]
 * @return {Number}
 */
export const transformCidInCoins = cid => {
  return cid.map(currentValue => {
    const [coin, value] = currentValue
    const monetaryValue = COINS[coin]
    const data = value === 0 ? 0 : Math.ceil(value / monetaryValue)

    return [coin, value, data, monetaryValue]
  })
}

const getDataToChange = (currentCidValue, valueToCalculate, monetaryValue) => {
  const data = monetaryValue * Math.ceil(valueToCalculate / monetaryValue)

  if (currentCidValue < data) {
    return data - (data - currentCidValue)
  }

  return data
}

/**
 * @method calculateChange
 * @param  {Number}       change 
 * @param  {Array<Array>} cidCoins [[ String, Number, Number ]]
 * @return {Array<Array>} cid [[ String, Number ]]
 */
const calculateChange = (change, cidCoins) => {
  const cidFinal = cidCoins.reduce((acc, currentCid) => {
    const [, , coins] = currentCid

    if (coins === 0) {
      return acc
    }

    return [
      currentCid,
      ...acc
    ]
  }, [])

  let currentChange = change
  let changeFinal = []

  for (let i = 0; i < cidFinal.length; i++) {
    const cidItem = cidFinal[i]
    const [name, currentCidValue, , monetaryValue] = cidItem

    if (monetaryValue > currentChange) {
      continue
    }

    if (currentChange % monetaryValue === 0) {
      const data = monetaryValue * Math.ceil(currentChange / monetaryValue)
      changeFinal.push([name, data])
      break
    }

    if (currentCidValue < currentChange) {
      currentChange -= currentCidValue
      changeFinal.push([name, currentCidValue])
      continue
    }

    const divideSobra = +(currentChange % monetaryValue).toFixed(2)
    const valueToCalculate = +(currentChange - divideSobra).toFixed(2)
    const data = getDataToChange(currentCidValue, valueToCalculate, monetaryValue)

    changeFinal.push([name, data])

    currentChange = +(currentChange - valueToCalculate).toFixed(2)
  }

  return changeFinal
}

/**
 * @method checkCashRegister
 * @param  {Number}       cash 
 * @param  {Number}       cash 
 * @param  {Array<Array>} cid [[ String, Number, Number ]]
 * @return {Object}       { status: String, change: [] }
 */
export const checkCashRegister = (price, cash, cid) => {
  const actualValue = getActualValue(cid)
  const cidCoins = transformCidInCoins(cid)
  const change = cash - price
  const changeFinal = calculateChange(change, cidCoins)

  if (actualValue === change) {
    return {
      status: 'CLOSED',
      change: [...cid]
    }
  }

  if (actualValue < cash) {
    return {
      status: 'INSUFFICIENT_FUNDS',
      change: []
    }
  }

  return {
    status: 'OPEN',
    change: [...changeFinal]
  }
}
