let botao = document.querySelector("#btnCalcular");
botao.addEventListener("click", mostrarValores);

function mostrarValores() {
    let pessoa = {};
    pessoa.nome = document.querySelector('#txtNome').value;
    pessoa.altura = parseFloat(document.querySelector('#txtAltura').value);
    pessoa.peso = parseFloat(document.querySelector('#txtPeso').value);

    function calcularIMC(peso, altura) {
        return peso / (altura * altura);
    }

    let imc = calcularIMC(pessoa.peso, pessoa.altura).toFixed(2);

    let mensagem = `<br><br>O IMC de ${pessoa.nome} é ${imc}`;

    let div = document.querySelector("#resultado");
    div.innerHTML = mensagem;
}