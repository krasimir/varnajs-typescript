interface Person {
  firstName: string;
  lastName: string;
  age: number;
  job?: string;
}

function showPerson(user: Person): string {
  return `${user.lastName}, ${user.firstName} / ${user.age}`;
}

console.log(
  showPerson({
    firstName: 'Krasimir',
    lastName: 'Tsonev',
    age: 35,
  })
);

// // inheritance;

// interface User extends Person {
//   id: string;
// }

// function showUser(user: User): string {
//   return `(${user.id}) ${showPerson(user as Person)}`;
// }

// console.log(
//   showUser({
//     id: 'AAABBBCCC',
//     firstName: 'Krasimir',
//     lastName: 'Tsonev',
//     age: 35,
//   })
// );
