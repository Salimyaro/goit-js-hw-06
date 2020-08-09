import users from './users.js';

// Масив імен(поле name) людей, відсортованих в залежності від кількості їх друзів(поле friends)

const getNamesSortedByFriendsCount = function (users) {
  const friendsAmount = (a, b) => a.friends.length - b.friends.length;
  return users.sort(friendsAmount).map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
