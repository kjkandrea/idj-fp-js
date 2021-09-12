import { bloop } from './assistant.js'
import users from '../model/users.js'

const _ = {}

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

_.safety = _.if

_.toArray2 = _.if(Array.isArray, _.identity, _.values)

_.reverse = list => _.toArray(list).reverse()

_.pushTo = (value, object) => object.push(value)

_.push = (object, value) => object.push(value) || object

_.noop = () => {}

_.constant = v => () => v

_.isNumber = a => toString.call(a) === '[object Number]'

_.not = v => !v

_.map = bloop(_.array, _.pushTo)
_.each = bloop(_.identity, _.noop) // 아무일을 하지않는것도 로직이다.
_.filter = bloop(_.array, _.if(_.identity, _.rester(_.push)))
_.reject = bloop(_.array, _.if(_.not, _.rester(_.push))) // filter 랑 반대로 동작
// _.find = bloop(_.noop, (bool, result, val) => val, _.identity)
_.find = bloop(_.noop, _.rester(_.identity, 2), _.identity)
_.findIndex = bloop(_.constant(-1), _.rester(_.identity, 3), _.identity)
_.findKey = bloop(_.noop, _.rester(_.identity, 3), _.identity)
_.some = bloop(_.constant(false), _.constant(true), _.identity)
_.every = bloop(_.constant(true), _.constant(false), _.not)
// _.reduce = (data, iteratee, memo) => {
//   _.each(data, (val, idx, data) => {
//     memo = iteratee(memo, val, idx, data)
//   })
//   return memo;
// }
_.reduce = bloop(_.noop, _.noop, undefined, true)

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
      '\nreject :',
      _.reject([1, 2, 3], v => v > 2),
      _.reject({ a: 1, b: 2, c: 3 }, v => v > 2),
    )
  }

  const chapter2c1 = () => {
    const sum = (a, b, c, d) => (a || 0) + (b || 0) + (c || 0) + (d || 0)
    console.log(
      '\nrester',
      _.rester(sum)(1, 2, 3, 4),
      _.rester(sum, 2)(1, 2, 3, 4),
      _.rester(sum, 3)(1, 2, 3, 4),
    )

    _.rester(console.log, 2)(1, 2, 3, 4)

    const sub = (a, b) => a - b
    const sub2 = _.if(
      (a, b) => a >= b,
      sub,
      () => new Error('a가 b보다 작습니다.'),
    )
    console.log(
      '\nsub2',
      sub2(10, 5),
      // sub2(5, 10), // Error: a가 b보다 작습니다.
    )

    const diff = _.if(
      (a, b) => a >= b,
      sub,
      (a, b) => sub(b, a),
    )
    console.log(
      '\ndiff',
      diff(9, 1),
      diff(5, 8),
    )
    console.log(
      '\ntoArray2',
      _.toArray2([1, 2, 3]),
      _.toArray2({ a: 1, b: 2, c: 3 }),
    )
    const square = _.safety(
      _.isNumber,
      a => a * a,
      () => 0,
    )
    console.log(
      '\nsquare',
      square(5),
    )
  }

  const chapter3 = () => {
    console.log(
      '\nfind',
      _.find([1, 2, 3, 4], v => v >= 3),
      _.find(users.get(), ({ age }) => age < 3),
      _.find(users.get(), ({ age }) => age > 99),
      '\nfindIndex',
      _.findIndex([1, 2, 3, 4], v => v === 2),
      _.findIndex([1, 2, 3, 4], v => v === 4),
      _.findIndex([1, 2, 3, 4], v => v === 5),
      '\nfindKey',
      _.findKey({ str: 'jk', num: 1, nu: null }, v => typeof v === 'number'),
      _.findKey([1, 2, 3, 4, 5], v => v === 3),
      '\nsome',
      _.some(users.get(), ({ age }) => age > 99),
      _.some(users.get(), ({ age }) => age < 30),
      _.some([0, null, undefined, 'truthy']),
      '\nevery',
      _.every(users.get(), ({ age }) => age < 30), // false
      _.every(users.get(), ({ age }) => age < 1), // true
      _.every(['truthy']),
    )
  }

  const chapter4 = () => {
    console.log(
      '\nreduce',
      _.reduce(users.get(), (memo, user) => {
        if (user.age > 30) {
          memo.items.push(user.name)
          memo.count++
        }
        return memo
      }, {items: [], count: 0})
    )
  }

  const chapter5 = () => {
    console.log(
      '\nlimiter',
      '\n  _.filter([1,2,3,4,5,6,7], v => v < 7, 4) :',
      _.filter([1,2,3,4,5,6,7], v => v < 7, 4),
      '\n  _.map([1,2,3,4,5,6,7], v => v * 3, 4)',
      _.map([1,2,3,4,5,6,7], v => v * 3, 4)
    )
  }

  // runner
  // chapter1()
  // chapter2()
  // chapter2c1()
  // chapter3()
  // chapter4();
  chapter5()
}

export default _