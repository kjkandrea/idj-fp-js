/**
 * 일급함수(First Class Function)
 *
 * 1. 변수에 담을 수 있다.
 * 2. 함수나 메서드의 인자로 넘길 수 있다.
 * 3. 함수나 메서드에서 리턴할 수 있다.
 *
 * 추가 조건
 *
 * 1. 아무때나(런타임 에서도) 선언이 가능하다.
 * 2. 익명으로 선언할 수 있다.
 * 3. 익명으로 선언한 함수도 함수나 메서드의 인자로 전달할 수 있다.
 */


// 1. 함수를 값으로 다룰 수 있음을 보여준다. typeof 연산자를 사용하여 'function' 인지 확인하고 변수 a에 f1 을 담고 있다.
const f1 = () => {}
const a = typeof f1 === 'function' ? f1 : function() {}

// 2. f2는 함수를 리턴한다.
function f2() {
  return function() {}
}

// 3. a와 b를 더하는 익명 험수를 선언하였으며, a와 b에 rkr 10, 5를 전달하여 즉시 실행 했다.
(function (a, b) {
  return a + b;
})(10, 5)

// 4. callAndAdd 를 실행하며 익명 함수들을 선언했고 바로 인자로 사용되었다. 넘겨받는 함수 둘을 실행하여 결과들을 더한다.
function callAndAdd(a, b) {
  return a() + b();
}

function main() {
  console.log(
    'javascript dojo',
    '\na :',
    a,
    '\nf2 :',
    f2,
    '\ncallAndAdd() :',
    callAndAdd(() => 10, () => 5)
  )
}

export default main;