//Programa DoWhile potencia

// Importa o módulo readline
const readline = require('readline');

// Cria a interface de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta a base
rl.question("Digite a base: ", function(base) {

    // Pergunta o expoente
    rl.question("Digite o expoente: ", function(expo) {

        // Converte os valores para número
        base = Number(base);
        expo = Number(expo);

        // Variável de controle 
        let i = 1;

        // Variável que armazenará o resultado da potência
        let pot = 1;

        // Estrutura de repetição dowhile
        do {

            // Multiplica o valor atual pelo valor da base
            pot = pot * base;

            // Incrementa o contador
            i = i + 1;

        } while (i <= expo);

        // Mostra o resultado final
        console.log("O resultado de " + base + "^" + expo + " = " + pot);

        // Fecha a interface
        rl.close();
    });
});
