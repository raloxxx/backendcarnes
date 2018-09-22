'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({
    codigo: {type: String, required: true},
    detalle: {type: String, required: true},
    precio_kilo: {type: String, required: true},
    peso: {type: String, required: true}
});

module.exports = mongoose.model('Product', productSchema);