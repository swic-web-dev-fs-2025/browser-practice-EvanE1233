import "./style.css";

document.querySelector("#app").innerHTML = `
  <div background-color="blue">
  <h1 class="text-3xl font-bold underline">Hello Vite!</h1>
  <div id="greeting-container">
    <p id="greeting">Welcome!</p>
    <button id="change-greeting">Click Button</button>
    <p id="click-count">Button clicks: 0</p>
    <button id="unClick">Unclick Button</button>
    <button id="reset">Reset Count</button>
  </div>
`;

// Variables - same as console JavaScript
let clickCount = 0;

// Get references to HTML elements
const greetingElement = document.getElementById("greeting");
const button = document.getElementById("change-greeting");
const countElement = document.getElementById("click-count");
const resetButton = document.getElementById("reset");
const unclickButton = document.getElementById("unClick");

// Function - same logic as console JavaScript
function updateGreeting() {
  clickCount++;
  greetingElement.textContent = "Hello, Browser JavaScript!";
  countElement.textContent = `Button clicks: ${clickCount}`;
  if (clickCount >= 10) {
    greetingElement.style.color = "red";
    greetingElement.style.backgroundColor = "blue";
  } else if (clickCount >= 5) {
    greetingElement.style.color = "red";
    greetingElement.style.backgroundColor = "";
  } else {
    greetingElement.style.color = "";
    greetingElement.style.backgroundColor = "";
  }
}
function unUpdateGreeting() {
  clickCount--;
  countElement.textContent = `Button clicks: ${clickCount}`;
  if (clickCount >= 10) {
    greetingElement.style.color = "red";
    greetingElement.style.backgroundColor = "blue";
  } else if (clickCount >= 5) {
    greetingElement.style.color = "red";
    greetingElement.style.backgroundColor = "";
  } else {
    greetingElement.style.color = "";
    greetingElement.style.backgroundColor = "";
  }
}

button.addEventListener("click", updateGreeting);
if (unclickButton) {
  unclickButton.addEventListener("click", unUpdateGreeting);
}
if (resetButton) {
  resetButton.addEventListener("click", () => {
    clickCount = 0;
    countElement.textContent = `Button clicks: ${clickCount}`;
    greetingElement.style.color = "";
  });
}
const customText = prompt("Enter custom text for the greeting:");
if (customText) {
  greetingElement.textContent = customText;
}
