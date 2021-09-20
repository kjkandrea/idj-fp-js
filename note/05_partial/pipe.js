import _ from 'partial-js'

const lazy = _.pipe(
  (a, b) => a + b,
  a => a * a
)

console.log(
  lazy(2, 3),
  lazy(3, -1)
)