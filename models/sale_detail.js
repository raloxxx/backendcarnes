'use strict'

import mongoose from mongoose;

var Schema = mongoose.Schema;

var saleDetailSchema = new Schema({
    precio: {type: String, required: True},
    peso: {type: String, required: True},
    venta: {
        type: Schema.Types.ObjectId,
        ref: Sale,
        required: [True, 'El codigo de venta es obligatorio']
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: Product,
        required: [True, 'El codigo de producto es obligatorio']
    }
});

module.exports = mongoose.model('SaleDetail', saleDetailSchema);