import _ from 'underscore'

const mr = function () {
  arguments._mr = true
  return arguments
}

const pipeline = function () {
  const functions = arguments
  return function (seed) {
    return _.reduce(
      functions,
      (l, r) =>
        l && l._mr
          ? r.apply(null, l) // mr
          : r(l),
      arguments.length < 2 ? seed : mr.apply(null, arguments), // 인자가 여러개면 mr 로 넘기기
    )
  }
}

const square = a => a * a
const add = (a, b) => a + b
const sub = (a, b) => a - b

const test = pipeline(
  add,
  square,
  a => mr(a, a/5),
  sub
)

console.log(
  test(3, 2),
)
