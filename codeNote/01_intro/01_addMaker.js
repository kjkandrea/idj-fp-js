function addMaker(a) {
  return function(b) {
    return a + b;
  }
}

function main() {
  console.log('addMaker(10)(5) :', addMaker(10)(5))

  const add5 = addMaker(5)

  console.log('add5(3)', add5(3))
  console.log('add5(3)', add5(4))
}

export default main;