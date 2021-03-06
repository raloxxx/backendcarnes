var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app =  express();

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, HEAD, GET, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Importar Rutas
var routerZone = require('./routes/zone');
var routerClient = require('./routes/client');
var routerProduct = require('./routes/product');
var routerSale = require('./routes/sale');


// Conexion a la base de datos

mongoose.connection.openUri('mongodb://carnesmaldonado:carnes_12345_12345@ds125453.mlab.com:25453/carnesmaldonadodb', (err, res) => {

    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');

});

// Rutas
app.use('/zone', routerZone);
app.use('/client', routerClient);
app.use('/product', routerProduct);
app.use('/sale', routerSale);




app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});

