const { Router } = require("express");
const nodemailer = require('nodemailer');
const { verifyTokeAuth } = require('../middleware/tokeAuth');
import config from '../config';
const router = Router();

router.get('/', (req, res) => {
  res.redirect('/api/v1/');
})

router.get('/api/v1/', (req, res) => {
  const data = {
    "Api": "Rest Api Giosapp",
    "Version": `${config.version}`,
    "Year": "2023",
    "Developer": "Desarrollado por Jair Molina",
    "URL": "https://www.instagram.com/jamolina24"
  }
  res.json(data);
})


router.post('/api/v1/send-email', verifyTokeAuth, (req, res) => {
  const { to_email, to_email_copia, to_asunto, notificacion } = req.body;
  const sendMail = nodemailer.createTransport({
    host: config.hostPass,
    port: config.portPass,
    secure: true,
    auth: { user: config.mailUser, pass: config.mailPass }
  });


  let mailOptions = {
    from: `"Notificación " ${config.mailUser}`,
    to: to_email,
    bcc: `${to_email_copia}`,
    subject: to_asunto,
    html: notificacion
  };


  try {
    sendMail.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        const mensaje_smtp = 'Error al enviar el correo : ' + error;
        res.status(400).json({ mensaje: error, mensaje_smtp, codigo: "1" })
      } else {
        const mensaje_smtp = 'El correo se envío correctamente : ' + info.response;
        res.status(200).json({ mensaje: 'Correo Enviado Correctamente', mensaje_smtp, codigo: "0" })
      }
    });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error de Servicios SMTP', codigo: "1" })
  }

})






module.exports = router;