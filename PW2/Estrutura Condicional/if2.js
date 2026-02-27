// Programa media 

// Importa o módulo readline
const readline = require('readline');

// Cria a interface de entrada e saída
const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta a primeira nota
r2.question("Digite a primeira nota: ", function(nota1) {

    // Pergunta a segunda nota
    r2.question("Digite a segunda nota: ", function(nota2) {

        // Converte as notas do  texto para número
        nota1 = Number(nota1);
        nota2 = Number(nota2);

        // Calcula a média
        let media = (nota1 + nota2) / 2;

        // Mostra a média
        console.log("Média: " + media);

        // Estrutura condicional
        if (media < 3) {
            console.log("Reprovado!");

        } else if (media >= 6) {
            console.log("Aprovado!");

        } else {
            console.log("Exame!");
        }

        // Fecha o programa
        r2.close();
    });
});
