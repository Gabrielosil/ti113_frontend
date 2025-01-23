/*let nome = prompt("Informe Nome:");
let altura = parseFloat(prompt("Informe Altura"));
let Idade = parseInt(prompt("Informe sua Idade"));
let dataNascimento = prompt(
    "Informe Data Nascimento (dd/MM/yyyy");
    Isso é inutil*/

    let pessoa = {};
    pessoa.nome = prompt("Informe Nome:");
    pessoa.altura = parseFloat(prompt("Informe Altura"));
    pessoa.Idade = parseInt(prompt("Informe sua Idade"));
    pessoa.dataNascimento = prompt("Informe Data Nascimento (dd/MM/yyyy");
    
    console.log(pessoa)
    alert(
        `O nome digitado é  ${pessoa.nome}
        A Altura digitado é  ${pessoa.altura.toFixed(2)}
        A Idade digitado é  ${pessoa.Idade}
        A Data de Nascimento digitado é  ${pessoa.dataNascimento}`
    );