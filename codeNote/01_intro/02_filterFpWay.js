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
  const newList = []
  for (let i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) {
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