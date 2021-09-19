import _ from 'lodash'
import md from '../model/users.js'

(() => {
  console.group('basic')

  let loop = 0;
  console.time()
  const users = md.get().filter(u => u.age > 5).map(u => u.id)
  console.log(users)
  console.timeEnd()


  console.groupEnd()
})();


(() => {
  console.group('chain')

  console.time()
  const users = _.chain(md.get()).filter(u => u.age > 5).map(u => u.id).value()
  console.log(users)
  console.timeEnd()

  console.groupEnd()
})();

import flow from 'lodash/fp/flow.js'
import filter from 'lodash/fp/filter.js'
import map from 'lodash/fp/map.js'

(() => {
  console.group('flow')

  console.time()
  const users = flow(
    filter(u => u.age > 5),
    map(u => u.id)
  )(md.get())
  console.log(users)
  console.timeEnd()

  console.groupEnd()
})();
