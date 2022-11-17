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

// Form Elements
const firstName = document.getElementById("#first");
const lastName = document.getElementById("#last");
const email = document.getElementById("#email");
const birth = document.getElementById("#birthdate");
const participation = document.getElementById("#quantity");
const locations = document.getElementsByName("location");
const checkbox1 = document.getElementsByClassName(".checkbox-icon");
const checkbox2 = document.getElementById("#checkbox2");
const close = document.querySelector(".close");
const btnSubmit = document.getElementsByClassName(".btn-submit");

// Empty Elements Forms
const emptyFirstName = document.getElementById("#firstname-empty");
const emptyLastName = document.getElementById("#lastname-empty");
const emptyEmail = document.getElementById("#mail-empty");
const emptyBirth = document.getElementById("#birth-empty");
const emptyPartipation = document.getElementById("#participation-empty");
const emptyLocations = document.getElementsById("location-empty");

// Regex
const regexName = /^[a-zA-Z\-àâçéèêëîïôûùüÿñæœ']{2,}$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexParticipation = /^(0?[0-9]|[0-9][0-9])$/;

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

// Error message
function errorMessage(value) {
  value.style.color = "red";
  value.style.fontSize = "0.7em";
  value.style.border = "2px solid red";
}

// Verfication champs de saisie - Prénom
function checkFirstName() {
  if (firstName == "") {
    errorMessage(emptyFirstName).innerHTML = "Veuillez saisir votre Prénom";
    return false;
  } else if (regexName == false) {
    errorMessage(emptyFirstName).innerHTML =
      "Veuillez saisir un minimum de 2 caractère";
    emptyFirstName.style.display = "block";
  } else {
    emptyFirstName.style.display = "none";
    return true;
  }
}

// Verfication champs de saisie - Nom
function checkLastName() {
  if (lastName == "") {
    errorMessage(emptyLastName).innerHTML = "Veuillez saisir votre Nom";
    emptyLastName.style.display = "block";
    return false;
  } else if (regexName == false) {
    errorMessage(emptyLastName).innerHTML =
      "Veuillez saisir un minimum de 2 caractère";
    emptyLastName.style.display = "block";
  } else {
    emptyLastName.style.display = "none";
    return true;
  }
}

function checkEmail() {
  if (email == "") {
    errorMessage(emptyEmail).innerHTML = "Veuillez saisir votre Email";
    emptyEmail.style.display = "block";
    return false;
  } else if (regexEmail == false) {
    errorMessage(emptyEmail).innerHTML =
      "Veuillez saisir une adresse email valide";
    emptyEmail.style.display = "block";
  } else {
    emptyEmail.style.display = "none";
    return true;
  }
}

function checkBirth() {
  if (birth == "") {
    errorMessage(emptyBirth).innerHTML =
      "Veuillez saisir votre Date de Naissance";
    emptyBirth.style.display = "block";
    return false;
  } else {
    emptyBirth.style.display = "none";
    return true;
  }
}

function checkParticipation() {
  if (partipation == "") {
    errorMessage(emptyPartipation).innerHTML =
      "Veuillez saisir votre participation ";
    emptyPartipation.style.display = "block";
    return false;
  } else if (regexParticipation == false) {
    errorMessage(emptyPartipation).innerHTML =
      "Veuillez saisir un nombre valide";
    emptyPartipation.style.display = "block";
  } else {
    emptyPartipation.style.display = "none";
    return true;
  }
}

function checkLocations() {
  if (locations == "") {
    errorMessage(emptyLocations).innerHTML = "Veuillez choisir une ville";
    emptyLocations.style.display = "block";
    return false;
  } else {
    emptyLocations.style.display = "none";
  }
}

//  Verfication sur le Form
function validate() {
  let resultFirstName = checkFirstName();
  let resultLastName = checkLastName();
  let resultEmail = checkEmail();
  let resulBirth = checkBirth();
  let resultParticipation = checkParticipation();
  let resultLocations = checkLocations();

  if (
    resultFirstName &&
    resultLastName &&
    resultEmail &&
    resulBirth &&
    resultParticipation &&
    resultLocations
  ) {
    modalbg.style.display = "none";
    return true;
  }
}