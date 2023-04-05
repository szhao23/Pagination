// Select DOM elements
const startBtn = document.querySelector("#startBtn"),
  endBtn = document.querySelector("#endBtn"),
  prevNext = document.querySelectorAll(".prevNext"),
  numbers = document.querySelectorAll(".link");

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
  if (currentStep === 4) {
    endBtn.disabled = true;
    prevNext[1].disabled = true;
  } else if (currentStep === 0) {
    // If we are currently at the first step
    startBtn.disabled = true;
    prevNext[0].disabled = true;
  } else {
    endBtn.disabled = false;
    prevNext[1].disabled = false;
    startBtn.disabled = false;
    prevNext[0].disabled = false;
  }
};

// Add event listeners for number links
numbers.forEach((number, numIndex) => {
  number.addEventListener("click", (e) => {
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
prevNext.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Increase or Decrease the current step based on the button/step that is clicked
    currentStep += e.target.id === "next" ? 1 : -1;
    numbers.forEach((number, numIndex) => {
      // Toggle the "active" class on the number links based on the current step
      number.classList.toggle("active", numIndex === currentStep);
      updateBtn(); // Update button state
    });
  });
});

// Add event listener to the "Start Button"
startBtn.addEventListener("click", () => {
  // Remove the "active" class from the previously active number link
  document.querySelector(".active").classList.remove("active");
  // Add the "active" class to the first number link
  numbers[0].classList.add("active");
  currentStep = 0;
  updateBtn(); // Update button state
  endBtn.disabled = false;
  prevNext[1].disabled = false;
});

// Add event listener to the "End Button"
endBtn.addEventListener("click", () => {
  // Remove the "active" class from the previously active number link
  document.querySelector(".active").classList.remove("active");
  // Add the "active" class to the last number link
  numbers[4].classList.add("active");
  currentStep = 4;
  updateBtn(); // Update button state
  startBtn.disabled = false;
  prevNext[0].disabled = false;
});
