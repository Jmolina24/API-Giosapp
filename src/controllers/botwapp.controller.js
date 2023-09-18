import { queriesBotWapp, getConnectionBD } from '../database';


export const loginBootController = async (req, res) => {
    const { documento } = req.body;
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesBotWapp.login_boot_users, [documento], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
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

export const listServicioBotController = async (req, res) => {
    const { servicio } = req.params
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesBotWapp.listar_servicio_boot, [servicio], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
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