function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Form Input Elements
const firstName = document.getElementById("#first");
const lastName = document.getElementById("#last");
const email = document.getElementById("#email");
const birth = document.getElementById("#birthdate");

// Form elements
const close = document.querySelector(".close");
const btnSubmit = document.getElementsByClassName(".btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close button
close.addEventListener("click", function (event) {
  modalbg.style.display = "none";
});