const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const estudiantes = require('../json_data/estudiantes.json');


//MÉTODO GET
router.get('/', (req, res) => {
    res.json(estudiantes);
});

//MÉTODO POST
router.post('/', (req, res) => {
    const { nombres, apellidos, telefono, correo, fechaRegistro, acudiente } = req.body;
    if (nombres && apellidos && telefono && correo && fechaRegistro && acudiente) {
        const id = estudiantes.length + 1;
        const estudianteNuevo = { ...req.body, id };
        estudiantes.push(estudianteNuevo);
        res.json(estudiantes);
    } else {
        res.send('Faltan uno o más datos por ingresar')
    }
});

//MÉTODO PUT
router.put('/:id', (req, res) =>{
    const { id } = req.params;
    const { nombres, apellidos, telefono, correo, fechaRegistro, acudiente } = req.body;
    if (nombres && apellidos && telefono && correo && fechaRegistro && acudiente) {
        _.each(estudiantes, (dato, i) =>{
            if(dato.id == id) {
                dato.nombres = nombres;
                dato.apellidos = apellidos;
                dato.telefono = telefono;
                dato.correo = correo;
                dato.fechaRegistro = fechaRegistro;
                dato.acudiente = acudiente;
            }
        });
        res.json(estudiantes)
    } else{
        res.send('Ha ocurrido un error')
    }
})

//MÉTODO DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(estudiantes, (dato, i) => {
        if(dato.id == id){
            estudiantes.splice(i, 1);
        }
    });
    res.send(estudiantes)
})
module.exports = router;