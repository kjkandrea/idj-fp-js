import _ from 'partial-js'

const giveMePuppy = _.go(
  null,
  () => console.log('🐶'),
  () => console.log('🐶'),
  () => _.stop('🐶'),
  () => console.log('👽'),
  () => console.log('👽'),
  () => '👽'
)

console.log(
  'my puppy : ' + giveMePuppy
)