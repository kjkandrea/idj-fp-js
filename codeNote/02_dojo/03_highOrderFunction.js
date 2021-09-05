/*
 */

function callWith10(val, func) {
  return func(10, val)
}

function add(a, b) {
  return a + b
}

function sub(a, b) {
  return a - b;
}



function main() {
  console.log(
    'high order function',
    '\ncallWith10(20, add)',
    callWith10(20, add),
    '\ncallWith10(20, sub)',
    callWith10(20, sub),
  )
}

export default main;