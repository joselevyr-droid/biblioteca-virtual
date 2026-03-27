let nomeUsuario = localStorage.getItem("nomeUsuario");
let emailUsuario = localStorage.getItem("email");
let avatarUsuario = localStorage.getItem("avatar");
if(nomeUsuario){
document.getElementById("nome-usuario-topo").textContent = nomeUsuario;
}
if(emailUsuario){
document.getElementById("email-usuario-topo").textContent = emailUsuario;
}
if(avatarUsuario){
document.getElementById("foto-usuario").src = avatarUsuario;
}