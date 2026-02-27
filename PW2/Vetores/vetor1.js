//Programa Vetor media 

// Importa o módulo readline
const readline = require('readline');

// Cria interface de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Cria um array vazio para armazenar os valores
let a = [];

// Variável para controlar a posição do array
let i = 0;

// Variável para armazenar a soma
let soma = 0;

// Função para ler os valores um por um
function lerValores() {

    // Se ainda não chegou a 10 números
    if (i < 10) {

        // Pergunta o valor
        rl.question("Digite o " + (i + 1) + "º valor A: ", function(valor) {

            // Converte para número
            valor = Number(valor);

            // Armazena no array na posição i
            a[i] = valor;

            // Soma o valor digitado
            soma = soma + a[i];

            // Incrementa o contador
            i++;

            // Chama a função novamente (recursão)
            lerValores();
        });

    } else {

        // Quando terminar os 10 valores
        let media = soma / 10;

        console.log("O resultado da média é: " + media);

        // Fecha o programa
        rl.close();
    }
}

// Inicia o processo de leitura
lerValores();
