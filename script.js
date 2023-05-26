"use strict";

const input = document.querySelector(".input");
const button = document.querySelector("button");
const hiddenMessage = document.querySelector(".error");

button.addEventListener("click", function () {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (input.value.match(mailformat)) {
    hiddenMessage.classList.add("hidden");
    input.value = "Registration completed";
    input.style.color = "blue";
    button.disabled = true;
  } else {
    hiddenMessage.classList.remove("hidden");
  }
});
