let botao = document.querySelector("#btnMostrar");
botao.addEventListener("click", mostrarValores);

function mostrarValores() {
    let pessoa = {};
        pessoa.nome = document.querySelector('#txtNome').value;
        pessoa.Altura = parseFloat(document.querySelector('#txtAltura').value);
        pessoa.Idade = parseInt(document.querySelector('#txtIdade').value);
        pessoa.DataNascimento = document.querySelector('#txtDataNascimento').value;
    
        
        let mensagem = 
        `<br/><br/>O nome digitado é <strong>  ${pessoa.nome} </strong> <br/>
        A Altura digitado é <strong> ${pessoa.Altura.toFixed(2)} </strong> <br/>
        A Idade digitado é <strong> ${pessoa.Idade} </strong> <br/>
        A Data de Nascimento digitado é <strong> ${pessoa.DataNascimento} </strong> <br/>` 
        
        let div = document.querySelector("#resultado");
        div.innerHTML = mensagem;
        
        
    }
        // /*let nome = prompt("Informe Nome:");
        // let altura = parseFloat(prompt("Informe Altura"));
        // let Idade = parseInt(prompt("Informe sua Idade"));
        // let dataNascimento = prompt(
            //     "Informe Data Nascimento (dd/MM/yyyy");
            //     Isso é inutil*/
            
            // let pessoa = {};
            // pessoa.nome = prompt("Informe Nome:");
            // pessoa.altura = parseFloat(prompt("Informe Altura"));
            // pessoa.Idade = parseInt(prompt("Informe sua Idade"));
            // pessoa.dataNascimento = prompt("Informe Data Nascimento (dd/MM/yyyy");
            // console.log(pessoa);
            // alert(
            //     `O nome digitado é  ${pessoa.nome}
            //     A Altura digitado é  ${pessoa.Altura.toFixed(2)}
            //     A Idade digitado é  ${pessoa.Idade}
            //     A Data de Nascimento digitado é  ${pessoa.DataNascimento}`
            // );