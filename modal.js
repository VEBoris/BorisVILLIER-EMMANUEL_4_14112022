// Navbar
const menu = document.querySelector(".main-navbar .icon");

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Form Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birth = document.getElementById("birthdate");
const participation = document.getElementById("quantity");
const locations = document.getElementsByName("location");
const checkbox = document.getElementsByClassName(".checkbox-icon");
const close = document.querySelector(".close");
const btnSubmit = document.getElementsByClassName("btn-submit");
const form = document.querySelector("form");

// Empty Elements Forms
const emptyFirstName = document.getElementById("firstname-empty");
const emptyLastName = document.getElementById("lastname-empty");
const emptyEmail = document.getElementById("mail-empty");
const emptyBirth = document.getElementById("birth-empty");
const emptyPartipation = document.getElementById("participation-empty");
const emptyLocations = document.getElementById("location-empty");
const emptyCheckbox = document.getElementById("checkbox-empty");

// Regex
const regexName = /^[a-zA-Z\-àâçéèêëîïôûùüÿñæœ']{1}$/;
const regexEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close button
close.addEventListener("click", function () {
  modalbg.style.display = "none";
});

// Menu navbar
menu.addEventListener("click", editNav);
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Style (css) error message
function errorMessage(value) {
  value.style.color = "red";
  value.style.fontSize = "0.6em";
  value.style.margin = "0.5em 0 0.8em 0.5em";
}

// Vérification saisie Prénom
function checkFirstName() {
  if (!firstName.value) {
    emptyFirstName.innerHTML = "Veuillez saisir votre Prénom";
    emptyFirstName.style.display = "block";
    errorMessage(emptyFirstName);
    return false;
  } else if (firstName.value.search(regexName) == false) {
    emptyFirstName.innerHTML = "Veuillez saisir un minimum de 2 caractère";
    emptyFirstName.style.display = "block";
    errorMessage(emptyFirstName);
  } else {
    emptyFirstName.style.display = "none";
    return true;
  }
}

// Vérification saisie Nom
function checkLastName() {
  if (!lastName.value) {
    emptyLastName.innerHTML = "Veuillez saisir votre Nom";
    emptyLastName.style.display = "block";
    return false;
  } else if (lastName.value.search(regexName) == false) {
    emptyLastName.innerHTML = "Veuillez saisir un minimum de 2 caractère";
    emptyLastName.style.display = "block";
    errorMessage(emptyLastName);
  } else {
    emptyLastName.style.display = "none";
    return true;
  }
}

// Vérification saisie Email
function checkEmail() {
  if (!email.value) {
    emptyEmail.innerHTML = "Veuillez saisir votre Email";
    emptyEmail.style.display = "block";
    errorMessage(emptyEmail);
    return false;
  } else if (regexEmail.test(email.value) == null) {
    emptyEmail.innerHTML = "Veuillez saisir une adresse email valide";
    emptyEmail.style.display = "block";
    errorMessage(emptyEmail);
    return false;
  } else {
    emptyEmail.style.display = "none";
    return true;
  }
}

// Vérification saisie Date de Naissance
function checkBirth() {
  if (!birth.value) {
    emptyBirth.innerHTML = "Veuillez saisir votre Date de Naissance";
    emptyBirth.style.display = "block";
    errorMessage(emptyBirth);
    return false;
  } else {
    emptyBirth.style.display = "none";
    return true;
  }
}

// Vérification saisie Participation
function checkParticipation() {
  if (!participation.value) {
    emptyPartipation.innerHTML =
      "Veuillez renseigner le nombre de participation ";
    emptyPartipation.style.display = "block";
    errorMessage(emptyPartipation);
    return false;
  } else if (participation.value > 99) {
    emptyPartipation.innerHTML = "Veuillez saisir un nombre valide";
    emptyPartipation.style.display = "block";
    errorMessage(emptyPartipation);
  } else {
    emptyPartipation.style.display = "none";
    return true;
  }
}

function checkLocations() {
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      emptyLocations.innerHTML = "Veuillez choisir une ville";
      emptyLocations.style.display = "block";
      errorMessage(emptyLocations);
      return false;
    } else {
      emptyLocations.style.display = "none";
      return true;
    }
  }
}

function checkCondition() {
  if (!checkbox.checked) {
    emptyCheckbox.innerHTML = "Veuillez accepter les conditions d'utilisations";
    emptyCheckbox.style.display = "block";
    errorMessage(emptyCheckbox);
    return false;
  } else {
    emptyCheckbox.style.display = "none";
    return true;
  }
}

//  Verfication des saisies sur le Form
function validationForm() {
  let resultFirstName = checkFirstName();
  let resultLastName = checkLastName();
  let resultEmail = checkEmail();
  let resulBirth = checkBirth();
  let resultParticipation = checkParticipation();
  let resultLocations = checkLocations();
  let resultCondition = checkCondition();

  if (
    resultFirstName &&
    resultLastName &&
    resultEmail &&
    resulBirth &&
    resultParticipation &&
    resultLocations &&
    resultCondition
  ) {
    modalbg.style.display = "none";
    return true;
  }
}


// Submit si les champs sont remplis sinon verif Form
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (form.checkValidity === true) {
    setTimeout(validationForm, 1000);
    modalbg.style.display = "none";
    return true;
  } else {
    validationForm();
  }

  console.log("submit");
});