import _ from 'underscore'

const method = function (context, method) {
  return context[method].apply(context, _.rest(arguments, 2))
}

function main () {
  const test = _.partial(console.log, 1, _, 3)
  test(2)
  test(2, 4)

  const rd = _.partial(_.reduce, _, (a, b) => a + b)
  console.log(
    rd([1,2,3])
  )

  const push = _.partial(method, _, 'push')
  const shift = _.partial(method, _, 'shift')

  const a = [1,2]
  push(a, 3)
  console.log(a)

  shift(a)
  console.log(a)

  const b = method([1,2,3], 'concat', 4, 5)
  console.log(b)
}

export default main