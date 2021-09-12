import { MAX_ARRAY_INDEX } from './const.js'
import _ from './underscore.js'

export const getLength = list => list == null ? void 0 : list.length

export const isArrayLike = list => {
  const length = getLength(list)
  return typeof length === 'number'
    && length >= 0 && length <= MAX_ARRAY_INDEX
}

/**
 *
 * @param newData : empty array construct function
 * @param body : ( boolean, result, value, index ) => any
 */
export const bloop = (newData, body, stopper, isReduce) => {
  return (data, iterPredi = _.identity, opt1) => {
    const result = newData(data)
    let memo = isReduce ? opt1 : undefined
    let keys = isArrayLike(data) ? null : _.keys(data)

    for (let i = 0, len = (keys || data).length; i < len; i++) {
      const key = keys ? keys[i] : i;
      memo = isReduce
        ? iterPredi(memo, data[key], key, data)
        : iterPredi(data[key], key, data)
      if (!stopper) body(memo, result, data[i], i)
      else if (stopper(memo)) return body(memo, result, data[i], i)
    }

    return isReduce ? memo : result
  }
}

export const assistant = () => console.log(
  'getLength test',
  getLength([1, 2, 3]),
  getLength(1),
  getLength(null),
  getLength(undefined),
  getLength({ length: 3 }),

  '\nisArrayLike test',
  isArrayLike([1, 2, 3]),
  isArrayLike([]),
  isArrayLike({}),
  isArrayLike(null),
  isArrayLike({ length: 2 }),
  '\nbloop test',
  bloop
  (() => [], (value, object) => object.push(value))
  ([5, 6, 7], v => v - 1),
)