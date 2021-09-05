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

_.some = _.compose(not, not, positive);

_.every = _.compose(beq(-1), negativeIndex);

export default _;
