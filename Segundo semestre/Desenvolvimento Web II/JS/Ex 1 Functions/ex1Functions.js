/*
    Função simples
    1 – Crie uma função simples que exiba no console seu nome, sua idade e sua cidade. (Não esqueça de invocar a função no final).


    function userInfo() {
        let name = "Ezequiel";
        let age = 22;
        let city = "Cajati";

        console.log(`Nome: ${name} Idade: ${age} Cidade: ${city}`);
    };

    userInfo();
*/

/* 
    Função com parâmetros

    2 – Crie uma função que receba dois números como parâmetro em seguida faça a divisão entre eles. O resultado deve ser exibido no console concatenado com uma string. (Ex: “O resultado da divisão foi...”). A função deve ser chamada ao final passando dois números como argumento.

    function div(n1, n2) {
        let div = n1/n2;

        console.log(`O resultado da divisão de ${n1} por ${n2} é ${div}`);
    }

    div(5, 2);
*/

/* 
    Função com retorno

    3 – Crie uma função que receba três números e retorne a multiplicação entre esses números. O resultado deve ser exibido no console.


    function mult(n1, n2, n3) {
        let mult = n1 * n2 * n3;
        let res = `${n1} x ${n2} x ${n3} = ${mult}`;

        return res;
    };

    console.log(mult(5, 5, 5));
*/

/* 
    Função com mais de um retorno

    4 – Crie uma função que receba uma idade como parâmetro. Se a idade for >= 18, a função deve retornar o valor “Maior de idade”, se não deve retornar “Menor de idade”. O resultado deve ser exibido no console.


    function adult(age) {
        if (age >= 18){
            let res = `Você tem ${age}, então é maior de idade`;
            return res;
        }
        else {
            let res = `Você tem ${age}, então é menor de idade`;
            return res;
        }
    };

    console.log(adult(17));
*/

/* 
    Função anônima

    5 – Crie uma função anônima que receba duas notas como parâmetro. Se a média dessas notas for <=5, a função deve retornar o valor “Reprovado”, se não deve retornar o valor “Aprovado”.  O resultado deve ser exibido no console. Considere média = (nota1 + nota2) / 2.


    var media = function (n1, n2) {
        let media = (n1 + n2)/2;

        if (media <= 5){
            let res = `Sua nota foi ${media}, então você está reprovado`;
            return res;
        }
        else{
            let res = `Sua nota foi ${media}, então você está aprovado`;
            return res;
        }
    };

    console.log(media(6, 2));
*/

/* 
    Arrow function com parâmetro único

    6 – Crie uma arrow function que receba um número como parâmetro e retorne o triplo desse número. O resultado deve ser exibido no console concatenado com uma string. (Ex: “O triplo do número é...”)

    const triple = n1 => {
        let triple = n1 * 3;
        let res = `O triplo de ${n1} é ${triple}`;

        return res;
    }

    console.log(triple(3));
*/

/* 
    Arrow function com mais de um parâmetro

    7 – Crie uma arrow function que receba quatro números como parâmetro e retorne a soma entre esses números. O resultado deve ser impresso no console.

    const sum4 = (n1, n2, n3, n4) => {
        let sum4 = n1 + n2 + n3 + n4;
        let res = `${n1} + ${n2} + ${n3} + ${n4} = ${sum4}`;

        return res;
    }

    console.log(sum4(1,2,3,4));
*/

/* 
    IIFE

    8 – Crie uma função imediata que receba o nome de uma pessoa como parâmetro e exiba no console uma saudação a essa pessoa.


    ((name) => {
        console.log(name)
    })("Ezequiel");
*/