const Db = require('./Db');
const Users = require('./User')

const Posts =  Db.sequelize.define('posts', {
    title: Db.Sequelize.STRING,
    content: Db.Sequelize.TEXT,
    postImg: Db.Sequelize.STRING
});

// Estabelecendo a relação entre Post e User
Posts.belongsTo(Users, {
    foreignKey: 'userId',
    onDelete: 'CASCADE', // Isso garante que, se um usuário for excluído, todas as postagens relacionadas a ele também serão excluídas
    onUpdate: 'CASCADE'
});

module.exports = Posts;