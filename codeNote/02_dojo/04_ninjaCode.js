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

function main() {
  objectKeyNinja()
  hoistingNinja()
}

export default main