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

_.identity = v => v;

function not(v) {
  return !v;
}

function beq(a) {
  return function(b) {
    return a === b;
  }
}

function positive(list) {
  return _.find(list, _.identity)
}

_.some = function(list) {
  return not(not(positive(list)));
}

_.every = function(list) {
  // return _.filter(list, _.identity).length === list.length;
  return beq(-1)(_.findIndex(list, not))
}

function main() {
  const list = ['개똥아', '똥쌋니', '아니요']

  console.log(
    _.map(list, string => string[0])?.join(''),
    _.filter(list, string => string.includes('똥')),
    _.find(list, string => string[0] === '똥'),
    _.findIndex(list, string => string.includes('개똥')),
    '\n',
    'use index : ',
    _.filter(list, (_, i) => i <= 1),
    _.filter(list, (_, i) => i % 2),
    '\n',
    'identity : ',
    _.filter([0 , 1, '', 'char', undefined, null, Number('🙅'), [], {}], _.identity), // Truthy Values
    'not : ',
    not(0),
    'beq : ',
    beq(0)(0),
    'positive : ',
    positive([1, 0, null]),
    'some : ',
    _.some([1, 0, null]), // 배열중에 Truthy value 가 있는지 검사. 내가아는 some 이랑 틀린데...
    'every : ',
    _.every([1, 0, null]), // 배열 아이템이 모두 Truthy value 인지 검사. 내가아는 every 랑 틀린데...
  )
}
main()

export default _;
