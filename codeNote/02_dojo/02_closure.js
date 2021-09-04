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
}

export default main