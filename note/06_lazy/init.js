import _ from 'partial-js'

const square = v => v * v

_.go(
  [2, 4, 11, 2, 7, 12],
  _.map(square), // 6번 반복
  _.every(v => v < 100), // 3번 반복
  console.log, // false
)

_.go(
  [2, 4, 11, 2, 7, 12],
  L.map(square), // 3번 반복
  L.every(v => v < 100), // 3번 반복
  console.log, // false
)