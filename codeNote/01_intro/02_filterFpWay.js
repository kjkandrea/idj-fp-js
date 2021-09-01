const users = [
  { id: 1, name: 'ID', age: 32 },
  { id: 2, name: 'HA', age: 25 },
  { id: 3, name: 'BJ', age: 32 },
  { id: 4, name: 'PJ', age: 28 },
  { id: 5, name: 'JE', age: 27 },
  { id: 6, name: 'JM', age: 32 },
  { id: 7, name: 'HI', age: 24 },
]

/**
 * @filter
 * filter 함수는 항상 동일하게 동작하는 함수이다.

 * @newList
 * newList 는 이 함수 내부에서 최초로 만들어졌고 외부의 어떠한 상황이나 상태와도 무관하다.
 *
 * @predicate
 * filter 의 if는 predicate 의 결과에만 의존한다.
 *
 * 함수형 프로그래밍에서는 '항상 동일하게 동작하는 함수' 를 만들고 보조함수(predicate) 를 조합하는 식으로 로직을 완성한다.
 * 내부에서 관리하는 상태를 따로 두지않고 넘겨진 인자에만 의존한다.
 * 동일한 인자가 들어오면 항상 동일한 값을 리턴하도록 한다.
 * 보조함수(predicate)에서도 상태를 변경하지 않으면 보조 함수를 받는 함수는 항상 동일한 결과를 만드는 함수가 된다.
 *
 */
function filter (list, predicate) {
  const newList = [] // 이전 값(list) 의 상태를 변경하지않고 새로운 리스트를 생성. 불변성과 관련된 중요한 콘셉트.
  for (let i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) { // predicate : 명제. 로직을 predicate 란 명칭으로 위임한다는 네이밍인듯.
      newList.push(list[i])
    }
  }
  return newList
}

function main () {
  console.log(
    filter(users, user => user.age < 30)
  )
}

export default main