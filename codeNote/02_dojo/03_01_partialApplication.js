function useBind () {
  const add = (a, b) => a + b
  const add10 = add.bind(null, 10)
  console.log(
    add10(20), // 30
  )
}

// John Resig partial
Function.prototype.partial = function () {
  const fn = this
  const args = Array.prototype.slice.call(arguments) // 1. 인자를 배열로 담아둔다.

  console.log(fn, args)

  return function () {
    let arg = 0
    for (let i = 0, len = args.length; i < len && arg < len; i++) {
      if (args[i] === undefined) {
        args[i] = arguments[arg++]
      }
    }
    return fn.apply(this, args)
  }
}

function johnResigPartial () {
  function abc (a, b, c) {
    console.log(a, b, c)
  }

  const ac = abc.partial(undefined, 'b', undefined)
  ac()
  ac('a', 'c')
}

function add () {
  let result = 0
  for (let i = 0, len = arguments.length; i < len; i++) {
    result += arguments[i]
  }
  return result
}

function partialProblem () {
  console.log(add(1, 2, 3, 4, 5)) // 15

  const add2 = add.partial(undefined, 2)
  console.log(add2(1, 3, 4, 5)) // 3

  const add3 = add.partial(undefined, undefined, 3, undefined, undefined)
  console.log(add3(1, 2, 4, 5)) // 15

  console.log(add3(50, 50, 50, 50)) // 15. 버그

  console.log(add3(100, 100, 100, 100)) // 15. 버그

  // add3 는 재사용이 불가능하다.
  // === partial 로 만들어진 함수는 단한번만 정상 동작한다.
}

// 재사용 가능한 partial
Function.prototype.recyclePartial = function () {
  const fn = this
  const _args = arguments // 1. 클로저가 기억하는 변수에는 원본 남기기

  console.log(fn, _args)

  return function () {
    const args = Array.prototype.slice.call(_args); // 2. 리턴될 함수가 실행될때마다 복사하여 원본 지키기

    let arg = 0
    for (let i = 0, len = args.length; i < len && arg < len; i++) {
      if (args[i] === undefined) {
        args[i] = arguments[arg++] // 3. 실행될때마다 새로 들어온 인자 채우기
      }
    }
    return fn.apply(this, args)
  }
}

function partialProblemFix() {
  const add3 = add.recyclePartial(undefined, undefined, 3, undefined, undefined)
  console.log(add3(1, 2, 4, 5)) // 15

  console.log(add3(50, 50, 50, 50)) // 203

  console.log(add3(100, 100, 100, 100)) // 403
}


function main () {
  console.log('partialApplication')
  useBind()
  johnResigPartial()
  partialProblem()
  partialProblemFix()
}

export default main;