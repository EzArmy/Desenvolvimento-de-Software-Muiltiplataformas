//Database config
const Sequelize = require("sequelize");
//Conectando ao banco de dados
const sequelize = new Sequelize('projeto', 'root', '', {
    host:'localhost',
    dialect:'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};