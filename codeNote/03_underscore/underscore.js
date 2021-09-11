const _ = {}

_.map = (list, iteratee) => {
  const newList = [];
  for (let i = 0, len = list.length; i < len; i++)
    newList.push(iteratee(list[i]))
  return newList;
}


export const test = () =>
  console.log(
    _.map([1,2,3], num => num * 2)
  )