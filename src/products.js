import { Router } from 'express';

const router = new Router();

// GET /produtos/fisico?pageSize=30
router.get('/:tipo', (req, res) => { // Get
    console.log(req.query.pageSize);
    console.log(req.params.tipo);
    res
        .status(200)
        .json(req.body);
});

router.put('/:id', (req, res) => { // Alterar
    console.log(req.params.id);
    res
        .status(200)
        .json(req.body);
});

router.post('/', (req, res) => { // Cadastrar
    res
        .status(200)
        .json(req.body);
});

router.delete('/:id', (req, res) => { // Apagar
    console.log(req.params.id);
    res
        .status(200)
        .json(req.body);
});

export default router;
