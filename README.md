# idj-fp-js
함수형 자바스크립트 프로그래밍(유인동 저) 코드 필기

## shortCut

> Reformat a code fragment in a file﻿. `⌥⌘L`

이 단축키 쓰면 포멧터없어도 포멧팅 정렬됨. 개꿀

[details](https://www.jetbrains.com/help/idea/reformat-and-rearrange-code.html#reformat_code)

## 고민거리

순수 함수들을 사용하는데에 있어 '어떠한 데이터 형이든', '다형성을 위해 익명함수를 인자로' 등 지향성이 보이는데, 이를 TypeScript에서 받아들일 수 있을까?
가령 find 함수의 경우 아래처럼 표기해야하나? 분명 한계가 있을텐데..

``` typescript
function find <T>(list: T[], predicate: Function) {
  for (let i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) {
      return list[i] // T
    }
  }
}
```