import users from './users.js';

// Отримати користувача(не масив) по email(поле email, він унікальний).

const getUserWithEmail = (users, email) =>
  users.find(({email}) => email === email);

// const getUserWithEmail = function (users, email) {
//   return users.find(user => user.email === email);
// };

// const getUserWithEmail = function (users, email) {
//   return users.find(function (user) {
//     return user.email === email;
//   });
// };

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}
