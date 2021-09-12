// node codeNote/practice/higherHigherOrderFunction.js -g

function higherHigherOrderFunction(functions) {
  return arg => functions.flatMap(func => func(arg))
}

function main() {
  console.log(
    higherHigherOrderFunction([
      number => number + number,
      number => number - number,
      number => number * number,
      number => number / number,
      number => Array(number).fill('멍').join('🐕')
    ])(10),

    higherHigherOrderFunction([
      cutes => cutes[0],
      cutes => cutes.flatMap(cute => higherHigherOrderFunction([
        cute => cute.split('').reverse().join(''),
        cute => cute + '🐕'
      ])(cute)),
    ])(['멍멍이', '고양이'])
  )
}
main();