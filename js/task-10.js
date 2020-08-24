import users from './users.js';

// Отримати масив всіх умінь всіх користувачів(поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

// const getSortedUniqueSkills = users => {
//   const allSkills = users.reduce((tmp, user) => {
//     tmp.push(...user.skills);
//     return tmp;
//   }, []);
//   const uniqueSkills = allSkills.reduce((acc, skill) => {
//     if (!acc.includes(skill)) {
//       acc.push(skill);
//     }
//     return acc;
//   }, []);
//   const sorted = uniqueSkills.sort();
//   return sorted;
// };

const getSortedUniqueSkills = users =>
  [
    ...users
      .map(({ skills }) => skills)
      .flat()
      .reduce((acc, skill) => acc.add(skill), new Set()),
  ].sort();


// const getSortedUniqueSkills = users => {
//   return (
//     users
//       .reduce((tmp, user) => {
//         tmp.push(...user.skills);
//         return tmp;
//       }, [])
//       .reduce((acc, skill) => {
//         if (!acc.includes(skill)) {
//           acc.push(skill);
//         }
//         return acc;
//       }, [])
//       .sort()
//   );
// };

// const getSortedUniqueSkills = users => {
//   return users
//     .reduce((acc, user) => {
//       const tmp = [];
//       tmp.push(...user.skills);
//       tmp.forEach(skill => {
//         if (!acc.includes(skill)) {
//           acc.push(skill);
//         }
//       });
//       return acc;
//     }, [])
//     .sort();
// };

// console.table(users);
console.table('getSortedUniqueSkills:', getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
