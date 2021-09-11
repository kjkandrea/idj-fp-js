import { isArrayLike } from './assistant.js'

const _ = {}

// old version
// _.map = (list, iteratee) => {
//   const newList = [];
//   for (let i = 0, len = list.length; i < len; i++)
//     newList.push(iteratee(list[i], i, list))
//   return newList;
// }

_.map = (data, iteratee) => {
  const newList = [];
  if (isArrayLike(data)) {
    for (let i = 0, len = data.length; i < len ; i ++ )
      newList.push(iteratee(data[i], i, data))
  } else {
    for (let key in data)
      if (data.hasOwnProperty(key)) newList.push(iteratee(data[key], key, data))
  }
  return newList;
}

_.identity = v => v

_.values = list => _.map(list, _.identity)

export const test = () =>
  console.log(
    'map :',
    _.map([1,2,3], num => num * 2), //array
    _.map({ a: 3, b: 2, c: 1 }, num => num * 2), //array like
    _.map([1,2,3], function(num){ return num * this }.bind(5)),
    '\nvalues :',
    _.values([1,2,3]),
    _.values({ a: 3, b: 2, c: 1})
  )