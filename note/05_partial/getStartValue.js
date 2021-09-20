import _ from 'partial-js'

const pipe = v => _.go( // 인자로 받아서 기억? 이 경우 indent 가 적절할듯한데 function 으로 선언해야해서 쓰기 시름
  v,
  _.map(a => a * 2),
  _.map(a => a * 2),
  a => v.concat(a)
)

console.log(
  pipe([1,2,3])
)