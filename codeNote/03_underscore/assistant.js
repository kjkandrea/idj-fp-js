import { MAX_ARRAY_INDEX } from './const.js'
import _ from './underscore.js'

export const getLength = list => list == null ? void 0 : list.length

export const isArrayLike = list => {
  const length = getLength(list)
  return typeof length === 'number'
    && length >= 0 && length <= MAX_ARRAY_INDEX
}

export const bloop = (newData, body) => {
  return (data, iterPredi) => {
    const result = newData(data)
    if (isArrayLike(data)) {
      for (let i = 0, len = data.length; i < len; i++) {
        body(iterPredi(data[i], i, data), result, data[i])
      }
    }
    else {
      for (let i = 0, keys = _.keys(data), len = keys.length; i < len; i++) {
        body(iterPredi(data[keys[i]], keys[i], data),
          result, data[i])
      }
    }
    return result
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