if (localStorage.getItem("modo") === "dark") {
    document.body.classList.add("dark");
    document.getElementById("botaoModo").innerText = "Desativar Modo Noturno";
}
function alternarModo() {
    if (localStorage.getItem("modo") === "dark") {
        localStorage.removeItem("modo");
        document.body.classList.remove("dark");
        document.getElementById("botaoModo").innerText = "Ativar Modo Noturno";
    } else {
        localStorage.setItem("modo", "dark");
        document.body.classList.add("dark");
        document.getElementById("botaoModo").innerText = "Desativar Modo Noturno";
    }
}