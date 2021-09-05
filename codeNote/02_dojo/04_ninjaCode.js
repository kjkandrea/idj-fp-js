function objectKeyNinja() {
  const obj = {
    [(() => 'a')()]: 1
  }

  obj[(() => 'b')()] = 2;

  console.log(obj)
}

function hoistingNinja() {
  console.log(one)
  console.log(fOne)

  try {
    console.log(fOne);
  } catch (err) { // no catch
    console.log(err)
  }

  var one = 1;
  var fOne = () => '1'

  function add(a, b) {
    return valid() ? a + b : '🙃';

    function valid() { // valid 를 먼저 읽게 하면 코드가 다소 복잡하게 읽힐때다 있다. 이럴때 닌자 비급을 사용한다 함
      return Number.isInteger(a) && Number.isInteger(b);
    }
  }

  console.log(add(10, 5))
  console.log(add('🐕', 1004)) // 🙃
}

function IIFE_ninja() {
  !function(a) {
    console.log(a)
  }(1)

  const b = function (a) {
    console.log(a)
  }(2)

  const c = (a => console.log(a))(3)

  new function() {
    console.log(4)
  }
}

function IIFE_ninjaExpert() {
  const a = function(a) {
    console.log(this, a) // [1] 1
  }.call([1], 1)
}

function namedFunction() {
  function flatten(arr) {
    return function f(arr, new_arr) { // namedFunction 을 이용하여 재귀 구현
      arr.forEach(v => Array.isArray(v)? f(v, new_arr) : new_arr.push(v));
      return new_arr;
    }(arr, [])
  }

  console.log(flatten([1, [2, [3, 4]]]))
}

function main() {
  objectKeyNinja()
  hoistingNinja()
  IIFE_ninja()
  IIFE_ninjaExpert()
  namedFunction()
}

export default main