import users from './users.js';

console.log(users);

// Отримати масив імен всіх користувачів(поле name).

const getUserNames = users => users.map(user => user.name);

// const getUserNames = users => {
// 	return users.map(user => user.name)
// }

// const getUserNames = function (users) {
//   return users.map(user => user.name);
// };

// const getUserNames = function (users) {
//   const userName = users.map(user => user.name);
//   return userName;
// };

// const getUserNames = function (users) {
//   const userName = users.map(function (user) {
//     return user.name;
//   });
//   return userName;
// };

console.log(getUserNames(users));
[
  'Moore Hensley',
  'Sharlene Bush',
  'Ross Vazquez',
  'Elma Head',
  'Carey Barr',
  'Blackburn Dotson',
  'Sheree Anthony',
];
