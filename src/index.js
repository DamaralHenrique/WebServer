import express, { response } from 'express';

const server = express();

server.get('/', (req, res) => { // req = requisicao, res = resposta
    console.log('Hello web');

    res.send('hello client!');
})

server.listen(3000, () => { // 3000 == Porta, Funcao de callback
    console.log('Estou pronto');
})
