const express = require('express');
const app = express();
const port = 3000;

// rota padrão ou raiz
app.get('/', (req, res) => {
  res.send('Deu certo, ok!');
});

// escutar a porta 3000
app.listen(port, () => {
  console.log(`Servidor rodando no endereço http://localhost:${port}`);
});
