const botaoCode = document.getElementById("botao-code");
botaoCode.addEventListener("click", function() {
    const codigo = document.getElementById("code-input").value;
    const emailAtual = localStorage.getItem("email");
    const senhaAtual = localStorage.getItem("senha");
    if(codigo === "DevLevyr"){
        localStorage.setItem("codigoDevLevyr", "true");
        let listaUsuarios = JSON.parse(localStorage.getItem("usuariosDevLevyr") || "[]");
        let existe = listaUsuarios.some(u => u.email === emailAtual && u.senha === senhaAtual);
        if(!existe){
            listaUsuarios.push({email: emailAtual, senha: senhaAtual});
            localStorage.setItem("usuariosDevLevyr", JSON.stringify(listaUsuarios));
        }
        alert("Código aceito!");
        window.location.href = "index.html";
    } else if(codigo.toLowerCase() === "reset") {
        localStorage.removeItem("usuariosDevLevyr");
        localStorage.removeItem("codigoDevLevyr");
        alert("Lista de DevLevyr resetada!");
    } else {
        alert("Código inválido.");
    }
});
document.getElementById("code-input").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        botaoCode.click();
    }
});
    localStorage.setItem("usuarios" + codigo, JSON.stringify(listaUsuarios));