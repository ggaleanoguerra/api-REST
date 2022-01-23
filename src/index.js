const express = require('express');
const req = require('express/lib/request');
const app = express();

//configuración del puerto del servidor
app.set('port', 3000);
app.set('json spaces', 2)

//middleware
app.use(express.json());

//rutas
app.use('/api/index', require('./routes/index'));
app.use('/api/docentes', require('./routes/docentes'));
app.use('/api/estudiantes', require('./routes/estudiantes'));
app.use('/api/padres', require('./routes/padres'));
app.use('/api/admin', require('./routes/admin'));

//inicio del servidor
app.listen(app.get('port'), () =>{
    console.log(`Servidor de la IE El Cocuelo, corriendo en el puerto ${app.get('port')}`)
})