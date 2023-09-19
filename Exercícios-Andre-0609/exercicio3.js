function validaCampo() {
    var nome = document.getElementById('campoNome').value;
    var nota1 = parseFloat(document.getElementById('campoNota1').value);
    var nota2 = parseFloat(document.getElementById('campoNota2').value);
    var nota3 = parseFloat(document.getElementById('campoNota3').value);
    var nota4 = parseFloat(document.getElementById('campoNota4').value);

    if (nome === '') {
        document.getElementById('erro').innerHTML = 'Preencher o campo nome.';
        return false;
    }

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        document.getElementById('erro').innerHTML = 'Preencher todos os campos de notas com valores numéricos.';
        return false;
    }

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10) {
        document.getElementById('erro').innerHTML = 'Há uma inconsistência no cálculo da nota, favor verificar.';
        return false;
    }
    return true;
}
function calcularMedia() {
    if (validaCampo()) {
        var nota1 = parseFloat(document.getElementById('campoNota1').value);
        var nota2 = parseFloat(document.getElementById('campoNota2').value);
        var nota3 = parseFloat(document.getElementById('campoNota3').value);
        var nota4 = parseFloat(document.getElementById('campoNota4').value);

        var media = (nota1 + nota2 + nota3 + nota4) / 4;
        var situacao = document.getElementById('situacao');

        situacao.innerHTML = 'Média: ' + media.toFixed(2);

        if (media >= 7) {
            situacao.style.color = 'green';
            situacao.innerHTML += ' (APROVADO)';
        } else if (media >= 5 && media < 7) {
            situacao.style.color = 'orange';
            situacao.innerHTML += ' (EXAME)';
        } else {
            situacao.style.color = 'red';
            situacao.innerHTML += ' (REPROVADO)';
        }
    }
}

function clearFields() {
    document.getElementById('erro').innerHTML = '';
}