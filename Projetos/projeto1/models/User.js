const db = require('./database/Db');

const User = db.sequelize.define('usuarios', {
    name: db.Sequelize.DataTypes.STRING,
    lastName: db.Sequelize.DataTypes.STRING,
    birthday: db.Sequelize.DataTypes.DATE,
    userPhoto: db.Sequelize.DataTypes.STRING
});

module.exports = User;