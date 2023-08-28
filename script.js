var nome = [];
var valor = [];

function salvarUser(){
    let nomeProduto = document.getElementById("produto").value;
    let valorProduto = document.getElementById("valor").value;
    if (nomeProduto) {
    nome.push(nomeProduto);
    valor.push(valorProduto);
    criarLista();
    document.getElementById("produto").value = '';
    document.getElementById("valor").value = '';
    }
}

function criarLista() {
    let table = document.getElementById("tabela").innerHTML = "<tr><th>Id</th><th>Produtos</th><th>Valor</th><th>Ações</th></tr>";

    for (let i = 0; i <= (nome.length - 1); i++) {

        table += "<tr><td>" + (i + 1) + "</td><td>" + nome[i] + "</td><td>" + valor[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'> Excluir </button> </td></tr>";

        document.getElementById('tabela').innerHTML = table;

    }
}

function editar(i){
document.getElementById('produto').value = nome[(i - 1)];
document.getElementById('valor').value = valor[(i - 1)];
nome.splice(nome[(i - 1), 1]);
valor.splice(valor[(i - 1), 1]);
}


function excluir(i){
nome.splice(i - 1, 1);
valor.splice(i - 1, 1);
document.getElementById("tabela").deleteRow(i);
}
