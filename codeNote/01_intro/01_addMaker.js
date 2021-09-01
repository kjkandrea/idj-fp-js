function addMaker(a) {
  return function(b) {
    return a + b;
  }
}

function main() {
  console.log(
    addMaker(10)(5)
  )
}

export default main;