import users from './users.js';

// Отримати масив імен користувачів за статтю(поле gender).

// const getUsersWithGender = (users, gender) =>
// users.filter(user => user.gender === gender);

// const getUsersWithGender = (array, gender) =>
//   array
//     .filter(arrayItem => arrayItem.gender === gender)
//     .map(({ name } = array) => name);

// const getUsersWithGender = (array, gender) =>
//   array
//     .filter(obj => obj.gender === gender)
//     .map(({ name }) => name);

const getUsersWithGender = (array, gender) => array.filter((user) => user.gender === gender).map(({ name }) => name);

// const getUsersWithGender = function(users, gender) {
//   return users.filter(user => user.gender === gender)
// };

// const getUsersWithGender = function (users, gender) {
//   return users.filter(function (user) {
//     return user.gender === gender;
//   });
// };

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


// const getUsersWithGender = (array, gender) =>
//   array
//     .filter(({ gender: userGender } = array) => userGender === gender)
//     .map(({ name } = array) => name);