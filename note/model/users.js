const users = {
  data: [
    { id: 1, name: 'JK', age: 30 },
    { id: 2, name: 'SJ', age: 31 },
    { id: 3, name: 'MM', age: 2 },
    { id: 4, name: 'HY', age: 28 },
    { id: 5, name: 'MV', age: 31 },
    { id: 6, name: 'JKF', age: 60 },
    { id: 7, name: 'SJF', age: 62 },
    { id: 8, name: 'MMF', age: 4 },
    { id: 9, name: 'HYF', age: 56 },
    { id: 10, name: 'MVF', age: 62 },
  ],
  get() {
   return users.data;
  }
}

export default users;