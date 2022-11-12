"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

console.log(btnOpenModal.length);

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}
