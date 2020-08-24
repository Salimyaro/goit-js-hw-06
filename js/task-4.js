import users from './users.js';

// Отримати масив тільки неактивних користувачів(поле isActive).

const getInactiveUsers = users => users.filter(({ isActive }) => !isActive);

// const getInactiveUsers = function (users) {
//   return users.filter(user => user.isActive === false);
// };

// const getInactiveUsers = function (users) {
//   return users.filter(function (user) {
//     return user.isActive === false;
//   });
// };

console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
