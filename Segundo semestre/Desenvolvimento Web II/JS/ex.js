
//Mexendo com data
const dataAtual = new Date();

//Dia atual
const dia = dataAtual.getDate()
console.log(`Hoje é dia ${dia}`)

//Mês atual
const mes = dataAtual.getMonth()+1;
console.log(`Estamos no mês ${mes}`)

//Ano atual
const ano = dataAtual.getFullYear();
console.log(`Estamos no ano de ${ano}`)

//Mexendo com dinheiro
const salario = 2490.60

console.log(salario.toFixed(2).replace('.', ',')) //toFixed apresentando duas casas decimais, enquanto o replace substitui para que possamos usar vírgula no lugar do ponto
console.log(salario.toLocaleString('pt-br', {
    style:'currency',
    currency: 'BRL'
}))

console.log(salario.toLocaleString('en-us', {
    style:'currency',
    currency: 'USD'
}))