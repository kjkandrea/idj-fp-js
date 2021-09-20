import _ from 'partial-js'

const asyncAdd = (a, b) => new Promise(resolve => {
  setTimeout(() => resolve(a + b), 200)
})

_.go(
  _.mr(2, 3),
  asyncAdd,
  console.log
)

__( // pipe
  asyncAdd,
  console.log
)(3, 4)

_.go(
  _.mr(2, 3),
  asyncAdd,
  _.if(a => a === 5, () => console.log('5임')),

)