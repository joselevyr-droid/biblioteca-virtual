function mostrarSenha() {
let input = document.getElementById("senha");
let olho = document.getElementById("olho");
if (input.type === "password") {
    input.type = "text";
    olho.textContent = "🙈";
} else {
    input.type = "password";
    olho.textContent = "👁️";
}
}