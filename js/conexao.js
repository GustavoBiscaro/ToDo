const mysql = require("mysql");

// Configurações da conexão com o banco de dados

const connection = mysql.createConnection({
    host: "localhost",
    user: "seu_usuario",
    password: "sua senha",
    database: "nome_do_banco_de_dados"
});

// Estabelece a conexão

connection.connect((e) => {
    if (error) {
        console.error("Erro ao conectar ao banco de dados: ", error);

    } else {
        console.log("Conexão bem-sucedida ao banco de dados!");
    }
});