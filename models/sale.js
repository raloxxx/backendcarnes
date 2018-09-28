'use strict'

import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var saleSchema = new Schema({
    fecha_venta: {type: String, required: True},
    Total: {type: String, required},
    cliente: {
        type: Schema.Types.ObjectId,
        ref: Client,
        required: [True, "EL codigo de cliente es necesario"]
    },
    vendedor: {
        type: Schema.Types.ObjectId,
        ref: Seller,
        required: [True, "EL codigo de vendedor es necesario"]
    }
});

module.exports = mongoose.model('Sale', saleSchema);