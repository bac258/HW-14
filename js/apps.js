// * WRAPPER
let incrementBtn = document.querySelector(".cart .increment")
let result = document.querySelector(".cart .result")
let decrementBtn = document.querySelector(" .cart .decrement")

function incrementing () {
    if (result.value<5 ) {
        result.value = Number(result.value) + 1
    }

}
incrementBtn.addEventListener('click', incrementing)

function decrementing () {

    if (result.value>1) {
    result.value = Number(result.value) - 1
    }

}
decrementBtn.addEventListener( 'click', decrementing )

//* SLIDER
let rangeSlider = document.querySelector(".rangeSlider")
let output = document.querySelector(".slider .output")

rangeSlider.addEventListener ( 'input', () => {
    
    output.innerHTML = rangeSlider.value

})

//* random button
let randomBtn = document.querySelector(".randomBtn");
let colorize = document.querySelector("#colorize");

randomBtn.addEventListener("click", () => {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  colorize.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
// **** login
let passwordBtn = document.querySelector(".passwordBtn");
let userPassword = document.querySelector(".userPassword");

passwordBtn.addEventListener("click", () => {
  if (userPassword.type == "password") {
    userPassword.type = "text";
    passwordBtn.innerHTML = `<i class="bi bi-eye"></i>`;

  } else {
    userPassword.type = "password";
    passwordBtn.innerHTML = '<i class="bi bi-eye-slash"></i>';

  }
});