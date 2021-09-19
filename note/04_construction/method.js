import _ from '../03_underscore/underscore.js'

const method = function (method) {
  const args = _.rest(arguments) // 첫번째 인자 제외
  return function (context) {
    return context[method].apply(context, args.concat(_.rest(arguments))) // 새 인자들 더하기
  }
}

class Counter {
  constructor (startNumber) {
    this.count = startNumber;
  }
  increment(num) {
    this.count = this.count + num
  }
}

const counter = new Counter(0);

const incrementFive = method('increment', 5)
incrementFive(counter)
incrementFive(counter)
incrementFive(counter)

console.log(counter.count)
