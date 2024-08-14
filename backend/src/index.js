const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const https = require('https');
const fs = require('fs');

const app = express();

// Configuração dos certificados SSL/TLS
const options = {
    key: fs.readFileSync('/home/ubuntu/ssl/privkey.pem'),
    cert: fs.readFileSync('/home/ubuntu/ssl/fullchain.pem')
};

app.use(cors());
app.use(express.json());
app.use(routes);


// Criar o servidor HTTPS
https.createServer(options, app).listen(8243, () => {
    console.log('Servidor HTTPS iniciado na porta 8243');
});