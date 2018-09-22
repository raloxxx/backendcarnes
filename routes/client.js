var express = require('express');
var Client = require('../models/client');

var app = express();

app
    .get('/', (req, res) => {

        Client.find({})
            .populate('zona', 'nombre')
            .exec(
                (err, clientes) => {
                    if(err){
                        res.status(500).json({
                            ok: false,
                            mensaje: 'Error cargando clientes',
                            errors: err
                        })
                    }

                    Client.count({}, (err, conteo) => {
                        
                        res.status(200).json({
                            ok: true,
                            clientes: clientes.map(
                                        (resp) => {
                                            return {
                                                nombre: resp.nombre,
                                                telefono: resp.telefono,
                                                codigo: resp.codigo,
                                                zona: resp.zona.nombre,
                                                direccion: resp.direccion
                                            }
                                        }
                                    ),
                            total: conteo
                        })
                    })
                }
            )
    })
    .post('/', (req, res) => {
        var body = req.body;

        console.log(req.body);

        var client = new Client({
            codigo: body.codigo,
            direccion: body.direccion ,
            nombre: body.nombre ,
            telefono: body.telefono ,
            zona: body.zona
        });

        Client.find({codigo: body.codigo}, (err, cliente) => {
                if(err) {
                    res.status(500).json({
                        ok:false,
                        mensaje: 'Error cargando clientes',
                        errors: err
                    })
                }

                if(cliente != ""){
                    return res.status(400).json({
                        ok: false,
                        mensaje: 'Este cliente ya ha sido registraa',
                        cliente: cliente
                    });
                } else {
                    client.save((err, clienteRegistrado) => {

                        if(err) {
                            res.status(400).json({
                                ok: false,
                                mensaje: 'Error al crear cliente',
                                errors: err
                            })
                        }
            
                        res.status(201).json({
                            ok: true,
                            cliente: clienteRegistrado
                        })
                    })
                }

            }
        )
    })

module.exports = app;