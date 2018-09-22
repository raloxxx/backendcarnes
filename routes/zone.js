var express = require('express');
var Zone = require('../models/zone');

var app = express();

app
    .get('/', (req, res) => {

        Zone.find({})
            .exec(
                (err, zonas) => {
                    if(err) {
                        res.status(500).json({
                            ok:false,
                            mensaje: 'Error cargando zonas',
                            errors: err
                        })
                    }

                    Zone.count({}, (err, conteo) => {

                        res.status(200).json({
                            ok: true,
                            zonas: zonas,
                            total: conteo
                        })
                    })
                }
            )
    })
    .post('/', (req, res) => {
        var body = req.body;

        var zone = new Zone({
            codigo: body.codigo,
            nombre: body.nombre
        });

        Zone.find({codigo: body.codigo}, (err, zona) => {
                if(err) {
                    res.status(500).json({
                        ok:false,
                        mensaje: 'Error cargando zonas',
                        errors: err
                    })
                }

                if(zona != ""){
                    return res.status(400).json({
                        ok: false,
                        mensaje: 'Esta zona ya ha sido registraa',
                        zona: zona
                    });
                } else {
                    zone.save((err, zonaRegistrada) => {

                        if(err) {
                            res.status(400).json({
                                ok: false,
                                mensaje: 'Error al crear zona',
                                errors: err
                            })
                        }
            
                        res.status(201).json({
                            ok: true,
                            zona: zonaRegistrada
                        })
                    })
                }

            }
        )
    })


    module.exports = app;