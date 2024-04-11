const Express = require("express");
const app = Express();
const port = 8081;
const fs = require('fs');

// Trazendo módulo User para o app.js
const User = require('./models/User');

// Multer config
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => { // Define a função para gerar o nome do arquivo
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); // Gera um sufixo único para evitar colisões de nomes
        const fileName = file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname); // Gera o nome do arquivo usando o sufixo único e a extensão do arquivo original
        cb(null, fileName); // Chama o callback com o nome do arquivo gerado
    }
});

const upload = multer({ storage: storage });

// Body-Parser config
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// EJS config
app.set('view engine', 'ejs');
app.use(Express.static(path.join(__dirname, "public")));

// Server config
app.listen(port, () => {
    console.log(`Servidor rodando: http://localhost:${port}/`);
});

app.get("/", (requisicao, resposta) => {
    User.findAll().then((users) => {
        // Criando um array para armazenar os caminhos das imagens
        const userPhotos = users.map(user => "/"+user.userPhoto);

        resposta.render('./home/home.ejs', { users: users, userPhotos: userPhotos });

    }).catch((error) => {
        console.log("ERRO: " + error);
        resposta.status(500).send("Erro ao buscar usuários.");
    });
});

app.get('/userCad', (requisicao, resposta) => {
    resposta.render('./form/form.ejs')
});

app.post('/userCad', upload.single('profilePhoto'), async (requisicao, resposta) => {
    const imagePath = requisicao.file.filename;

    User.create({
        name: requisicao.body.firstName,
        lastName: requisicao.body.lastName,
        birthday: requisicao.body.dataNascimento,
        userPhoto: imagePath
    }).then(() => {
        console.log("ENVIADO");
        resposta.redirect('/');
    }).catch((error) => {
        console.log("ERRO: " + error);
        resposta.status(500).send("Erro ao criar usuário.");
    });
});

app.post('/delete/:id', (requisicao, resposta) => {
    const userId = requisicao.params.id;

    User.findByPk(userId).then((user)=>{
        //Verifica 
        if(!user){
            return resposta.status(404).send("Usuário não encontrado");
        }

        fs.unlink(`./public/uploads/${user.userPhoto}`, (error)=>{
            if(error){
                console.error("Erro ao excluir a imagem", error);
            }else{
                console.log("Imagemm excluída com sucesso");
            }
        });

        return user.destroy();
    }).then(()=>{
        resposta.redirect('/')
    }).catch((error)=>{
        console.error("Error ao exluir o usuário", error);
        resposta.status(500).send('Erro ao excluir usuário')
    });
});