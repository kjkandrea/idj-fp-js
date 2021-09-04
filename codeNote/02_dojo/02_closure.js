/**
 * 클로저 (closure)
 *
 * 클로저는 자신이 생성도리 때의 환경을 기억하는 함수이다.
 * => 클로저는 자신의 상위 스코프의 변수를 참조할 수 있다.
 * => 클로저는 자신이 생성될 때의 스코프에서 알 수 있었던 변수를 기억하는 함수이다.
 *
 * 아래 개념을 이해한 후..
 * => 클로저는 자신이 생성될 때의 스코프에서 알 수 있었던 변수 중 언젠가 자신이 시행될 때 사용할 변수들만 기억하며 유지시키는 함수이다.
 */

/**
 * 클로저로 만들 함수가 myfn 이라면, myfn 내부에서 사용하고 있는 변수 중에 myfn 내부에서
 * 선언되지않은 변수가 있어야한다. ex) a
 *
 * 그 변수를 a라고 한다면, a라는 이름의 변수가 myfn을 생성하는 스코프에서 선언되었거나 알 수 있어야한다.
 *
 */
function parent() {
  let a = 5;
  function myfn() {
    console.log(a)
  }
}

function main() {
  console.log(
    'closure',
    '\nparent() :',
    parent()
  )

  let a = 10, b = 20;
  function f1() {
    return a + b; // a, b 변수가 f1에 의해 사라지지 못하므로 클로저가 아니다. ( 내 코드에선 함수 내부에 있으니깐 클로저인가? ㅋㅋ )
  }
  console.log(
    f1() // 30
  )

  function f2() {
    let a = 10, b = 20;
    function f3(c, d) { // 얘도 클로저가 아니다. 변수 a, b 를 사용하지 않았다. f3가 기억 할 변수가 하나도 없다.
      return c + d;
    }
    return f3;
  }

  const f4 = f2();
  console.log(
    f4(5, 7)
  )

  function f5() {
    let a = 10, b = 20;
    function f6() { // 얘도 결과적으로는 클로저가 아니다! 왜냐면...
      return a + b;
    }
    return f6(); // f6 를 실행하여 리턴한다.
  } // 결국 f5 를 참조하는 곳이 어디에도 없기때문에 f5 가 사라지면 a, b도 사라질 수 있기에 클로저는 f5 가 실행되는 사이에만 생겼다가 사라진다.

  console.log(
    f5()
  )

  function f7() {
    let a = 10;
    function f8(b) { // 이 아이는 클로저이다. 기억해줘 🤚
      return a + b;
    }
    return f8;
  }

  const f9 = f7(); // 기억할게 ✊
  console.log(
    'f9(20) :',
    f9(20), // 30
    'f9(10) :',
    f9(10) // 20
  )
}

export default main