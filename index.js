
// INPUT VALIDATION

const nameInput = document.getElementById('name');
const nameInputMsg = document.getElementById('name-err-msg');

const cardNumber = document.getElementById('card-number');
const cardNumberMsg = document.getElementById('cardno-err-msg');

const month = document.getElementById('month');
const year = document.getElementById('year');
const monthyearMsg = document.getElementById('my-err-msg');

const cvc = document.getElementById('cvc');
const cvcMsg = document.getElementById('cvc-err-msg');

const submitButton = document.getElementById('submit-button');


// When clicked again after error message; error message, and red border disappear.
nameInput.addEventListener('click', () => { nameInputMsg.textContent = ''; nameInput.classList.remove('red-border') });
cardNumber.addEventListener('click', () => { cardNumberMsg.textContent = ''; cardNumber.classList.remove('red-border') });
month.addEventListener('click', () => { monthyearMsg.textContent = ''; month.classList.remove('red-border') });
year.addEventListener('click', () => { monthyearMsg.textContent = ''; year.classList.remove('red-border') });
cvc.addEventListener('click', () => { cvcMsg.textContent = ''; cvc.classList.remove('red-border') });
//

function validation(){
  validateName();
  validateCardNumber();
  validateMonth();
  validateYear();
  validateCVC();
  if(validateName() && validateCardNumber() && validateMonth() && validateYear() && validateCVC())
    {return true;}
  else
    {return false;}
}

function validateName() {

  if (nameInput.value.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    nameInputMsg.textContent = 'Wrong format, characters only';

    nameInput.classList.add('red-border');
    return false;
  }
  else if (nameInput.value.match(/[0-9]/)) {
    nameInputMsg.textContent = 'Wrong format, characters only';
    
    nameInput.classList.add('red-border');
    return false;
  }
  else if (nameInput.value.length === 0) {
    nameInputMsg.textContent = 'Can\'t be blank';
    
    nameInput.classList.add('red-border');
    return false;
  }
  else if (nameInput.value.length > 32) {
    nameInputMsg.textContent = 'Names longer than 32 characters are not valid';
    
    nameInput.classList.add('red-border');
    return false;
  }
  else {
    return true;
  }
}
function validateCardNumber() {

  if (cardNumber.value.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    cardNumberMsg.textContent = 'Wrong format, numbers only';

    cardNumber.classList.add('red-border');
    return false;
  }
  else if (cardNumber.value.match(/[a-zA-Z]/)) {
    cardNumberMsg.textContent = 'Wrong format, numbers only';
    
    cardNumber.classList.add('red-border');
    return false;
  }
  else if (cardNumber.value.length === 0) {
    cardNumberMsg.textContent = 'Can\'t be blank';
    
    cardNumber.classList.add('red-border');
    return false;
  }
  else {
    return true;
  }
}
function validateMonth() {

  if (month.value.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    monthyearMsg.textContent = 'Wrong format, numbers only';

    month.classList.add('red-border');
    return false;
  }
  else if (month.value.match(/[a-zA-Z]/)) {
    monthyearMsg.textContent = 'Wrong format, numbers only';
    
    month.classList.add('red-border');
    return false;
  }
  else if (month.value.length === 0) {
    monthyearMsg.textContent = 'Can\'t be blank';
    
    month.classList.add('red-border');
    return false;
  }
  else if (month.value > 12){
    monthyearMsg.textContent = 'Invalid value';

    month.classList.add('red-border');
    return false;
  }
  else {
    return true;
  }
}
function validateYear() {

  if (year.value.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    monthyearMsg.textContent = 'Wrong format, numbers only';

    year.classList.add('red-border');
    return false;
  }
  else if (year.value.match(/[a-zA-Z]/)) {
    monthyearMsg.textContent = 'Wrong format, numbers only';
    
    year.classList.add('red-border');
    return false;
  }
  else if (year.value.length === 0) {
    monthyearMsg.textContent = 'Can\'t be blank';
    
    year.classList.add('red-border');
    return false;
  }
  else {
    return true;
  }
}
function validateCVC() {

  if (cvc.value.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    cvcMsg.textContent = 'Wrong format, numbers only';

    cvc.classList.add('red-border');
    return false;
  }
  else if (cvc.value.match(/[a-zA-Z]/)) {
    cvcMsg.textContent = 'Wrong format, numbers only';
    
    cvc.classList.add('red-border');
    return false;
  }
  else if (cvc.value.length === 0) {
    cvcMsg.textContent = 'Can\'t be blank';
    
    cvc.classList.add('red-border');
    return false;
  }
  else {
    return true;
  }
}
//


// COMPLETE STATE SCRIPT

const formClassElement = document.querySelector('.form');

const formCompleted =
  `
  <img id="complete-img" src="./images/icon-complete.svg" height="auto" alt="card logo">
  <h2 id="thank-you">THANK YOU!</h2>
  <p id="complete-msg">We've added your card details</p>
  <button>Continue</button>
`;
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if(validation()){
    formClassElement.innerHTML = formCompleted;
    formClassElement.style.marginLeft = '440px';
    formClassElement.style.paddingLeft = '0';
    formClassElement.style.paddingRight = '0';
    formClassElement.style.width = '30%';
  }
});
//


// CARD DETAILS UPDATE REAL-TIME

const nameCardText = document.getElementById('name-text');
const cardNumberCardText = document.getElementById('card-number-text');
const dateCardText = document.getElementById('date-text');
const cvcCardText = document.getElementById('cvc-text');


nameInput.addEventListener('keyup', (e) => {
  nameCardText.textContent = e.target.value.toUpperCase();

  if (e.target.value.length === 0) {
    nameCardText.textContent = 'JANE APPLESEED';
  }

});
cardNumber.addEventListener('keyup', (e) => {

  function getCardnoFormat(value) {
    const baseFormat = '0000 0000 0000 0000'
    const formattedCardno = value.concat(baseFormat.slice(value.length, baseFormat.length));
    return formattedCardno;
  }

  cardNumberCardText.textContent = getCardnoFormat(e.target.value);
  if (e.target.value.length === 0) {
    cardNumberCardText.textContent = '0000 0000 0000 0000';
  }

});
month.addEventListener('keyup', (e) => {

  function getDateFormat(value) {
    const baseFormat = '00/00';
    if (value.length === 1) {
      const formattedDate = '0'.concat(value.concat('/', baseFormat.slice(0, 2)));
      return formattedDate;
    }
    else {
      const formattedDate = value.concat('/', baseFormat.slice(0, 2));
      return formattedDate;
    }
  }

  dateCardText.textContent = getDateFormat(e.target.value);

  if (e.target.value.length === 0) {
    dateCardText.textContent = '00/00';
  }

});
year.addEventListener('keyup', (e) => {

  function getDateFormat(value) {
    const baseFormat = dateCardText.textContent;
    const formattedDate = baseFormat.slice(0,3).concat(value);
    return formattedDate;
  }

  dateCardText.textContent = getDateFormat(e.target.value);

  if (e.target.value.length === 0) {
    dateCardText.textContent = '00/00';
  }

});
cvc.addEventListener('keyup', (e) => {
  cvcCardText.textContent = e.target.value;

  if (e.target.value.length === 0) {
    cvcCardText.textContent = '000';
  }
});
//











