const express = require('express');

const app = express();

const PORT = 80;

app.get('/', function(req, res) {
    res.send('<h1>Testando a página principal</h1>');
});

app.listen(PORT, function() {
    console.log('Servidor está funcionando na porta ' + PORT);
});
