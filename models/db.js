const Sequelize = require('sequelize');

const sequelize = new Sequelize("tasks","Wickjohn", "Jw123@!", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(function() {
        console.log("Conexão com o banco de dados realizada com sucesso!");
    })
    .catch(function(error) {
        console.log("Erro: Conexão com o banco de dados não realizada com sucesso!", error);
    });

module.exports = sequelize;
