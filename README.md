# idj-fp-js
함수형 자바스크립트 프로그래밍(유인동 저) 코드 필기

원본 : [indongyoo/functional-javascript](https://github.com/indongyoo/functional-javascript)

## shortCut

> Reformat a code fragment in a file﻿. `⌥⌘L`

이 단축키 쓰면 포멧터없어도 포멧팅 정렬됨. 개꿀

[details](https://www.jetbrains.com/help/idea/reformat-and-rearrange-code.html#reformat_code)

## 적응 과정

### 고차함수를 많이 만들어보자
고차함수란 함수를 인자로 받는 함수, 함수를 리턴하는 함수 이다.

Array `map`, `filter`, `reduce` 등은 고차 함수이다. 

여태 개발하면서는 이러한 함수를 활용은 했지만, 직접 고차함수를 만들어 문제를 해결해본 경험이 별로 없음. 의식적으로 만들어보면서 익숙해져야 할듯

## 고민거리

순수 함수들을 사용하는데에 있어 '어떠한 데이터 형이든', '다형성을 위해 익명함수를 인자로' 등 지향성이 보이는데, 이를 TypeScript 에서 받아들일 수 있을까?
가령 find 함수의 경우 아래처럼 표기해야하나? 분명 한계가 있을텐데..

``` typescript
function find <T>(list: T[], predicate: T => boolean) {
  for (let i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) {
      return list[i] // T
    }
  }
}
```

## 함수형 프로그래밍의 이점

### 동작 과정에서의 신뢰 형성

함수를 최소한의 단위로 파편화 시키면, 파편화된 최소단위에 대한 신뢰가 있다면 그를 통해 조합된 함수들이.. 인자와 결과에 맞게 잘 조합되어 있다면 전체 결과 역시 에러가 날 수 없다. **상태를 공유하지 않는** 작은 단위의 함수들은 테스트하기도 쉽고 테스트 케이스를 작성하기도 쉽다.

만일 고쳐야 되는 코드에 지역 변수도 없고 if, else, for 문도 없고, 커스텀 객체의 메서드도 없고, 인자 외의 외부 상태에 의존하고 있지 않다면 자신이 고쳐야 하는 함수의 문제에만 집중할 수 있다.

> 작게 쪼개다 보면 정말 쓸모 없어 보이는 함수가 많이 나오기도 한다. 그래도 더 작은 단위로 쪼개 보라. 재사용성이 높고 재밌는 코드들이 나올 것이다. 제어문 대신 함수를, 값 대신 함수를, 연산자 대신 함수를 사용해 보자. 프로그래밍에 대한 새롭고 재밌는 아이디어들을 만나게 될 것이다.

## 함수

### instanceof '콜백함수' === '보조함수'

모든 보조함수는 콜백함수가 아니다.
callback 이 아닌 listener, iteratee, predicate 를 구분해보자.

* `button.addEventListener('click', () => console.log('clicked'))` => listener
* `users.forEach(user => console.log(user))` => iteratee
* `users.filter(user => user.age > 5)` => predicate

## 다시보는 underscore

책을 읽기전의 underscore 인상 : lodash 하위 호환에 함수별 모듈 설치가 안되는 후진 녀석

### underscore 는 fp 한 아이 이다.

underscore 의 쓰잘데기 없어보이는 `_.noop`, `_.identity` 등을 활용해서 정말 작은 파편 단위의 함수로 로직을 추상화하고,
이를 근사하게 조합하여 로직을 만들어 낸다. 

직접 만들어보니 엄청 근사함. 

### underscore 는 앞만 보고 달린다. 🏃‍♀️

underscore 는 nullable 한 값을 받더라도 error 가 나지 않는 방식으로 코딩되어 있다. (이를 Monad 라고 부를 수 있을까?)

가령 인자에 nullable 한 값을 넣는다면 내부적으로 다음과 같은 행위를 한다. 

``` javascript
underscore(null)

function underscore(data) {
  if (data === null || data === undefined) return []

  // something awesome logic...
  return result;  
}
```

이러한 방식때문에 underscore 세계에서는 엉뚱한 인자를 넣더라도 error 가 나지않고 계속 달려갈 수 있는 것.

물론 error 가 나지 않는다는것은 엉뚱한 result 가 나올 수도 있다는건데..

javascript 의 유연함의 기조를 차용한 방식 정도로 이해함.. 100% 공감은 안감.. 

### vs lodash

underscore 는 앞만 보고 달리는 녀석이기에 지연 실행을 하지 않는다. 

가령 [lodash chain](https://lodash.com/docs/4.17.15#chain) 을 사용하면 chaining 된 함수들은 모두 지연평가 된다.

``` javascript
// lodash
var greats = _
  .chain(normallys)
  .map(someting)
  .filter(someting)
  .filter(someting)
``` 

가령 위처럼 작성하면 O * 3 번 돌거라 유추되는데 
chain 에서 성능 최적화가 일어나 내부적으로 루프를 한번만 돈다.

어떻게 그런게 가능하냐면 `chain`은 이런식으로 동작하기때문.

``` javascript
var result = [];
for (var i = 0; i < list.length; i++)
    result.push(filter(filter(map(list[i])))
``` 

요약하면

* `lodash` : 지연평가와 chain 을 이용하여 최적화 해준다. 다만 표본(Array)의 갯수가 적을경우 약간 성능 손해본다.
* `underscore` : 우리가 머리속에 생각하는 그대로 실행된다. `앞으로만 가는` 함수를 제공하며 성능 최적화는 개발자에게 맞긴다. Badass 😎 

