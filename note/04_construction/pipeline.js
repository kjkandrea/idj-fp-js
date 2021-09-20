import _ from 'underscore'

const pipeline = function() {
  const functions = arguments;
  return seed => _.reduce(functions, (l, r) => r(l), seed)
}

function main() {
  const square = pipeline(
    a => a / 2,
    a => a * a
  )

  console.log(
    square(6)
  )
}

main()