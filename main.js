
// SIGN UP FORM 

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const loginFormContainer = document.getElementById('login-form-container');

signUpButton.addEventListener('click', () => 
loginFormContainer.classList.add('right-panel-active')
);

signInButton.addEventListener('click', () => 
loginFormContainer.classList.remove('right-panel-active')
);