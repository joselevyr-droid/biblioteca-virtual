const botoesPremium = document.querySelectorAll(".acessar-premium");
botoesPremium.forEach(function(botao){
    botao.addEventListener("click", function(){
        let livro = botao.dataset.livro; 
        let linkLivro = botao.dataset.link; 
        let listaUsuarios = JSON.parse(localStorage.getItem("usuarios" + livro) || "[]");
        let emailAtual = localStorage.getItem("email");
        let senhaAtual = localStorage.getItem("senha");
        let autorizado = listaUsuarios.some(u => u.email === emailAtual && u.senha === senhaAtual);
        if(autorizado){
            window.location.href = linkLivro;
            return;
        }
        if(localStorage.getItem("cadastroCompleto") !== "true"){
            if(confirm("Você precisa fazer login para acessar este livro.\n\nOK = Ir para login\nCancelar = Voltar")){
                window.location.href = "login.html";
            }
            return;
        }
        window.location.href = "pagamento.html";
    });
});