import _ from '../funderscore.js'
import { users } from '../model.js'

// 함수를 인자로 받아 실행하는 함수
function callWith10 (val, func) {
  return func(10, val)
}

function add (a, b) {
  return a + b
}

function sub (a, b) {
  return a - b
}

// 함수를 리턴하는 함수
function constant (val) {
  return function () {
    return val
  }
}

const allWays10 = constant(10)

// 함수를 인자로받아 함수를 리턴하는 함수
function callWith (val1) {
  return function (val2, func) {
    return func(val1, val2)
  }
}

function useCallWith() {
  console.clear();

  console.log(
    callWith([1, 2, 3])(v => v * 10, _.map), // [ 10, 20, 30 ]
  )

  _.get = (list, idx) => list[idx]

  const callWithUsers = callWith(users)

  console.log(
    callWithUsers(2, _.get),
    callWithUsers(user => user.age > 25, _.find),
    callWithUsers(user => user.age > 25, _.filter),
    callWithUsers(user => user.age > 25, _.some),
    callWithUsers(user => user.age > 25, _.every),
  )
}

function main () {
  console.log(
    'high order function',
    '\ncallWith10(20, add)',
    callWith10(20, add),
    '\ncallWith10(20, sub)',
    callWith10(20, sub),
    '\nallWays10()',
    allWays10(),
  );

  (() => {
    const callWith10 = callWith(10)
    const callWith5 = callWith(5)
    console.log(
      'callWith',
      callWith10(20, add),
      callWith5(4, sub),
    )
  })();

  useCallWith()
}

export default main