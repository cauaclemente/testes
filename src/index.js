import express, { Request, Response } from "express";
import bodyParser from "body-parser";
const cors = require('cors');


const app = express();
app.use(cors())

const PORT = process.env.PORT || 4001;

app.use(bodyParser.json());

app.post('/bitrix24-handler', (req, res) => {
    
    const token = req.body.token;
    if (!token) {
        return res.status(400).json({ error: 'Token de autenticação não encontrado na requisição.' });
    }

    console.log('Token recebido do Bitrix24:', token);

    res.status(200).send('Token recebido com sucesso.');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
