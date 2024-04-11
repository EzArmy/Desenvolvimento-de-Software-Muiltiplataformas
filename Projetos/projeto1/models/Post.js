const db = require('./database/Db');


const Posts = db.sequelize.define('posts', {
    title: db.Sequelize.DataTypes.STRING(100),
    content: db.Sequelize.DataTypes.TEXT
})

module.exports = Posts;