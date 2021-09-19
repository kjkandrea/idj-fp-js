const once = func => {
  let flag, result;
  return function () {
    if (flag) return result;
    flag = true;
    return result = func.apply(this, arguments)
  }
}

function main() {
  const now = once(()=> Date.now())
  const twoSecondAfterNow = () => setTimeout(() => console.log(now()), 2000)

  console.log(now(), now())
  twoSecondAfterNow()
}

export default main;