 // If e else usando readline (usuario atribui as variaveis)

 // Programa ímpar ou par

 // Importa o módulo 'readline' do Node.js
 // Esse módulo permite ler dados digitados pelo usuário no terminal
const readline = require('readline');

 // Cria a interface de leitura
 // process.stdin  → entrada (teclado)
 // process.stdout → saída (terminal)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

 // Exibe a pergunta no terminal
 // O valor digitado é armazenado na variável 'numero'
rl.question("Digite um número: ", function(numero) {

    // O valor digitado vem como STRING (texto)
    // Convertendo para número usando Number()
    numero = Number(numero); // transforma em número

    if (numero % 2 === 0) {
        console.log("Número par");
    } else {
        console.log("Número ímpar");
    }

    // Fecha a interface e encerra o programa
    rl.close();
});
//
