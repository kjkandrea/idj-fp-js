const users = [
  { id: 1, name: 'ID', age: 32 },
  { id: 2, name: 'HA', age: 25 },
  { id: 3, name: 'BJ', age: 32 },
  { id: 4, name: 'PJ', age: 28 },
  { id: 5, name: 'JE', age: 27 },
  { id: 6, name: 'JM', age: 32 },
  { id: 7, name: 'HI', age: 24 },
]

function bValue(key) {
  return obj => obj[key]
}

function map (list, iteratee) {
  const newList = []
  for (let i = 0, len = list.length; i < len; i++) {
    newList.push(iteratee(list[i]))
  }
  return newList
}

function main() {
  const names = map(users, bValue('name')) // 이게 햇갈리는데.. 한번 살펴보자.
  console.log(names)

  /**
   * 1. bValue('name') 은 익명 함수를 리턴한다.
   *    obj => obj['name'] 요렇게 리턴함.
   * 2. map 은 users 길이만큼 루프를 돌고 여기서 list[i] 는 user 이다. 따라서
   *    newList.push(iteratee(user))
   * 3. iteratee(user) 는 다음과 같다.
   *    user['name']
   *
   * 이게 어렵게 느껴지는 이유 : 함수를 리턴하는 함수를 잘 쓰지 않아봐서. 조바심내지말고 천천히 읽어보면 될듯
   *
   */
}

export default main;