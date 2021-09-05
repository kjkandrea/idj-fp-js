function useBind() {
  const add = (a, b) => a + b;
  const add10 = add.bind(null, 10);
  console.log(
    add10(20) // 30
  )
}

// John Resig partial

function johnResigPartial() {
  Function.prototype.partial = function() {
    const fn = this
    const args = Array.prototype.slice.call(arguments) // 1. 인자를 배열로 담아둔다.

    console.log(fn, args) // [Function: abc] [ undefined, 'b', undefined ]

    return function() {
      let arg = 0;
      for (let i = 0, len = args.length; arg < len;i++) {
        if (args[i] === undefined) args[i] = arguments[arg++]
      }
      return fn.apply(this, args)
    }
  }

  function abc(a, b, c) {
    console.log(a, b, c)
  }

  const ac = abc.partial(undefined, 'b', undefined)
  ac()
  ac('a', 'c')
}

function main() {
  console.log('partialApplication')
  useBind()
  johnResigPartial()
}

export default main;