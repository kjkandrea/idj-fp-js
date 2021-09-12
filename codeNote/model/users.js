const users = {
  data: [
    { id: 1, name: 'JK', age: 30 },
    { id: 2, name: 'SJ', age: 31 },
    { id: 3, name: 'MM', age: 2 },
    { id: 4, name: 'HY', age: 28 },
    { id: 5, name: 'MV', age: 31 },
  ],
  get() {
   return users.data;
  }
}

export default users;