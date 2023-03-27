// Select DOM elements
const startBtn = document.querySelector("#startBtn"),
  endBtn = document.querySelector("#endBtn"),
  prevNext = document.querySelector("#prevNext"),
  numbers = document.querySelector(".links");

// Testing
console.log(
  "Start Button: ",
  startBtn,
  "End Button: ",
  endBtn,
  "Previous Next: ",
  prevNext,
  "Numbers: ",
  numbers
);

// Set initial step
let currentStep = 0;

// Add event listeners for number links
numbers.forEach((number, numIndex) => {
  number.addEventListener("click", () => {
    // Set current step to the selected/clicked number link
    currentStep = numIndex;
    console.log(currentStep);
  });
});
