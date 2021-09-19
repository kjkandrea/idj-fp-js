import _ from '../03_underscore/underscore.js'

const method = function (method) {
  const args = _.rest(arguments) // 첫번째 인자 제외
  return function (obj) {
    return obj[method].apply(obj, args.concat(_.rest(arguments))) // 새 인자들 더하기
  }
}

class Counter {
  constructor (startNumber) {
    this.count = startNumber;
  }
  increment() {
    this.count++
  }
  decrement() {
    this.count--
  }
}

const counter = new Counter(0);

const increment = method('increment')
increment(counter)
increment(counter)
increment(counter)

console.log(counter.count)
