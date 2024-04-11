const Express = require('express');
const port = '8081';
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const app = Express();

//Sequelize module import
const Users = require('./modules/User');
const Posts = require('./modules/Post');

//Config Static path
app.use(Express.static('public'));

//Body-parser config
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

//Session create
app.use(session({
    secret: '1',
    resave: false,
    saveUninitialized: true
}));

// parse application/json
app.use(bodyParser.json())

//Multer config
const multer = require('multer');

//Configurando local de armazenamento das fotos de perfil
const profileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const userFolder = "./public/uploads/" + req.body.userName;

        //Caso o diretório do usuário não exista crie
        if (!fs.existsSync(userFolder)) {
            fs.mkdirSync(userFolder, { recursive: true });
        }

        cb(null, userFolder);
    },
    filename: (req, file, cb) => {

        const fileName = path.basename(file.originalname)

        cb(null, fileName);
    }
});

//Configurando local de armazenamento das imagens dos posts
const postStorage = multer.diskStorage({

    destination: (req, file, cb) => {

        const user = req.session.user;
        const userName = user.userName;

        const userFolder = "./public/uploads/" + userName;
        const postFolder = path.join(userFolder, "Posts");

        if (!fs.existsSync(postFolder)) {
            fs.mkdirSync(postFolder, { recursive: true });
        }

        cb(null, postFolder);
    },

    filename: (req, file, cb) => {
        const fileName = req.body.title + path.basename(file.originalname);
        cb(null, fileName)
    }
})

const profileUpload = multer({ storage: profileStorage });
const postUpload = multer({ storage: postStorage });

//Configurando EJS como view engine
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

//Drentro
//Tentando passar as postagens com id do usuário para a página home
app.get('/drentro', async (req, res) => {

    const userFinder = req.session.user;
    const userPosts = await Posts.findAll({where:{ userId: userFinder.id }});

    res.render('home.ejs', { 
        userFinder: userFinder,  
        userPosts: userPosts,
    });
});

//Rota principal LOGIN
app.get("/", (req, res) => {
    res.render('index.ejs');
});

//Validando usuário LOGIN
app.post('/login', async (req, res) => {
    const { userName, password } = req.body;

    //Consultando banco para identificar usuários
    const userFinder = await Users.findOne({ where: { userName: userName } });

    if (userFinder) {

        if (password == userFinder.password) {
            req.session.userId = userFinder.id;
            req.session.user = userFinder;
            res.redirect('/drentro');
        } else {
            console.log("Credenciais inválidas")
            return res.redirect('/')
        }
    } else {
        console.log("Usuário não encontrado");
        res.redirect('/')
    }
});

//Rota para cadastramento de usuários CADASTRAR 
app.get("/cadastrar", (req, res) => {
    res.render('cad.ejs');
});

//envio de dados para o banco
app.post("/cad", profileUpload.single('profilePhoto'), async (req, res) => {
    const { userName, password } = req.body;

    const profilePhoto = path.basename(req.file.filename);


    const newUser = await Users.create({
        userName: userName,
        password: password,
        profilePhoto: profilePhoto
    });

    res.json(newUser);
});

//Rota para página de criação de posts
app.get('/Post', (req, res) => {
    res.render('posts.ejs')
});

//Envio de dados para a tabela posts
app.post('/createPost', postUpload.single('postImg'), async (req, res) => {

    //Captura do id do usuário
    const userId = req.session.userId;

    //Capturando dados no formulário
    const { title, content } = req.body;
    const postImg = req.file.filename;

    const cadPost = await Posts.create({
        title: title,
        content: content,
        postImg: postImg,
        userId: userId
    });

    res.redirect('/drentro');
});