

const header = document.getElementById("myTopnav");

// Navbar
const menu = document.querySelector(".main-navbar .icon");

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Form inputs elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birth = document.getElementById("birthdate");
const participation = document.getElementById("quantity");
const locations = document.getElementsByName("location");
const checkboxCondition = document.getElementById("checkbox1");

// Form elements
const close = document.querySelector(".close");
const btnSubmit = document.getElementsByClassName("btn-submit");
const form = document.querySelector("form");
const confirmation = document.getElementById("confirmation");
const closeBtn = document.getElementById("close-btn");

// Empty Elements Forms
const emptyFirstName = document.getElementById("firstname-empty");
const emptyLastName = document.getElementById("lastname-empty");
const emptyEmail = document.getElementById("email-empty");
const emptyBirth = document.getElementById("birth-empty");
const emptyPartipation = document.getElementById("participation-empty");
const emptyLocations = document.getElementById("location-empty");
const emptyCheckbox = document.getElementById("checkbox-empty");

// Regex
const regexNumber = /^[0-9]{1,3}$/;
const regexEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;


// console.log(header);
const sticky = header.offsetTop;


window.onscroll = function() {myfunction()};


function myfunction() {
  if (window.pageYOffset > sticky ) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Message de confirmation invisible
closeBtn.style.display = "none";
confirmation.style.display = "none";

// Close button icon
close.addEventListener("click", function () {
  modalbg.style.display = "none";
});

// Close button du message de confirmation
closeBtn.addEventListener("click", function () {
  modalbg.style.display = "none";
});

// Menu navbar
menu.addEventListener("click", editNav);
function editNav() {
  let x = document.getElementById("myTopnav");
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
  const regexName = new RegExp(/^[a-zA-Z-àâçéèêëîïôûùüÿñæœ']{2,}$/, "g");


  if (!firstName.value) {
    emptyFirstName.innerHTML = "Veuillez saisir votre Prénom";
    emptyFirstName.style.display = "block";
    errorMessage(emptyFirstName);
    return false;
  } else if (regexName.test(firstName.value) == false) {
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
  const regexName = new RegExp(/^[a-zA-Z-àâçéèêëîïôûùüÿñæœ']{2,}$/, "g");


  if (!lastName.value) {
    emptyLastName.innerHTML = "Veuillez saisir votre Nom";
    emptyLastName.style.display = "block";
    errorMessage(emptyLastName);
    return false;
  } else if (regexName.test(lastName.value) == false) {
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
  } else if (regexEmail.exec(email.value) == null) {
    emptyEmail.innerHTML = "Veuillez saisir une adresse email valide";
    emptyEmail.style.display = "block";
    errorMessage(emptyEmail);
    return false;
  } else {
    emptyEmail.style.display = "none";
    return true;
  }
}

// Input Maxi Today
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
today = yyyy + "-" + mm + "-" + dd;
birthdate.setAttribute("min", "1900-01-01");
birthdate.setAttribute("max", today);

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
  if (!participation.value || isNaN(participation.value)) {
    emptyPartipation.innerHTML =
      "Veuillez renseigner le nombre de participation ";
    emptyPartipation.style.display = "block";
    errorMessage(emptyPartipation);
    return false;
  } else if (
    participation.value > 99 ||
    participation.value < 0 ||
    regexNumber.test(participation.value) == false
  ) {
    emptyPartipation.innerHTML =
      "Veuillez saisir un nombre valide (entre 0 et 99)";
    emptyPartipation.style.display = "block";
    errorMessage(emptyPartipation);
  } else {
    emptyPartipation.style.display = "none";
    return true;
  }
}

// Vérification radio button ville selected
function checkLocations() {
  if (
    !(
      locations[0].checked ||
      locations[1].checked ||
      locations[2].checked ||
      locations[3].checked ||
      locations[4].checked ||
      locations[5].checked
    )
  ) {
    emptyLocations.innerHTML = "Veuillez choisir une ville";
    emptyLocations.style.display = "block";
    errorMessage(emptyLocations);
    return false;
  } else {
    emptyLocations.style.display = "none";
    return true;
  }
}

// Vérification si condition d'utilisation selected
function checkCondition() {
  if (!checkboxCondition.checked) {
    emptyCheckbox.innerHTML = "Veuillez accepter les conditions d'utilisations";
    emptyCheckbox.style.display = "block";
    errorMessage(emptyCheckbox);
    return false;
  } else {
    emptyCheckbox.style.display = "none";
    return true;
  }
}

//  Verfication des saisies (inputs & radio buttons, checkbox) sur le Form
function validationForm() {
  const resultFirstName = checkFirstName();
  const resultLastName = checkLastName();
  const resultEmail = checkEmail();
  const resulBirth = checkBirth();
  const resultParticipation = checkParticipation();
  const resultLocations = checkLocations();
  const resultCondition = checkCondition();

  if (
    resultFirstName &&
    resultLastName &&
    resultEmail &&
    resulBirth &&
    resultParticipation &&
    resultLocations &&
    resultCondition
  ) {
    // Affichage du message de confirmation
    form.style.display = "none";
    confirmation.style.display = "flex";
    confirmation.style.justifyContent = "center";
    confirmation.style.fontSize = "30px";
    confirmation.style.textAlign = "center";
    confirmation.style.margin = "10em 15px 10em 15px";
    closeBtn.style.display = "block";
    closeBtn.style.margin = "2em auto 2em auto";
    return true;
  }
}


// Submit si les champs sont remplis sinon verif Form
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (form.checkValidity === true) {
    setTimeout(validationForm, 1000);
    return true;
  } else {
    validationForm();
  }
});

