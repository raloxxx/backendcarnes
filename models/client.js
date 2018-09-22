'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var clientSchema = new Schema({
    codigo: {type: String, required: true},
    direccion: {type: String, required: true},
    nombre: {type: String, required: true},
    telefono: {type: String, required: true},
    zona: {
        type: Schema.Types.ObjectId,
        ref: 'Zone',
        required: [true, 'El codigo de zona es obligatorio']
    }
});

module.exports = mongoose.model('Client', clientSchema);