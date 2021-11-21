(() => {
  let inputMailEl = document.querySelector(".input_validation__mail"),
  inputPassEl = document.querySelector(".input_validation__pass"),
  buttonLoginEl = document.querySelector(".Button_validation__login"),
  containerEl = document.querySelector(".container"),
  errorsEL = document.querySelector(".errors"),
  formEl = document.querySelector('.form');

function validate(rules = [VALIDATION_RULES.REQUIRED]) {
  return e => {
  const { value } = e.target;
  if (rules.includes(VALIDATION_RULES.REQUIRED) && !value) {
  e.target.classList.add('error');
  } 
  if (rules.includes(VALIDATION_RULES.EMAIL) && !isEmail(value)) {
  e.target.classList.add('error');
  } 
}
}

inputMailEl.addEventListener('blur', validate([VALIDATION_RULES.EMAIL, VALIDATION_RULES.REQUIRED]));
inputPassEl.addEventListener('blur', validate());

formEl.addEventListener('submit', e => {
  e.preventDefault();
  const login = inputMailEl.value;
  password = inputPassEl.value;
if (checkLogin(login, password)) {
 const greetingEl = document.createElement('span');
 greetingEl.innerText = 'yeah';
formEl.parentElement.append(greetingEl);
formEl.remove();
return;
}
const errorsEL = document.getElementById('login-error') || document.createElement('span');
errorsEL .innerText = 'Error';
 if (!errorsEL.id) {
errorsEL.id = 'login-error';
 }
 formEl.append(errorsEL);
})

})()























  // if (!inputMailEl.value.includes("@") || !inputMailEl.value.includes(".")) {
  //   // не email
  //   inputMailEl.classList.add("error");
  //   inputMailEl.focus();
  //   textPhfEL.innerHTML = "Пожалуйста, введите правильный email.";
  // }
  // if (!inputPassEl.value.includes("1")) {
  //   // не email
  //   // показать ошибку
  //   inputPassEl.classList.add("error");
  //   // ...и вернуть фокус обратно
  // if (inputPassEl.value !== inputPassEl.value.includes("1")) {
  //     inputPassEl.focus();
  //     textPhfEL.innerHTML = "Пожалуйста, введите правильный pass.";
  //   }
  // } else {
  //   inputMailEl.classList.remove("error");
  //   textPhfEL.innerHTML = "";
  //   buttonLoginEl.disabled = false;
  // }
  // console.log("CLICK");


// if (inputMailEl.value !== '' || inputPassEl !== '') {
//   buttonLoginEl.disabled = true;
//   console.log('click');
// }

// containerEl.addEventListener('click', () => {

// inputMailEl.onblur = function validation () {
//   buttonLoginEl.disabled = true

//   if (!inputMailEl.value.includes('@') || !inputMailEl.value.includes('.')) { // не email
//     // показать ошибку
//     inputMailEl.classList.add("error");

//     // ...и вернуть фокус обратно
//     inputMailEl.focus();

//   } else {
//     inputMailEl.classList.remove("error");

//   }
// };

// inputPassEl.onblur = function() {
//   buttonLoginEl.disabled = true
//   if (!inputPassEl.value.includes('1')) { // не email
//     // показать ошибку
//     inputPassEl.classList.add("error");
//     // ...и вернуть фокус обратно
//     inputPassEl.focus();
//   } else {
//     inputPassEl.classList.remove("error");
//     buttonLoginEl.disabled = false
//   }

// };
// console.log('click')

// })
