const nodemailer = require('nodemailer');
const templateMail = require('../json/templateMail.json');
import config from '../config';
var handlebars = require('handlebars');
var fs = require('fs');


const SendMailElectronic = (data) => {
    var readHTMLFile = function (path, callback) {
        fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
            if (err) {
                callback(err);
            }
            else {
                callback(null, html);
            }
        });
    };
    const sendMail = nodemailer.createTransport({
        host: config.hostPass,
        port: config.portPass,
        secure: true,
        auth: { user: config.mailUser, pass: config.mailPass }
    });


    let OptionsEmailTemplate = templateMail.find(({ id }) => id === data.id);

    readHTMLFile(OptionsEmailTemplate.path, function (err, html) {
        if (err) {
            console.log('error reading file', err);
            return;
        }
        switch (OptionsEmailTemplate.id) {
            case "1":
                var info = data.notificacion;
                // let resultado = '';
                // info.detalle_servicio.forEach(item => {
                //     resultado += `<li>  ${item.servicio} </li>`;
                // });
                // const res = resultado
                // console.log(res);
                var detalleServicio = info.detalle_servicio;
                // var template = handlebars.compile(html);
                var template = handlebars.compile(`<!DOCTYPE html> <html>  <head> <title>Orden de servicio</title> </head>
                <body>
                    <p><strong>👋 Hola, he generado una orden de servicio</strong></p>
                    <p><strong>ORD-${info.ordenid}</strong></p>
                    <p><strong>🗓️ ${info.fecha_hora_orden} ⏰ </strong></p>
                    <p><strong>Tipo de orden: ${info.tipo_orden}</strong></p>
                    <p><strong>Sede-Cliente: ${info.sede_cliente} </strong></p>
                    <p><strong>Dirección: ${info.direccion} </strong></p>
                    <p><strong>Contacto: ${info.contacto_cliente_sede}  </strong></p>
                    <p><strong>📝 Detalle Servicio</strong></p>
                    <ul>{{#each detalleServicio}}<li>{{this.servicio}}</li>{{/each}}</ul>
                    <p><strong>Usuario Registra:  ${info.usuario_registra} </strong></p>
                </body>                
                </html>`);
                // var replacements = {
                //     id_orden: info.ordenid,
                //     fecha_entrega: info.fecha_hora_orden,
                //     nombre_tipo_orden: info.tipo_orden,
                //     nombre_cliente_sede: info.sede_cliente,
                //     nombre_cliente: info.contacto,
                //     direccion_cliente_sede: info.direccion,
                //     contacto_cliente_sede: info.direccion,
                //     telefono_cliente_sede: info.direccion,
                //     nombre_usuario_registra: info.usuario_registra,
                //     detalle_Completo: res
                // };
                var context = { detalleServicio };
                var htmlToSend = template(context);
                // var htmlToSend = template(replacements);
                break;
            case "2":
                var info = data.notificacion;
                var detalleServicio = info.detalle_servicio;
                var template = handlebars.compile(`<!DOCTYPE html> <html> <head> <title>Asignación de Servicio</title> </head>
                <body>
                    <p><strong>👋 Hola, te he asignado un servicio para gestión</strong></p>
                    <p><strong>SER-${info.ordenid}</strong></p>
                    <p><strong>🗓️ ${info.fecha_hora_orden} ⏰ </strong></p>
                    <p><strong>Datos del Cliente</strong></p>
                    <p><strong>Sede-Cliente: ${info.sede_cliente}</strong></p>
                    <p><strong>Dirección: ${info.direccion}</strong></p>
                    <p><strong>Contacto:  ${info.contacto_cliente_sede} </strong></p>
                    <p><strong>📝 Detalle Servicio</strong></p>
                    <ul>{{#each detalleServicio}}<li>{{this.servicio}}</li>{{/each}}</ul>                
                    <p><strong>Usuario Registra: ${info.usuario_registra} </strong></p>
                </body>                
                </html>`);
                var context = { detalleServicio };
                var htmlToSend = template(context);
                break;
            case "4":
                var template = handlebars.compile(html);
                var replacements = { tiempo: data.tiempo, valor: data.valor, nombre_plan: data.nombre_plan, fecha_pago: data.fecha_pago, id_transaccion: data.id_transaccion };
                var htmlToSend = template(replacements);
                break;
            default:
                var htmlToSend = html;
        }

        let mailOptions = {
            from: `"Notificación Giosapp" ${config.mailUser}`,
            to: data.email.to,
            bcc: `${data.email.bcc};jairmolina51@gmail.com`,
            subject: data.email.subject,
            html: htmlToSend
        };

        sendMail.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('El correo se envío correctamente ' + info.response);
            }
        });
    });

}


module.exports = { SendMailElectronic }