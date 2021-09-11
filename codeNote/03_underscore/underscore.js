import { bloop, isArrayLike } from './assistant.js'

const _ = {}

// old version
// _.map = (list, iteratee) => {
//   const newList = [];
//   for (let i = 0, len = list.length; i < len; i++)
//     newList.push(iteratee(list[i], i, list))
//   return newList;
// }

// newList.push(iteratee(data[i], i, data))
_.map = bloop(() => [], ((val, object) => object.push(val)))

_.identity = v => v

_.values = list => _.map(list, _.identity)

_.args0 = _.identity
_.args1 = (a, b) => b

_.keys = list => _.map(list, _.args1)

_.each = bloop(_.identity, () => {})

export const test = () => {
  console.log(
    'map :',
    _.map([1, 2, 3], num => num * 2), //array
    _.map({ a: 3, b: 2, c: 1 }, num => num * 2), //array like
    _.map([1, 2, 3], function (num) { return num * this }.bind(5)),
    '\nvalues :',
    _.values([1, 2, 3]),
    _.values({ a: 3, b: 2, c: 1 }),
    '\nkeys :',
    _.keys([1, 2, 3]),
    _.keys({ a: 3, b: 2, c: 1 }),
    '\neach :',
  )
  _.each([1, 2, 3], console.log)
  _.each({ a: 3, b: 2, c: 1 }, console.log)
}
