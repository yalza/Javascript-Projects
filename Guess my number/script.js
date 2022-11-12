"use strict";

let number = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highScore = 0;

let ok = true;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (score == 0) {
    document.querySelector(".message").textContent = "You Lose!";
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#e07b39";
    ok = false;
  }
  if (ok === true) {
    if (guess == null) {
      document.querySelector(".message").textContent = "No Number!";
    } else if (guess === number) {
      document.querySelector(".number").textContent = number;
      document.querySelector(".message").textContent = "Correct Number!";
      document.querySelector("body").style.backgroundColor = "#60b347";
      highScore = Math.max(highScore, score);
      document.querySelector(".highscore").textContent = highScore;
      console.log(score);
      ok = false;
    } else if (guess > number) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
    } else if (guess < number) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
    }
  }
  document.querySelector(".score").textContent = score;
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  ok = true;
  number = Math.trunc(Math.random() * 20 + 1);

  document.querySelector(".score").textContent = 20;
  document.querySelector(".message").textContent = "Start guessing.....";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
