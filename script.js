"use strict";

// Game global variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Functions
const displayMessage = (msg) =>
  (document.querySelector(".message").textContent = msg);
const numberBox = (number) =>
  (document.querySelector(".number").textContent = number);

// CHECK button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //   No input
  if (!guess) {
    displayMessage("Please enter a number. 🤦‍♀️");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🥳 Correct number!");
    numberBox(secretNumber);

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // Highscore implementation
    if (score >= highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // Incorrect guess
  } else if (guess !== secretNumber) {
    // Check if you still have points left
    if (score > 1) {
      displayMessage(guess < secretNumber ? "Too low! 🔼" : "Too high! 🔼");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😞 You lost...");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// AGAIN button
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  numberBox("?");
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
