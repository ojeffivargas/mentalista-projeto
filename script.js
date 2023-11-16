var numeroSecreto = parseInt(Math.random() * 1001) + 1
var tentativas = 10
console.log(numeroSecreto)

var jogar = prompt('Você aceita este desafio? Sim ou não?');
    if (jogar == 'sim') {                  
    

while(chute != numeroSecreto && tentativas > 0) {
       
    var chute = prompt('Teste sua sorte! Digite um número de 0 à 1000. Você tem 10 tentativas para concluir este desafio, seja consciente.')
        
        if (chute == numeroSecreto) {
            alert('Você acertou, parabéns! O numero era: ' + numeroSecreto) 
        } else if (chute > numeroSecreto) {
            alert('Errou... o número é menor. Restam ' + tentativas + ' tentativas.')
            tentativas-- 
        } else if (chute < numeroSecreto) {
            alert('Errou... o número é maior. Restam ' + tentativas + ' tentativas.')
            tentativas--  
        } 
        if (tentativas === 0) {
            alert('Suas tentativas acabaram, recarregue a página para recomeçar. O número secreto era '+ numeroSecreto + '!');
        }
    }    
} else {
        alert('Já imaginava que você não seria capaz de conlcuir o desafio.')
    }