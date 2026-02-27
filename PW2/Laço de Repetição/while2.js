//Programa While anos bissextos

// Importa o módulo readline
const readline = require('readline');

// Cria a interface de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta o ano inicial
rl.question("Digite o ano inicial: ", function(anoInicial) {

    // Pergunta o ano final
    rl.question("Digite o ano final: ", function(anoFinal) {

        // Converte os valores digitados para número
        anoInicial = Number(anoInicial);
        anoFinal = Number(anoFinal);

        console.log("Anos bissextos entre " + anoInicial + " e " + anoFinal + ":");

        // Estrutura de repetição while
        while (anoInicial <= anoFinal) {

            // Verifica se o ano é divisível por 4
            // Se o resto da divisão por 4 for 0 → é considerado bissexto
            if (anoInicial % 4 === 0) {
                console.log(anoInicial);
            }

            // Incrementa o ano
            anoInicial++;
        }

        // Fecha o programa
        rl.close();
    });
});
