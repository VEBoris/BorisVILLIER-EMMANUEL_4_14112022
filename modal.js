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
const close = document.querySelector(".close");
const btnSubmit = document.getElementsByClassName(".btn-submit");

// Empty Elements Forms
const emptyFirstName = document.getElementById("#firstname-empty");
const emptyLastName = document.getElementById("#lastname-empty");
const emptyEmail = document.getElementById("#mail-empty");
const emptyBirth = document.getElementById("#birth-empty");
const emptyPartipation = document.getElementById("#participation-empty");

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

// Verfication champs de saisie - Prénom
function checkFirstName() {
  if (emptyFirstName == "") {
    this.textContent = "Veuillez saisir votre Prénom";
    this.style.display = "block";
    return false;
  } else if (regexName == false) {
    emptyFirstName.textContent = "Veuillez saisir un minimum de 2 caractère";
    emptyFirstName.style.display = "block";
  } else {
    emptyFirstName.style.display = "none";
    return true;
  }
}

// Verfication champs de saisie - Nom
function checkLastName() {
  if (emptyLastName == "") {
    emptyLastName.innerHTML = "Veuillez saisir votre Nom";
    emptyLastName.style.display = "block";
    return false;
    // } else if (){
    //     emptyLastName.innerHTML = "Veuillez saisir un minimum de 2 caractère";
    //     emptyLastName.style.display = "block";
    //     return false;
  } else {
    emptyLastName.style.display = "none";
    return true;
  }
}

function checkEmail() {
  if (emptyEmail == "") {
    emptyEmail.innerHTML = "Veuillez saisir votre Email";
    emptyEmail.style.display = "block";
    return false;
    // } else if (){
    //     emptyEmail.innerHTML = "Veuillez saisir une adresse email valide";
    //     emptyEmail.style.display = "block";
    //     return false;
  } else {
    emptyEmail.style.display = "none";
    return true;
  }
}

function checkBirth() {
  if (emptyBirth == "") {
    emptyBirth.innerHTML = "Veuillez saisir votre Date de Naissance";
    emptyBirth.style.display = "block";
    return false;
  } else {
    emptyBirth.style.display = "none";
    return true;
  }
}

function checkParticipation() {
  if (emptyPartipation == "") {
    emptyPartipation.innerHTML = "Veuillez saisir votre participation ";
    emptyPartipation.style.display = "block";
    return false;
    // } else if (){
    //     emptyPartipation.innerHTML = "Veuillez saisir un nombre valide";
    //     emptyPartipation.style.display = "block";
    //     return false;
  } else {
    emptyPartipation.style.display = "none";
    return true;
  }
}

//  Verfication sur le Form
function validate() {
  let resultFirstName = checkFirstName();
  let resultLastName = checkLastName();
  let resultEmail = checkEmail();
  let resulBirth = checkBirth();
  let resultParticipation = checkParticipation();

  if (
    resultFirstName &&
    resultLastName &&
    resultEmail &&
    resulBirth &&
    resultParticipation
  ) {
    modalbg.style.display = "none";
    return true;
  }
}