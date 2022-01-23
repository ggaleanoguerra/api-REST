const { Router } = require('express');
const router = Router();
const datos =  require('../json_data/index.json');


//rutas
router.get('/', (req, res) =>{
    res.json(datos)
})

module.exports = router;