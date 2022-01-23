const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const docentes = require('../json_data/docentes.json');


//MÉTODO GET
router.get('/', (req, res) => {
    res.json(docentes);
});

//MÉTODO POST
router.post('/', (req, res) => {
    const { nombres, apellidos, telefono, correo, fechaRegistro } = req.body;
    if (nombres && apellidos && telefono && correo && fechaRegistro) {
        const id = docentes.length + 1;
        const docenteNuevo = { ...req.body, id };
        docentes.push(docenteNuevo);
        res.json(docentes);
    } else {
        res.send('Faltan uno o más datos por ingresar')
    }
});

//MÉTODO PUT
router.put('/:id', (req, res) =>{
    const { id } = req.params;
    const { nombres, apellidos, telefono, correo, fechaRegistro } = req.body;
    if (nombres && apellidos && telefono && correo && fechaRegistro) {
        _.each(docentes, (dato, i) =>{
            if(dato.id == id) {
                dato.nombres = nombres;
                dato.apellidos = apellidos;
                dato.telefono = telefono;
                dato.correo = correo;
                dato.fechaRegistro = fechaRegistro;
            }
        });
        res.json(docentes)
    } else{
        res.send('Ha ocurrido un error')
    }
})

//MÉTODO DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(docentes, (dato, i) => {
        if(dato.id == id){
            docentes.splice(i, 1);
        }
    });
    res.send(docentes)
})
module.exports = router;