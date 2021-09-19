const once = func => {
  let flag, result;
  return function () {
    if (flag) return result;
    flag = true;
    return result = func.apply(this, arguments)
  }
}

const skip = body => {
  let yes
  return function() {
    return yes || (yes = body.apply(null, arguments))
  }
}

function main() {
  const now = once(()=> Date.now())
  const twoSecondAfterNow = () => setTimeout(() => console.log(now()), 2000)

  console.log(now(), now())
  twoSecondAfterNow()


  const printOnce = skip(() => { console.log('skip'); return true })
  printOnce()
  printOnce()
  printOnce()
  printOnce()
}

export default main;