function argumentLog() {
  function test(a, b) {
    b = 10;
    console.log(Array.prototype.map.call(arguments, v => v))
  }

  test(1)
  test(1, 2) // 브라우저에서는 1, 10 나오는데 node 에서는 1, 2 나오네 허허
  /**
   * https://stackoverflow.com/questions/15705756/function-arguments-object-in-node-js-is-different-to-chromes-javascript/15705938
   *
   * chrome 과 node 가 argument 를 취급하는 방법이 다른듯? 지금 너무 이해하려고 하진 말자.
   */
}

function main() {
  argumentLog()
}

export default main;