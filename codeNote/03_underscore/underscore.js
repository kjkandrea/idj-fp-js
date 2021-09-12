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

_.toArray = list => Array.isArray(list) ? list : _.values(list)

_.rest = (list, num) => _.toArray(list).slice(num || 1)

_.rester = (func, num) => function () {
  return func.apply(null, _.rest(arguments, num))
}

_.if = (validator, func, alter) => function () {
  return validator.apply(null, arguments)
    ? func.apply(null, arguments)
    : alter && alter.apply(null, arguments)
}

_.toArray2 = _.if(Array.isArray, _.identity, _.values)

_.reverse = list => _.toArray(list).reverse()

_.pushTo = (value, object) => object.push(value)

_.noop = () => {}

_.map = bloop(_.array, _.pushTo)
_.each = bloop(_.identity, _.noop) // 아무일을 하지않는것도 로직이다.
_.filter = bloop(_.array,
  (boolean, object, value) => boolean && _.pushTo(value, object))

export const test = () => {
  const chapter1 = () => {
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
      _.keys({ puppy: '🐶' }), // puppy
      Object.keys({ puppy: '🐶' }), // puppy
      _.keys(10), // []
      Object.keys(10), // []
      _.keys(null), // []
      // Object.keys(null) // TypeError: Cannot convert undefined or null to
      // object
    )
  }

  const chapter2 = () => {
    console.log(
      '\nfilter :',
      _.filter([1, 2, 3], v => v > 2),
      _.filter({ a: 1, b: 2, c: 3 }, v => v > 2),
    )
    const sum = (a, b, c, d) => (a || 0) + (b || 0) + (c || 0) + (d || 0)
    console.log(
      '\nrester',
      _.rester(sum)(1, 2, 3, 4),
      _.rester(sum, 2)(1, 2, 3, 4),
      _.rester(sum, 3)(1, 2, 3, 4),
    )

    _.rester(console.log, 2)(1, 2, 3, 4)

    const sub = (a, b) => a - b;
    const sub2 = _.if(
      (a, b) => a >= b,
      sub,
      () => new Error('a가 b보다 작습니다.')
    )
    console.log(
      '\nsub2',
      sub2(10, 5),
      // sub2(5, 10), // Error: a가 b보다 작습니다.
    )

    const diff = _.if(
      (a, b) => a >= b,
      sub,
      (a, b) => sub(b, a)
    )
    console.log(
      '\ndiff',
      diff(9, 1),
      diff(5, 8)
    )
    console.log(
      '\ntoArray2',
      _.toArray2([1,2,3]),
      _.toArray2({ a:1, b:2, c:3 })
    )
  }

  // runner
  // chapter1()
  chapter2()
}

export default _