import { getConnectionFTP } from '../database';
import { queriesUpload, getConnectionBD } from '../database';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export const updateController = async (req, res) => {
    const files = req.files;
    if (files.length == 0) {
        return res.status(400).json({ codigo: 1, mensaje: 'Se Debe Cargar los documentos necesarios' });
    }
    const ftp = await getConnectionFTP();
    // const currentDate = new Date();
    // const year = currentDate.getFullYear();
    // const month = currentDate.getMonth() + 1;
    // console.log(currentDate);
    // console.log(year);
    // console.log(month);
    // const remotePath = `/web/ftp_demo/OrdenesServicio/${year}/${month}`;
    ftp.on('ready', () => {
        console.log('Conectado al servidor FTP');
        const uploadFile = (file, callback) => {
            const extension = path.extname(file.originalname).toLowerCase();
            const uuid = uuidv4();
            const serverFilename = `${uuid}${extension}`;
            const readStream = fs.createReadStream(file.path);
            var remotoDirFTP = `/web/ftp_demo/OrdenesServicio/` + serverFilename;
            ftp.put(readStream, remotoDirFTP, (err) => {
                if (err) {
                    console.log('Error al subir el archivo', err);
                    callback(err);
                } else {
                    console.log(`Archivo ${serverFilename} subido con éxito`);
                    callback(null, {
                        fieldname: file.fieldname,
                        originalname: file.originalname,
                        encoding: file.encoding,
                        mimetype: file.mimetype,
                        destination: file.destination,
                        filename: serverFilename,
                        path: remotoDirFTP,
                        size: file.size
                    });
                }
                fs.unlinkSync(file.path); // eliminar archivo en uploads
            });
        };

        const uploadFiles = (files, callback) => {
            if (files.length === 0) {
                callback(null, []);
                return;
            }

            const file = files.shift();
            uploadFile(file, (err, data) => {
                if (err) {
                    callback(err);
                } else {
                    uploadFiles(files, (err, results) => {
                        if (err) {
                            callback(err);
                        } else {
                            results.unshift(data);
                            callback(null, results);
                        }
                    });
                }
            });
        };

        uploadFiles(files, (err, results) => {
            ftp.end();
            console.log('Desconectado del servidor FTP');
            if (err) {
                console.error(err);
                res.status(400).json({ codigo: 1, mensaje: 'Error al subir el archivo' });
            } else {
                res.status(200).json({ codigo: 0, mensaje: 'Archivos subidos con éxito', rutas: results });
            }
        });
    });

    ftp.on('error', (err) => {
        console.log('Error', err);
        res.status(400).json({ codigo: 1, mensaje: 'Error al subir el archivo' });
    });

};



export const soporteOrdenDetalleController = async (req, res) => {
    const { iddetalleordensoporte, soporte, idusuarioregistra } = req.body;
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesUpload.cargar_soporte_detalleorden, [iddetalleordensoporte, soporte, idusuarioregistra], async function (err, rows, fields) {
            if (err) { return res.status(511).send({mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            const result = rows[0][0];
            switch (result.codigo) {
                case 0:
                    res.status(200).send(result);
                    break;
                case 1:
                    res.status(400).send(result);
                    break;
                default:
                    console.log(result);
                    res.status(400).json({ mensaje: 'Error Conexion', codigo: "1" })
                    break;
            }
            await pool.end();
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}
