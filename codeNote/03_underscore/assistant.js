import { MAX_ARRAY_INDEX } from './const.js'

export const getLength = list => list == null ? void 0 : list.length;

export const isArrayLike = list => {
  const length = getLength(list)
  return typeof length === 'number'
          && length >= 0 && length <= MAX_ARRAY_INDEX;
}

export const assistant = () => console.log(
  'getLength test',
  getLength([1,2,3]),
  getLength(1),
  getLength(null),
  getLength(undefined),
  getLength({ length: 3 }),

  '\nisArrayLike test',
  isArrayLike([1,2,3]),
  isArrayLike([]),
  isArrayLike({}),
  isArrayLike(null),
  isArrayLike({ length: 2 }),
)