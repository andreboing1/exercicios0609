function calculo(){
   

   var input = document.querySelector('#escolha');
   var op = input.value;

   op = parseInt(op);

    switch (op) {

        case 1:
        raiz()
        break;
        case 2:
        MaiorNumero();    
        break;
        case 3:
        ElevarBase();
        break;                    
        case 4:                          
        Soma();    
        break;                      
        case 5:        
        TransformarMaiuscula();         
        break;     
        default:        
        resultado.innerHTML = "Opção inválida,apenas números de 1 a 5"    
    }

}
function raiz() {
    var n1 = prompt('Digite o número para calcular a raiz quadrada:');
    n1 = parseFloat(n1);

    if (!isNaN(n1)) {
        var resultado = Math.sqrt(n1);
        alert('A raiz quadrada de ' + n1 + ' é ' + resultado.toFixed(2));
    } else {
        alert('Digite um número válido.');
    }
}
function MaiorNumero() {
    var numero1 = parseFloat(prompt('Digite o primeiro número:'));
    var numero2 = parseFloat(prompt('Digite o segundo número:'));

    if (!isNaN(numero1) && !isNaN(numero2)) {
        if (numero1 > numero2) {
            alert('O primeiro número (' + numero1 + ') é maior.');
        } else if (numero2 > numero1) {
            alert('O segundo número (' + numero2 + ') é maior.');
        } else {
            alert('Os números são iguais.');
        }
    } else {
        alert('Digite um número válido.');
    }
}

function ElevarBase(){
    var numero1 = parseFloat(prompt('Digite a base :'));
    var numero2 = parseFloat(prompt('Digite o expoente :'));
    resultado = (numero1 ** numero2 )
    alert('o resultado da potenciação é ' + resultado )
}


   function Soma(){
    var numero1 = parseFloat(prompt('Digite o primeiro número :'));
    var numero2 = parseFloat(prompt('Digite o segundo número:'));
    resultado = ( numero1 + numero2)
    alert('o resultado da soma é ' + resultado )

   }
   function TransformarMaiuscula() {
    var frase = prompt('Digite a frase que deseja transformar em maiúsculas:');
    
    if (frase) {
        var fraseMaiuscula = frase.toUpperCase();
        alert('Frase em maiúsculas: ' + fraseMaiuscula);
    } else {
        alert('Digite uma frase válida.');
    }
}




