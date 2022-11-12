"use strict";

const btnOperations1 = document.querySelector(".btn--1");
const btnOperations2 = document.querySelector(".btn--2");
const btnOperations3 = document.querySelector(".btn--3");

const contentOperations1 = document.querySelector(".operations--content--1");
const contentOperations2 = document.querySelector(".operations--content--2");
const contentOperations3 = document.querySelector(".operations--content--3");

btnOperations1.addEventListener("click", function () {
  contentOperations1.classList.remove("hidden");
  contentOperations2.classList.add("hidden");
  contentOperations3.classList.add("hidden");
});

btnOperations2.addEventListener("click", function () {
  contentOperations2.classList.remove("hidden");
  contentOperations1.classList.add("hidden");
  contentOperations3.classList.add("hidden");
});

btnOperations3.addEventListener("click", function () {
  contentOperations3.classList.remove("hidden");
  contentOperations2.classList.add("hidden");
  contentOperations1.classList.add("hidden");
});

var btnShowModal = document.querySelectorAll(".btn--show-modal");

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", function () {
    document.querySelector(".open-modal").classList.toggle("hidden");
    document.querySelector(".overlay").classList.toggle("hidden");
    console.log(btnShowModal);
  });
}

var closeModal = document.querySelector(".open-modal > i");
closeModal.addEventListener("click", function () {
  document.querySelector(".open-modal").classList.toggle("hidden");
  document.querySelector(".overlay").classList.toggle("hidden");
});

var overlay = document.querySelector(".overlay");
overlay.addEventListener("click", function () {
  document.querySelector(".open-modal").classList.toggle("hidden");
  document.querySelector(".overlay").classList.toggle("hidden");
});
