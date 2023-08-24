import { queriesReportes, getConnectionBD } from '../database';
import excel from 'exceljs';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';


export const reporteServicioController = async (req, res) => {
    const { idcliente, idsedecliente, idservicio, estado, fechainicio, fechafin, tipo } = req.query;
    if (req.query && Object.keys(req.query).length != 7) {
        return res.status(400).json({ codigo: "1", mensaje: 'Faltan los query params' });
    }
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesReportes.reporte_servicio, [idcliente, idsedecliente, idservicio, estado, fechainicio, fechafin, tipo], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }

            const datos = rows[0];
            const workbook = new excel.Workbook();
            const worksheet = workbook.addWorksheet('Datos');
            // Agregar encabezados
            const headers = Object.keys(datos[0]);
            worksheet.addRow(headers);
            // Agregar los datos al archivo Excel
            datos.forEach(rowData => {
                const values = Object.values(rowData);
                worksheet.addRow(values);
            });
            
            const uuid = uuidv4();
            const excelFilePath = `${uuid}.xlsx`;
            workbook.xlsx.writeFile(excelFilePath)
                .then(() => {
                    console.log('Archivo Excel generado');
                    res.download(excelFilePath, (err) => {
                        if (err) {
                            console.error('Error al descargar el archivo:', err);
                        }
                        fs.unlinkSync(excelFilePath);
                    });
                })
                .catch(error => {
                    console.error('Error al generar el archivo Excel:', error);
                    res.status(500).send('Error interno del servidor');
                });
            // res.status(200).send(rows[0]);
            await pool.end();
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }

}



