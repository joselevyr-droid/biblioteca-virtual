window.onload = function() {
    window.scrollTo(0, 0);
};
let fundoSalvo = localStorage.getItem("fundo");
if(fundoSalvo){
    document.body.style.backgroundImage = "url('" + fundoSalvo + "')";
}
if(localStorage.getItem("modo") === "dark"){
    document.body.classList.add("dark");
}