import express, { response } from 'express';
import productRouter from './products.js';
import streamsRouter from './streams.js';
import channelsRouter from './channels.js';

const server = express();
const PORT = 3000;

server.use(express.json());
server.use('/products/', productRouter);
server.use('/stream/', streamsRouter);
server.use('/canal/', channelsRouter);

server.get('/', (req, res) => { // req = requisicao, res = resposta
    console.log('Hello web');

    res.send('hello client!');
});

server.get('/html', (req, res) => { // req = requisicao, res = resposta
    console.log('Hello HTML web');

    res.send(
        '<div><h1>Titulo aqui :(</h1><text>Ola do HTML</text></div>'
    );
});

server.post('/echo', (req, res) => {
    console.log(req.body);
    res.send('ok');
});

server.get('/json', (req, res) => { // req = requisicao, res = resposta
    console.log('Hello JSON web');

    console.log(req.headers)

    const meuObj = {
        status: "ok",
        data: {
            username: "Gilbert",
            age: 22
        },
    };

    res.json(meuObj);
});

server.listen(PORT, () => { // 3000 == Porta, Funcao de callback
    console.log(`Estou pronto on port ${PORT}!!`);
});
