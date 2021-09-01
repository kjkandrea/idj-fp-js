const users = [
  { id: 1, name: 'ID', age: 32 },
  { id: 2, name: 'HA', age: 25 },
  { id: 3, name: 'BJ', age: 32 },
  { id: 4, name: 'PJ', age: 28 },
  { id: 5, name: 'JE', age: 27 },
  { id: 6, name: 'JM', age: 32 },
  { id: 7, name: 'HI', age: 24 },
]

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