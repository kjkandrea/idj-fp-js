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

    function valid() {
      return Number.isInteger(a) && Number.isInteger(b);
    }
  }

  console.log(add(10, 5))
  console.log(add('🐕', 1004)) // 🙃

}

function main() {
  objectKeyNinja()
  hoistingNinja()
}

export default main