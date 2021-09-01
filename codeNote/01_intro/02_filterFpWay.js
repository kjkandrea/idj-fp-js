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

function map (list, iteratee) {
  const newList = []
  for (let i = 0, len = list.length; i < len; i++) {
    newList.push(iteratee(list[i]))
  }
  return newList
}

function bValue (key) {
  return function (obj) {
    return obj[key]
  }
}

function findBy (key, list, id) {
  for (let i = 0, len = list.length; i < len; i++) {
    console.log('findBy i : ', i)
    if (list[i][key] === id) {
      return list[i]
    } // break;
  }
}

/**
 * @find
 * findBy 와 비교할때에, 인자를 String 이나, Number 대신 Function 으로 변경한 작은 차이가 매우 큰 차이를
 *   만들었다. find 는 배열에 어떤 값이 들어있던 보조함수(predicate) 를 통해 원하는 바를 이룰 수 있다. 함수형
 *   자바스크립트는 이처럼 다형성이 높은 기법을 많이 사용하며 이러한 기법은 정말 실용적이다.
 */
function find (list, predicate) {
  for (let i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) {
      return list[i]
    }
  }
}

function bMatch1(key, val) {
  return function(obj) {
    return obj[key] === val;
  }
}

function object(key,val) {
  const obj = {}
  obj[key] = val
  return obj
}

function match(obj, obj2) {
  for (const key in obj2) {
    return obj[key] === obj2[key]
  }
}

function bmatch(obj2, val) {
  if (arguments.length === 2) obj2 = object(obj2, val); // 인자가 2개일 경우를 가정한다는것은 1개 일 수도 있다는것. 이렇게 하니깐 햇갈리는데..
  return obj => match(obj, obj2)
}

function main () {
  const userUnder30Names = map(
    filter(users, user => user.age < 33),
    bValue('name'), // user => user.name
  )

  console.group('find')
  console.log(
    find(users, bMatch1('id', 3)),
    find(users, user => user.name.includes('P')),
  )
  console.groupEnd()

  console.group('bmatch')
  console.log(
    bmatch('id', 3)({ id: 3, name: 'BJ', age: 32 }) // true
  )
  console.groupEnd()

  console.log(
    match(
      find(
        users,
        bmatch('id', 3)
      ), // { id: 3, name: 'BJ', age: 32 }
      find(
        users,
        bmatch('name', 'BJ')
      ) // { id: 3, name: 'BJ', age: 32 }
    ) // true
  )

  console.log(
    find(users, user => user.age === 32 && user.name === 'JM')
  )

  console.log(
    find(users, bmatch({ age: 32, name: 'JM' }))
  )
}

export default main