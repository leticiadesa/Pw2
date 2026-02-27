// Programa Case placa

// Importa o módulo readline
const readline = require('readline');

// Cria a interface de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta ao usuário o último dígito da placa
rl.question("Informe o último dígito da sua placa: ", function(placa) {

    // Converter texto para número
    placa = Number(placa);

    // Estrutura de decisão switch
    switch (placa) {

        // Se for 1 ou 2 → Segunda-feira
        case 1:
        case 2:
            console.log("Segunda-feira");
            break; // Interrompe o switch

        // Se for 3 ou 4 → Terça-feira
        case 3:
        case 4:
            console.log("Terça-feira");
            break;

        // Se for 5 ou 6 → Quarta-feira
        case 5:
        case 6:
            console.log("Quarta-feira");
            break;

        // Se for 7 ou 8 → Quinta-feira
        case 7:
        case 8:
            console.log("Quinta-feira");
            break;

        // Se for 9 ou 0 → Sexta-feira
        case 9:
        case 0:
            console.log("Sexta-feira");
            break;

        // Caso o número não esteja entre 0 e 9
        default:
            console.log("Número inválido");
    }

    // Encerra o programa
    rl.close();
});
