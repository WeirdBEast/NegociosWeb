// Importar los modulos necesario para la aplicacion
const express = require('express');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app =express();

// Asignacion de atributos
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');
app.set('views',path.join(__dirname, './views'));
app.use('/', routes());
// Puerto
var puerto = 7000
app.listen(puerto,() =>
{
    console.log('servidor listo y escuchando')
});

