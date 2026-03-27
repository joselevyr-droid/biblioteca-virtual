function resetarDados(){
    if(confirm("Deseja apagar todos os dados do usuário e as listas de códigos premium?")){
        localStorage.removeItem("nomeUsuario");
        localStorage.removeItem("avatar");
        localStorage.removeItem("email");
        localStorage.removeItem("cpf");
        localStorage.removeItem("senha");
        localStorage.removeItem("cadastroCompleto");
        localStorage.removeItem("usuariosDevLevyr");
        localStorage.removeItem("usuariosLivro2"); 
        localStorage.removeItem("usuariosLivro3"); 
        location.reload();
    }
}