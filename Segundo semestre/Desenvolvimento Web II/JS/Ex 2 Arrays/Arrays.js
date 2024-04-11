/* 
1 – Crie um vetor contendo os nomes de todos os estados brasileiros. Em seguida, exiba esse vetor na tela através de uma estrutura forEach. Os índices do vetor também devem ser exibidos. 

const estados = ["AC", "AL", "AP", "AM", "BA", "CE", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO", "DF"];

function printEstados (index, item){
    console.log(item,index);
};

estados.forEach(printEstados);
*/

/* 
2 – Crie um objeto literal para descrever você. Esse objeto deve ter no mínimo 5 chaves, por exemplo, nome, idade, cidade, hobby, música preferida. Em seguida, exiba as chaves e valores na tela. 


const pessoa = {
    nome: "Ezequiel das Dores Ferreira Filho",
    idade: 22,
    cidade: "Cajati",
    hobby: "Basketball",
    musicaPreferida: "Hellraiser",
};

console.log("\nNome: " + pessoa.nome + "\nIdade: " + pessoa.idade + "\nCidade: "+ pessoa.cidade + "\nHobby: " + pessoa.hobby + "\nMúsica Favorita: " + pessoa.musicaPreferida);

OU...

*/

/* 3 – Crie um array de objetos de filmes com no mínimo 3 filmes. Cada filme deve possuir no mínimo 4 chaves, por exemplo, título, gênero, ano e classificação de idade. Em seguida, exiba o array de objetos através de uma estrutura forEach. 

const Filmes = [
    {
        titulo: "Filme 1",
        genero: "Ação",
        ano: "2024",
        classificacao: "14"
    },
    {
        titulo: "Filme 2",
        genero: "Ação",
        ano: "2024",
        classificacao: "14"
    },
    {
        titulo: "Filme 3",
        genero: "Ação",
        ano: "2024",
        classificacao: "14"
    }
];

Filmes.forEach((Filmes, index) => {
    let print = 
    `${index} 
    Título: ${Filmes.titulo} 
    Gênero: ${Filmes.genero}
    Ano: ${Filmes.ano}
    Classificação: ${Filmes.classificacao}
    `;
    console.log(print);
});
*/
