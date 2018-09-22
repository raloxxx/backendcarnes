'use strict'

import mongoose from 'mongoose';

var Schema = mongoose.Schema;


var sellerSchema = new Schema({
    codigo: {type: String, required: True},
    nombre: {type: String, required: True},
    telefono: {type: String, required: True}
});

module.exports = mongoose.model('Seller', sellerSchema);