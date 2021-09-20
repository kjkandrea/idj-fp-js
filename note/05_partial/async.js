import _ from 'partial-js'

const asyncAdd = (a, b) => new Promise(resolve => {
  setTimeout(() => resolve(a + b), 200)
})

asyncAdd(2, 3).then(console.log)