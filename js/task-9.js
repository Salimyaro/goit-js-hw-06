import users from './users.js';

// Масив імен(поле name) людей, відсортованих в залежності від кількості їх друзів(поле friends)

const getNamesSortedByFriendsCount = users =>
  users
    .sort(({ friends: a }, { friends: b }) => a.length - b.length)
    .map(({ name }) => name);
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
