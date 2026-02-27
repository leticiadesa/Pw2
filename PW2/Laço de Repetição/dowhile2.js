//Programa DoWhile fatorial

// Importa o módulo readline
const readline = require('readline');

// Cria a interface de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta o número ao usuário
rl.question("Apresente o número: ", function(n) {

    // Converte o valor para número
    n = Number(n);

    // Variável de controle 
    let i = 1;

    // Variável que armazenará o resultado da multiplicação
    let multi = 1;

    // Estrutura dowhile
    do {

        // Multiplica o valor atual de multi por i
        multi = multi * i;

        // Incrementa o contador
        i++;

    } while (i <= n);

    // Mostra o resultado final
    console.log("O fatorial é: " + multi);

    // Fecha o programa
    rl.close();
});
