import users from './users.js';

// Отримати загальну суму балансу(поле balance) всіх користувачів.

const calculateTotalBalance = users =>
	users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

// const calculateTotalBalance = function (users) {
//   return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
// };

// const calculateTotalBalance = function (users) {
//   return users.reduce(function (totalBalance, user) {
//     return totalBalance + user.balance;
//   }, 0);
// };

console.log(calculateTotalBalance(users)); // 20916
