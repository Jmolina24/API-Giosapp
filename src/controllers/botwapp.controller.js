import { queriesBotWapp, getConnectionBD } from '../database';


export const loginBootController = async (req, res) => {
    const { documento } = req.params;
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesBotWapp.login_boot_users, [documento], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            res.status(200).send(rows[0][0]);
            await pool.end();
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}







export const listServicioBotController = async (req, res) => {
    const { servicio } = req.params;
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesBotWapp.listar_servicio_boot, [servicio], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            res.status(200).send(rows[0]);
            await pool.end();
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }

}