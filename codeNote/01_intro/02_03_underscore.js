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

function negativeIndex(list) {
  return _.findIndex(list, not);
}

_.some = function(list) {
  return not(not(positive(list)));
}

_.every = function(list) {
  // return _.filter(list, _.identity).length === list.length;
  return beq(-1)(negativeIndex(list))
}

_.compose = function() {
  const args = arguments; // function[]
  const start = args.length - 1; // 가장 마지막  index
  return function() {
    let i = start; // 가장 마지막 index
    let result = args[start].apply(this, arguments);
    while(i--) result = args[i].call(this, result);
    return result;
  }
}

function useCompose() {
  const greeting = function(name) { return 'hi: ' + name; };
  const exclaim = function(statement) { return statement.toUpperCase() + '!'};
  const welcome = _.compose(greeting, exclaim);
  return welcome('moe');
}

function useComposeInside() {
  const greeting = function(name) { return 'hi: ' + name; };
  const exclaim = function(statement) { return statement.toUpperCase() + '!'};

  return greeting(exclaim('moe'))
}

function main() {
  const list = ['개똥아', '똥쌋니', '아니요']

  console.log(
    ' map : ',
    _.map(list, string => string[0])?.join(''),
    '\n',
    'filter : ',
    _.filter(list, string => string.includes('똥')),
    '\n',
    'find : ',
    _.find(list, string => string[0] === '똥'),
    'findIndex : ',
    _.findIndex(list, string => string.includes('개똥')),
    '\n',
    'use index : ',
    _.filter(list, (_, i) => i <= 1),
    _.filter(list, (_, i) => i % 2),
    '\n',
    'identity : ',
    _.filter([0 , 1, '', 'char', undefined, null, Number('🙅'), [], {}], _.identity), // Truthy Values
    '\n',
    'not : ',
    not(0),
    'beq : ',
    beq(0)(0),
    'positive : ',
    positive([2, 0, null]),
    'negativeIndex : ',
    negativeIndex([2, 0, null]),
    '\n',
    'some : ',
    _.some([2, 0, null]), // 배열중에 Truthy value 가 있는지 검사. 내가아는 some 이랑 틀린데...
    'every : ',
    _.every([2, 0, null]), // 배열 아이템이 모두 Truthy value 인지 검사. 내가아는 every 랑 틀린데...
    '\n',
    'compose : ',
    useCompose(),
    'useComposeInside : ',
    useComposeInside(),
  )
}
main()

export default _;
