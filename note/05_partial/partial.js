import _ from 'partial-js'

// 부분 적용

const concat = _.partial('concat')

console.log(
  concat([1, 2], 3)
)

// 부분 커링

const values = data => _.map(data, v => v)

console.log(
  values ({ a: 1, b: 2, c: 4 })
)