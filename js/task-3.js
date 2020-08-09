import users from './users.js';

// Отримати масив імен користувачів за статтю(поле gender).

const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === gender);

// const getUsersWithGender = function(users, gender) {
//   return users.filter(user => user.gender === gender)
// };

// const getUsersWithGender = function (users, gender) {
//   return users.filter(function (user) {
//     return user.gender === gender;
//   });
// };

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
