const nomeUsuario = document.getElementById("nome-usuario");
const editarNome = document.getElementById("editar-nome");
let nomeSalvo = localStorage.getItem("nomeUsuario");
if(nomeSalvo){
    nomeUsuario.textContent = nomeSalvo;
}
editarNome.addEventListener("click", function(){
    let novoNome = prompt("Digite seu nome:");
    if(novoNome && novoNome.trim() !== ""){
        nomeUsuario.textContent = novoNome;
        localStorage.setItem("nomeUsuario", novoNome);
    }
});