import users from './users.js';

// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

// const getUsersWithFriend = (users, friendName) => {
//   return users.reduce((temp, user) => {
//     if (user.friends.includes(friendName)) {
//       temp.push(user.name);
//     }
//     return temp;
//   }, []);
// };

const getUsersWithFriend = (users, friendName) =>
  users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
