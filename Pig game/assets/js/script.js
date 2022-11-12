"use strict";

// Selecting elements

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

// Starting consitions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;

const switchPlayer = function () {
  activePlayer = Math.abs(1 - activePlayer);
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing === true) {
    // Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `assets/images/dice-${dice}.png`;

    // Change for rolled
    if (dice === 1) {
      switchPlayer();
    } else {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing === true) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      // Finish game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winer");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove("player--winer");
  player1El.classList.remove("player--winer");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  diceEl.classList.add("hidden");
  currentScore = 0;
  activePlayer = 0;
  scores[0] = 0;
  scores[1] = 0;
  playing = true;
});
