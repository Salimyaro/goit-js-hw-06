import users from './users.js';

// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

// const getUsersWithEyeColor = function (users, color) {
//   return users.filter(user => user.eyeColor === color);
// };

// const getUsersWithEyeColor = function (users, color) {
//   return users.filter(function (user) {
//     return user.eyeColor === color;
//   });
// };

console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// автопроверка
const getUsersWithEyeColor = (array, color) => array.filter(({ eyeColor } = array) => eyeColor === color);