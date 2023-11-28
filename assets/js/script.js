let valorNome = "";
let valorEmail = "";
let valorDuvida = "";

let form = document.querySelector('form');
let btnSubmit = document.querySelector('#enviarForm').addEventListener('click', verificacao);

function verificacao(event) {
    event.preventDefault(); 

    valorNome = document.getElementById("inputNome").value;
    valorEmail = document.getElementById("inputEmail").value;
    valorDuvida = document.getElementById("inputDuvida").value;

    if (valorNome !== "" && valorEmail !== "" && valorDuvida !== "") {
        atualizarDados();
    } else {
        alert("Preencha todos os campos do formulário!");
    }
}

function atualizarDados() {
    const mensagem = `Nome: ${valorNome}\nEmail: ${valorEmail}\nDúvida: ${valorDuvida}`;
    const confirmacao = confirm(`Os dados estão corretos?\n\n${mensagem}`);

    if (confirmacao) {
        alert("Dados enviados com sucesso!");
        form.submit();
    } else {
        alert("Corrija os dados, se necessário.");
    }
}


