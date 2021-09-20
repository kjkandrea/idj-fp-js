import _ from 'partial-js'

_.go(
  10,
  a => a / 2,
  a => a + 2,
  console.log
)