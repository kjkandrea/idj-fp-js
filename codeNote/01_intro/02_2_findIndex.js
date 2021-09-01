export function findIndex(list, predicate) {
  for (let i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) return i;
  }
  return -1;
}

function main() {
  console.log(
    findIndex(
      ['e', 'a', 'c', 'd', 'b'],
      item => item === 'b'
    )
  )
}

export default main;