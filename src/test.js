// This works great in Node.js console
const users = [
  { name: "Sarah", age: 25 },
  { name: "Mike", age: 32 },
  { name: "Jessica", age: 28 },
];

// Same array processing logic...
const adults = users.filter((user) => user.age >= 21);

// ...but now we can display it on a webpage!
document.getElementById("user-list").innerHTML = adults
  .map((user) => `<p>${user.name} (${user.age})</p>`)
  .join("");
  // ...becomes this JavaScript object:
const button = document.getElementById("my-button"); // Returns an object!

button.textContent = "New text"; // Object properties you can change

// `handleClick` is a function you define elsewhere
button.addEventListener("click", handleClick); // Object methods you can use