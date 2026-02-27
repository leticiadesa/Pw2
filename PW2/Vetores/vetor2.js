//Programa Vetor inverter A e B

// Importa o módulo readline
const readline = require('readline');

// Cria interface de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Tamanho do vetor
const TAM = 10;

// Cria os vetores
let a = [];
let b = [];

// Variável de controle
let i = 0;



// Função para ler o vetor A
function lerVetor() {

    if (i < TAM) {

        rl.question("Digite o " + (i + 1) + "º valor A: ", function(valor) {

            // Converte para número
            a[i] = Number(valor);

            // Copia para o vetor B
            b[i] = a[i];

            i++;

            // Continua lendo até completar 10 valores
            lerVetor();
        });

    } else {

        // Mostra o vetor B invertido
        process.stdout.write("B = [");

        // Começa do índice 9 (última posição)
        for (let j = TAM - 1; j >= 0; j--) {
            process.stdout.write(b[j] + " ");
        }

        console.log("]");

        rl.close();
    }
}

// Inicia a leitura
lerVetor();
