const _ = {} // namespace

_.map = function(list, iteratee) {
  const newList = [];
  for (let i = 0, len = list.length; i < len ;i++) {
    newList.push(iteratee(list[i], i, list))
  }
  return newList;
}

_.filter = function(list, predicate) {
  const newList = [];
  for (let i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i], i, list)) newList.push(list[i])
  }
  return newList;
}

_.find = function(list, predicate) {
  for (let i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i], i, list)) return list[i]
  }
}

_.findIndex = function(list, predicate) {
  for (let i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i], i, list)) return i;
  }
  return -1;
}

function main() {
  const list = ['개똥아', '똥쌋니', '아니요']

  console.log(
    _.map(list, string => string[0])?.join(''),
    _.filter(list, string => string.includes('똥')),
    _.find(list, string => string[0] === '똥'),
    _.findIndex(list, string => string.includes('개똥'))
  )
}
main()