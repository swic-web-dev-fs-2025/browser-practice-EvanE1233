// This works great in Node.js console
const users = [
  { name: "Sarah", age: 25 },
  { name: "Mike", age: 32 },
  { name: "Jessica", age: 28 },
];

const adults = users.filter((user) => user.age >= 21);
console.log(adults); // We see the result immediately