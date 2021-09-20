import _ from 'partial-js'

// 부분 적용

const concat = _.partial('concat')

console.log(
  concat([1, 2], 3)
)