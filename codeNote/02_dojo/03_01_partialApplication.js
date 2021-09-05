function useBind() {
  const add = (a, b) => a + b;
  const add10 = add.bind(null, 10);
  console.log(
    add10(20) // 30
  )
}

function main() {
  console.log('partialApplication')
  useBind()
}

export default main;