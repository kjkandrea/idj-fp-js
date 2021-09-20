import _ from 'lodash'
import md from '../model/users.js'

const entries = Array(300)
.fill(md.data)
.reduce((a, c, i) => a.concat(c), [])
.map((u, i) => ({ ...u, id: i}));

(() => {
  console.group('basic')

  console.time()
  const users = entries.filter(u => u.age > 5).map(u => u.id)
  console.log(users.join(','))
  console.timeEnd()


  console.groupEnd()
})();


(() => {
  console.group('chain')

  console.time()
  const users = _.chain(entries).filter(u => u.age > 5).map(u => u.id).value()
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
  )(entries)
  console.log(users)
  console.timeEnd()

  console.groupEnd()
})();
