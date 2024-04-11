//Trazendo a função express para a variável
const express = require("express");

//Configurando porta para acesso ao localhost
const port = 3000;

//Trazendo a função express para a variável app, dessa forma fica mais fácil entender que o app carrega as funções necessárias para o back-end
const app =  express();

/* Criando rota estática com método get */
app.get("/seja/bem/vindo", (requisicao, resposta) => {
    resposta.send("Você criou um link estático"); 
});

/* Criando rota dinâmica com get */
/* Note que os dois pontos após a barra definem o que é um parâmetro ou nn */
app.get("/:nome/:idade", (requisicao, resposta)=>{
    resposta.send(`Seu nome é ${requisicao.params.nome} e tem ${requisicao.params.idade} anos de idade`);
    /* Para chamar os parâmetros para dentro do nosso código é necessário usarmos o parâmetro da função criada 'requisicao' junto da função params, depois para especificar o item da função que queremos usar basta chamar o item depois da função 'params' */
});


/* Criando rota com get para apresentar um página HTML */
app.get("/", (requisicao, resposta)=>{
    resposta.sendFile(__dirname + "/pages/index.html");
    /* Utilizando o parâmetro 'resposta' para utilizarmos a função 'sendFile' e depois o parâmetro '__dirname' que nos tras o link da raiz do projeto que ao concatenar com o link do arquivo queremos apresentar na página */
});




//app trazendo o ouvinte do servidor na porta 3000, o app, operando com a função listen do express nos perimite acessar o localhost na porta solicitada
app.listen(port, () => {
    console.log(`
    Rodando ✅
    Link: http://localhost:${port}
    `);
});