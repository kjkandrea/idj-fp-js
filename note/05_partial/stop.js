import _ from 'partial-js'

_.go(null,
  () => console.log('🐶'),
  () => console.log('🐶'),
  _.stop,
  () => console.log('👽'),
  () => console.log('👽'),
)