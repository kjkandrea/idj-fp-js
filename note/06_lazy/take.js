import _ from 'partial-js'
import u from '../model/users.js'

const users = u.get();

// strict
(() => {
  console.group('strict')
  console.time()
  const result = _.go(
    users,
    _.filter(u => u.age > 20),
    _.map(u => u.name),
    _.take(2)
  )
  console.log(result)
  console.timeEnd() // 2.6ms
  console.groupEnd()
})();

// lazy
(() => {
  console.group('lazy')
  console.time()
  const result = _.go(
    users,
    L.filter(u => u.age > 20),
    L.map(u => u.name),
    L.take(2)
  )
  console.log(result)
  console.timeEnd() // 0.3ms
  console.groupEnd()
})();
