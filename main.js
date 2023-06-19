var form = document.getElementById('form-contato');
var linhas = '';
var contatos = [];
var numeros = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    var inputNomeContato = document.getElementById('nome-contato');
    var inputNumeroContato = document.getElementById('numero-contato');

    if(numeros.includes(inputNumeroContato.value)){
        alert(`O número ${inputNumeroContato.value} já foi inserido`);
    }else{
        contatos.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);
        var linha = '<tr>'
        linha += `<td> ${inputNomeContato.value} </td>`;
        linha +=  `<td> ${inputNumeroContato.value} </td>`;
        linha +=  `</tr>`;
        linhas += linha;
    }
    form.reset();
}

function atualizaTabela(){
    var corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}