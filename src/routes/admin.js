const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const admin = require('../json_data/admin.json');
//MÉTODO GET
router.get('/', (req, res) => {
    res.json(admin);
});

//MÉTODO POST
router.post('/', (req, res) => {
    res.send('No se puede agregar un nuevo administrador del sistema')
 } 
);

//MÉTODO PUT
router.put('/:id', (req, res) =>{
    const { nombre, apellido, telefono, correo, fechaRegistro } = req.body;
    if (nombre && apellido && telefono && correo && fechaRegistro) {
        res.send('No se puede modificar el administrador')
    } else{
        res.send('Ha ocurrido un error')
    }
})
//MÉTODO DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(admin, (dato, i) => {
        if(dato.id == id){
            res.send('No se puede eliminar el administrador')
        }
        else{
            res.send('Ha ocurrido un error')
        }
    });
  
})

module.exports = router;