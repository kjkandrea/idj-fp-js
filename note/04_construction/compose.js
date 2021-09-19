import _ from 'underscore'

function main () {
  _.compose(console.log, a => a + 1, a => a + 2)(5)

  const falsyValues = _.compose(
    _.partial(_.isEqual, -1),
    _.partial(_.findIndex, _, _.identity),
  )

  console.log(
    falsyValues([0, '']),
    falsyValues([NaN]),
    falsyValues([1, 2, 3, 4, 5]),
  )

  const some = _.negate(falsyValues)

  console.log(
    some([1, 2, 3]),
    some([0, null, NaN]),
  )

  const every = _.compose(
    _.partial(_.isEqual, -1),
    _.partial(_.findIndex, _, _.negate(_.identity))
  )

  console.log(
    every([1, 2, 0]),
  )
}

export default main