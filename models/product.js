var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({
    codigo: {type: String, required: true},
    detalle: {type: String, required: true},
    precio_kilo_mayor: {type: String, required: true},
    precio_kilo_menor: {type: String, required: true},
    peso: {type: String, required: false}
});

module.exports = mongoose.model('Product', productSchema);