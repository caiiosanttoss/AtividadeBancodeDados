const mysql = require('mysql2');

// Configurações da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'seu_host',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'seu_banco_de_dados'
});

// Tentativa de conexão
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  
  console.log('Conexão bem-sucedida ao banco de dados!');
  
  // Execute consultas ou outras operações aqui, se necessário

  // Feche a conexão após as operações
  connection.end((err) => {
    if (err) {
      console.error('Erro ao fechar a conexão:', err);
      return;
    }
    console.log('Conexão fechada.');
  });
});