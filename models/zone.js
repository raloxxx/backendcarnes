var mongoose = require('mongoose');

var Schema  = mongoose.Schema;

var zoneSchema = new Schema({
    codigo: {type: String, required: true},
    nombre: {type: String, required: true}
});

module.exports = mongoose.model('Zone', zoneSchema);