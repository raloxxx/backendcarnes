var express = require('express');
var fs = require('fs');
var PDFDocument = require('../class/PDFTables');

var doc = new PDFDocument;
var app = express();
console.log("holis")
app
    .get('/pdf', (req, res) => {

        doc.font('fonts/cac_champagne.ttf')
        doc.fontSize(50)
        doc.fillColor('red');
        doc.text("Carnes Maldonado S.A.C", 70, 40);


        doc.font('fonts/OpenSans-Bold.ttf')
        doc.fontSize(13)
        doc.fillColor('black');
        doc.text("Nombre: Alexis Eugenio Delgado Saniz", 70, 140)
        doc.text("Fecha: 22/09/18", 70, 160)
        doc.fontSize(20)
        doc.text("Nº 11111", 400, 160)
        doc.fontSize(10)
        const table1 = {
            headers: ['Cant.', 'Descripcion', 'P. Unit', 'Importe'],
            rows: [
                ['Switzerland', '12%', '+1.12%', '+1.12%'],
                ['', '', 'Total', "23.45"]
            ]
        };
        
        doc.moveDown().table(table1, 70, 250, { width: 440 });

        doc.moveDown();
        doc.font('fonts/pen.ttf')
        doc.fontSize(15)
        doc.fillColor('red');
        doc.text("Email: carnesmaldonado@gmail.com", 70,610);
        doc.text("Direccion: Jr. Ancash Nº 1051", 70, 630);
        doc.text("RUC: 20603473974", 70, 650);

        
        doc.text("Telefono: 082-572039", 400,610);
        doc.text("Movil: +51982798358", 400, 630);
        doc.text("+51970874084", 420, 650);


        doc.pipe(fs.createWriteStream('./pdfprueba/file.pdf'))  // write to PDF
        doc.pipe(res)  // HTTP response
        doc.end()
    })


module.exports = app;