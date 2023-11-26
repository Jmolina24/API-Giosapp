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
                console.log(info);
                break;
            default:
                var htmlToSend = html;
        }

        let mailOptions = {
            from: `"Notificaciónes " ${config.mailUser}`,
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
                return info;
                
            }
        });
    });

}


module.exports = { SendMailElectronic }