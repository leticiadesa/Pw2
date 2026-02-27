 //Programa for tabuada 

// Primeiro laço (controla o primeiro número da multiplicação)
for (let i = 1; i <= 10; i++) {

    // Segundo laço (controla o segundo número da multiplicação)
    for (let n = 1; n <= 10; n++) {

        // Calcula o resultado da multiplicação
        let r = i * n;

        // Mostra o resultado no terminal
        console.log(i + " x " + n + " = " + r);
    }

    // Linha em branco para separar cada tabuada
    console.log("-------------------");
}
