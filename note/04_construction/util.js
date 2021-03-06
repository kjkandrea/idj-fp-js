const once = func => {
  let flag, result
  return function () {
    if (flag) {
      return result
    }
    flag = true
    return result = func.apply(this, arguments)
  }
}

const skip = body => { // confirm 과 함께 쓸듯
  let yes
  return function () {
    return yes || (yes = body.apply(null, arguments))
  }
}

const idMaker = startNumber => () => startNumber++

function main () {
  const printOnce = once(() => console.log('once'))
  printOnce()
  printOnce()
  printOnce()
  printOnce()

  const printSkip = skip(() => {
    console.log('skip')
    return true
  })
  printSkip()
  printSkip()
  printSkip()
  printSkip()

  console.log('idMaker')
  const getCartId = idMaker(10)
  console.log(
    getCartId(),
    getCartId(),
    getCartId(),
    getCartId(),
  )
}

export default main;