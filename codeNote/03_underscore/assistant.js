import { MAX_ARRAY_INDEX } from './const.js'
import _ from './underscore.js'

export const getLength = list => list == null ? void 0 : list.length

export const isArrayLike = list => {
  const length = getLength(list)
  return typeof length === 'number'
    && length >= 0 && length <= MAX_ARRAY_INDEX
}

export const bloop = (newData, body, stopper) => {
  return (data, iterPredi) => {
    const result = newData(data)
    let memo;
    if (isArrayLike(data)) {
      for (let i = 0, len = data.length; i < len; i++) {
        memo = iterPredi(data[i], i, data) // 결과를 재료로 사용하기위해 변수에 저장
        if (!stopper) body(memo, result, data[i], i) // if no stopper
        else if (stopper(memo)) return body(memo, result, data[i], i)
      }
    }
    else {
      for (let i = 0, keys = _.keys(data), len = keys.length; i < len; i++) {
        memo = iterPredi(data[keys[i]], keys[i], data)
        if (!stopper) body(memo, result, data[keys[i]])
        else if (stopper(memo)) return body(memo, result, data[keys[i]], keys[i])
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