const cpfInput = document.getElementById("cpf");
cpfInput.addEventListener("input", function () {
    let valor = cpfInput.value;
    valor = valor.replace(/\D/g, "");
    valor = valor.substring(0, 11);
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    cpfInput.value = valor;
});