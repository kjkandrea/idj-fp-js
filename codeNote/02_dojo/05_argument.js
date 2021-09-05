function argumentLog() {
  function test(a, b) {
    b = 10;
    console.log(Array.prototype.map.call(arguments, v => v))
  }

  test(1)
  test(1, 2) // 브라우저에서는 1, 10 나오는데 node 에서는 1, 2 나오네 허허
}

function main() {
  argumentLog()
}

export default main;