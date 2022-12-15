const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const emailError = document.querySelector(".error");
const phoneNumber = document.querySelector('#phoneNumber');

const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const createBtn = document.querySelector('#createBtn');

var allFields = (firstName.value.length > 0 &&
                 lastName.value.length > 0 &&
                 email.value.length > 0 && 
                 phoneNumber.value.length > 0 &&
                 password.value.length > 0 &&
                 confirmPassword.value.length > 0);

confirmPassword.addEventListener("keyup", () => {
    if(password.value !== confirmPassword.value){
        confirmPassword.style.backgroundColor = "red";
    }else{
        confirmPassword.style.backgroundColor = "green";
    };

});

createBtn.addEventListener("click", () => {
    if(password.value.length > 1){
        if(password.value !== confirmPassword.value ? alert("The passwords does not match!") : alert("Login"));
    }
    
})

email.addEventListener("input", (event) => {
  
    if (email.validity.valid) {

      emailError.textContent = ""; 
      emailError.className = "error"; 
    } else {
      showError();
    }
  });
  
  function showError() {
    if (email.validity.valueMissing) {
      emailError.textContent = "You need to enter an e-mail address.";
    } else if (email.validity.typeMismatch) {
      emailError.textContent = "Entered value needs to be an e-mail address.";
    } else if (email.validity.tooShort) {

      emailError.textContent = `E-mail should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
  
    // Set the styling appropriately
    emailError.className = "wrongInput";
  }

