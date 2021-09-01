// node codeNote/practice/higherHigherOrderFunction.js -g

function higherHigherOrderFunction(func) {
  return arg => func(arg)
}

function main() {
  const result = higherHigherOrderFunction(arg => arg)(1)

  console.log(
    result
  )
}
main();