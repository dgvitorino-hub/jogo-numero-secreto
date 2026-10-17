alert ('Boa vindas ao jogo do Número Secreto!');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt (`Digite um número de 1 a ${numeroMaximo}:`);
    if (chute == numeroSecreto) {
        break; 
    } else {
        if (chute > numeroSecreto) {
            alert ('O número secreto é menor que seu chute!');
        } else {
            alert ('O número secreto é maior que seu chute!');
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`PARABÉNS! O número secreto era ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);
