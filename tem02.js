function trocarFundo(imagem) {
    document.body.style.backgroundImage = "url('" + imagem + "')";
    localStorage.setItem("fundo", imagem);
}
function removerFundo() {
    document.body.style.backgroundImage = "none";
    localStorage.removeItem("fundo");
}
let fundoSalvo = localStorage.getItem("fundo");
if (fundoSalvo) {
    document.body.style.backgroundImage = "url('" + fundoSalvo + "')";
}