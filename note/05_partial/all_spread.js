import _ from 'partial-js'

const all = _.all(
  [10, 5], // 이렇게해야 넘어가는데?
  [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
  ],
)

const spread = _.spread(
  10,
  5,
  [
    a => a,
    b => b,
  ],
)

console.log(all)
console.log(spread)

