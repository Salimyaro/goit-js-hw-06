// Setup
var contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

function lookUpProfile(name, prop) {
  for (var contact of contacts) {
    if (contact.firstName === name && contact.hasOwnProperty(prop)) {
      return contact[prop];
    }
    if (contact.firstName === name && !contact.hasOwnProperty(prop)) {
      return 'No such property';
    }
  }
  if (contact.firstName !== name) {
    return 'No such contact';
  }
}

console.log(lookUpProfile('Akira', 'likes')); //["Pizza", "Coding", "Brownie Points"]
console.log(lookUpProfile('Kristian', 'lastName')); //"Vos"
console.log(lookUpProfile('Sherlock', 'likes')); //["Intriguing Cases", "Violin"]
console.log(lookUpProfile('Harry', 'likes')); //array
console.log(lookUpProfile('Bob', 'number')); //"No such contact"
console.log(lookUpProfile('Bob', 'potato')); //"No such contact"
console.log(lookUpProfile('Akira', 'address')); //"No such property"
