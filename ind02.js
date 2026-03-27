let fundoSalvo = localStorage.getItem("fundo");

if (fundoSalvo) {
    document.body.style.backgroundImage = "url('" + fundoSalvo + "')";
}