// Programa Case dias do mês


// Importa o módulo readline
const readline = require('readline');

// Cria a interface de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta o mês ao usuário
rl.question("Digite o mês desejado (1 a 12): ", function(mes) {

    // Converte texto para número
    mes = Number(mes);

    // Estrutura de decisão switch
    switch (mes) {

        // Meses com 31 dias
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("O mês tem 31 dias");
            break; // Encerra o switch

        // Meses com 30 dias
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("O mês tem 30 dias");
            break;

        // Fevereiro
        case 2:
            console.log("O mês tem 28 dias");
            break;

        // Caso o número não esteja entre 1 e 12
        default:
            console.log("Número inválido");
    }

    // Encerra o programa
    rl.close();
});
