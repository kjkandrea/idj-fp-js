export const getLength = list => list == null ? void 0 : list.length;

export const assistant = () => console.log(
  getLength([1,2,3]),
  getLength(1),
  getLength(null),
  getLength(undefined),
  getLength({ length: 3 })
)