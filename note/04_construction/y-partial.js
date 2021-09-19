import _ from 'partial-js'

function main () {
  const test = _.partial(console.log, _, 2, 3, ___)

  test(1, 4, 5, 6, 7, 8, 9)
}

export default main