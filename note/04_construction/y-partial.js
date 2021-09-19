import _ from 'partial-js'

function m() {
  const iter = arguments[arguments.length-1]
  arguments.length--
  return _.reduce(arguments, iter)
}

const add = (a,b) => a + b

function main () {
  const test = _.partial(console.log, _, 2, 3, ___)

  test(1, 4, 5, 6, 7, 8, 9)

  console.log(
    m(100, 50, add)
  )

  const addAll = _.partial(m, ___, add)

  console.log(
    addAll(1,2,3,4,5)
  )
}

export default main