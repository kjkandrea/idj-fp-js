import _ from 'partial-js'

const mpMap = _.map(
  10,
  [1,2,3],
  (int, arrayMember) => arrayMember * int
)

console.log(mpMap)