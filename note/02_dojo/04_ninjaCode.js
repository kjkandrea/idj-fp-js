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
    return valid() ? a + b : 'π';

    function valid() { // valid λ₯Ό λ¨Όμ  μ½κ² νλ©΄ μ½λκ° λ€μ λ³΅μ‘νκ² μ½νλλ€ μλ€. μ΄λ΄λ λμ λΉκΈμ μ¬μ©νλ€ ν¨
      return Number.isInteger(a) && Number.isInteger(b);
    }
  }

  console.log(add(10, 5))
  console.log(add('π', 1004)) // π
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
    return function f(arr, new_arr) { // namedFunction μ μ΄μ©νμ¬ μ¬κ· κ΅¬ν
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