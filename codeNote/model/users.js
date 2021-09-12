const users = {
  data: [
    { id: 1, name: 'JK', age: 30 },
    { id: 2, name: 'SJ', age: 31 },
    { id: 3, name: 'MM', age: 2 },
  ],
  get() {
   return users.data;
  }
}

export default users;