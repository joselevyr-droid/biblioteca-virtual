const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const senha = document.getElementById("senha");
const botaoSalvar = document.getElementById("salvar-dados");
email.value = localStorage.getItem("email") || "";
cpf.value = localStorage.getItem("cpf") || "";
senha.value = localStorage.getItem("senha") || "";
botaoSalvar.addEventListener("click", function(){
    localStorage.setItem("email", email.value);
    localStorage.setItem("cpf", cpf.value.replace(/\D/g, ""));
    localStorage.setItem("senha", senha.value);
    if(email.value.trim() !== "" && senha.value.trim() !== ""){
        localStorage.setItem("cadastroCompleto", "true");
    } else {
        localStorage.setItem("cadastroCompleto", "false");
    }
    alert("Dados salvos!");
});