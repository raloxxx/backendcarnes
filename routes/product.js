var express = require('express');
var Product = require('../models/product');

var app = express();

app
    .get('/', (req, res) => {

        Product.find({})
            .exec(
                (err, productos) => {
                    if(err){
                        res.status(500).json({
                            ok: false,
                            mensaje: 'Error cargando productos',
                            errors: err
                        })
                    }

                    Product.count({}, (err, conteo) => {
                        res.status(200).json({
                            ok: true,
                            productos: productos,
                            total: conteo
                        })
                    })
                }
            )
    })
    .get('/:id', (req, res) => {

        console.log("no llega pe")
        let id = req.params.id;
        Product.findById(id)
            .exec(
                (err, producto) => {
                    if(err){
                        res.status(500).json({
                            ok: false,
                            mensaje: 'Error cargando producto',
                            errors: err
                        })
                    }

                   
                    res.status(200).json({
                        ok: true,
                        producto: producto
                    })
                }
            )
    })
    .post('/', (req, res) => {
        var body = req.body;

        var product = new Product({
            codigo: body.codigo,
            detalle: body.detalle ,
            precio_kilo_mayor: body.precio_kilo_mayor,
            precio_kilo_menor: body.precio_kilo_menor,
            peso: body.peso 
        });

        Product.find({codigo: body.codigo}, (err, producto) => {
                if(err) {
                    res.status(500).json({
                        ok:false,
                        mensaje: 'Error cargando productos',
                        errors: err
                    })
                }

                if(producto != ""){
                    return res.status(400).json({
                        ok: false,
                        mensaje: 'Este producto ya ha sido registraa',
                        producto: producto
                    });
                } else {
                    product.save((err, productoRegistrado) => {

                        if(err) {
                            res.status(400).json({
                                ok: false,
                                mensaje: 'Error al crear producto',
                                errors: err
                            })
                        }
            
                        res.status(201).json({
                            ok: true,
                            producto: productoRegistrado
                        })
                    })
                }

            }
        )
    })


module.exports = app;