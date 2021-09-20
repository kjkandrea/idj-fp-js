import _ from 'partial-js'

_.go(
  _.mr(2, 3),
  (a, b) => a + b,
  a => a * a,
  console.log
)