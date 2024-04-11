const Db = require('./Db');

//Criando database Users
const Users = Db.sequelize.define('users', {
    userName: Db.Sequelize.STRING,
    password: Db.Sequelize.STRING,
    profilePhoto: Db.Sequelize.STRING,
});

module.exports = Users;