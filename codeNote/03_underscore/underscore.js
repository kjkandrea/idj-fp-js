import { bloop, isArrayLike } from './assistant.js'

const _ = {}

// old version
// _.map = (list, iteratee) => {
//   const newList = [];
//   for (let i = 0, len = list.length; i < len; i++)
//     newList.push(iteratee(list[i], i, list))
//   return newList;
// }

_.identity = v => v

_.values = list => _.map(list, _.identity)

_.args0 = _.identity
_.args1 = (a, b) => b

_.keys = data => data ? Object.keys(data) : []

_.array = () => []

_.pushTo = (value, object) => object.push(value)

_.noop = () => {}

_.map = bloop(_.array, (_.pushTo))
_.each = bloop(_.identity, _.noop) // 아무일을 하지않는것도 로직이다.

function oldFilter (list, predicate) {
  const newList = []
  _.each(list, item => predicate(item) && newList.push(item))
  return newList
}


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
  console.log(
    '\n_.keys vs Object.keys',
    _.keys({ puppy: '🐶'}), // puppy
    Object.keys({ puppy: '🐶'}), // puppy
    _.keys(10), // []
    Object.keys(10), // []
    _.keys(null), // []
    // Object.keys(null) // TypeError: Cannot convert undefined or null to object
  )
  console.log(
    '\nold filter :',
    oldFilter([1,2,3], v => v % 2),
    oldFilter({ a: 1, b: 2, c: 3 }, v => v % 2)
  )
}

export default _;