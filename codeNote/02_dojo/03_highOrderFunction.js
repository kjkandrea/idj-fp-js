/*
 */

// 함수를 인자로 받아 실행하는 함수
function callWith10(val, func) {
  return func(10, val)
}

function add(a, b) {
  return a + b
}

function sub(a, b) {
  return a - b;
}

// 함수를 리턴하는 함수
function constant(val) {
  return function() {
    return val
  }
}

const allWays10 = constant(10)


function main() {
  console.log(
    'high order function',
    '\ncallWith10(20, add)',
    callWith10(20, add),
    '\ncallWith10(20, sub)',
    callWith10(20, sub),
    '\nallWays10()',
    allWays10()
  )
}

export default main;