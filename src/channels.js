import { Router } from 'express';

const router = new Router();

router.get('/:id', (req, res) => { // Get
    console.log(req.query.pageSize);
    console.log("Foi requsitado dados sobre o canal de ", req.params.id);
    res
        .status(200)
        .send(`Canal ID: ${req.params.id}`);
});

router.put('/:id', (req, res) => { // Alterar
    console.log("Foi requsitado alteracao do canal de ", req.params.id);
    res
        .status(200)
        .json(req.body);
});

router.post('/', (req, res) => { // Cadastrar
    console.log("Foi requsitado um novo cadastro de canal");
    res
        .status(200)
        .json(req.body);
});

router.delete('/:id', (req, res) => { // Apagar
    console.log("Foi requsitado o apagamento do canal de ", req.params.id);
    res
        .status(200)
        .json(req.body);
});

export default router;
