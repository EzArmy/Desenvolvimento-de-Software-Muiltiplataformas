const Sequelize = require('sequelize');
const sequelize = new Sequelize('testando', 'root', '',{
    host:'localhost',
    dialect:'mysql'
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}