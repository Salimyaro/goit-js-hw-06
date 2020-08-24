import users from './users.js';

// Отримати масив користувачів, які потрапляють у вікову категорію від min до max років(поле age).

const getUsersWithAge = (users, min, max) =>
  users.filter(({age}) => age > min && age < max);

// const getUsersWithAge = function (users, min, max) {
//   return users.filter(user => user.age > min && user.age < max);
// };

// const getUsersWithAge = function (users, min, max) {
//   return users.filter(function (user) {
//     return user.age > min && user.age < max;
//   });
// };

console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
