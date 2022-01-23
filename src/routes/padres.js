const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const padres = require('../json_data/padres.json');


//MÉTODO GET
router.get('/', (req, res) => {
    res.json(padres);
});

//MÉTODO POST
router.post('/', (req, res) => {
    const { nombres, apellidos, telefono, correo, fechaRegistro, acudiente } = req.body;
    if (nombres && apellidos && telefono && correo && fechaRegistro && acudiente) {
        const id = padres.length + 1;
        const padreNuevo = { ...req.body, id };
        padres.push(padreNuevo);
        res.json(padres);
    } else {
        res.send('Faltan uno o más datos por ingresar')
    }
});

//MÉTODO PUT
router.put('/:id', (req, res) =>{
    const { id } = req.params;
    const { nombres, apellidos, telefono, correo, fechaRegistro, acudiente } = req.body;
    if (nombres && apellidos && telefono && correo && fechaRegistro && acudiente) {
        _.each(padres, (dato, i) =>{
            if(dato.id == id) {
                dato.nombres = nombres;
                dato.apellidos = apellidos;
                dato.telefono = telefono;
                dato.correo = correo;
                dato.fechaRegistro = fechaRegistro;
                dato.acudiente = acudiente;
            }
        });
        res.json(padres)
    } else{
        res.send('Ha ocurrido un error')
    }
})

//MÉTODO DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(padres, (dato, i) => {
        if(dato.id == id){
            padres.splice(i, 1);
        }
    });
    res.send(padres)
})
module.exports = router;