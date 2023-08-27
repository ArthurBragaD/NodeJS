const Sequelize = require('sequelize')

sequelize = new Sequelize ('AulaLivros','root','',{
    host: 'localhost',
    dialect:'mysql'
} )

module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize
}