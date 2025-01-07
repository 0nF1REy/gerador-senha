let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");
let generateSound = document.querySelector("#generateSound");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!_-";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
    sizePassword.innerHTML = this.value;
};

function generatePassword() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
    buttonElement.textContent = "Gerar nova senha";

    generateSound.currentTime = 0;
    generateSound.play();
}

function copyPassword() {
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        generatePassword();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (parseInt(sliderElement.value) > parseInt(sliderElement.min)) {
            sliderElement.value = parseInt(sliderElement.value) - 1;
            sizePassword.innerHTML = sliderElement.value;
        }
    } else if (event.key === "ArrowRight") {
        event.preventDefault();
        if (parseInt(sliderElement.value) < parseInt(sliderElement.max)) {
            sliderElement.value = parseInt(sliderElement.value) + 1;
            sizePassword.innerHTML = sliderElement.value;
        }
    }
});

window.addEventListener('load', function () {
    sliderElement.focus();
});