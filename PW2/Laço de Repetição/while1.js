//Programa While tabuada 


// Importa o módulo readline
const readline = require('readline');

// Cria a interface de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta ao usuário qual número deseja ver a tabuada
rl.question("Digite o número que deseja a tabuada: ", function(nu) {

    // Converte o texto para número
    nu = Number(nu);

    // Declara a variável de controle do laço
    let i = 1;

    // Estrutura de repetição while
    while (i <= 10) {

        // Calcula a tabuada
        let tabu = nu * i;

        // Mostra o resultado
        console.log(nu + " x " + i + " = " + tabu);

        // Incrementa o contador (i++)
        i++;
    }

    // Fecha a interface
    rl.close();
});
