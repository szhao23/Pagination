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

// Function to update button states
const updateBtn = () => {
  // If we are currently at the last step
  if (currentStep === 5) {
    endBtn.disabled = true;
    prevNext[1].disabled = true;
  } else if (currentStep === 0) {
    // If we are currently at the first step
    startBtn.disabled = true;
    prevNext[0].disabled = true;
  } else {
    endBtn.disabled = true;
    prevNext[1].disabled = false;
    startBtn.disabled = false;
    prevNext[0].disabled = false;
  }
};

// Add event listeners for number links
numbers.forEach((number, numIndex) => {
  number.addEventListener("click", () => {
    e.preventDefault();
    // Set current step to the selected/clicked number link
    currentStep = numIndex;
    console.log("The currentStep is: ", currentStep);

    // Remove the "active" class from the previously active number link
    document.querySelector(".active").classList.remove("active");

    // Add the "active" class to the clicked number link
    number.classList.add("active");
    updateBtn(); // Update the button state
  });
});

// Add event listeners for the Previous and Next buttons
