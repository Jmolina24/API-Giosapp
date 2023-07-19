import { queriesOption, getConnectionBD } from '../database';

export const listRolController = async (req, res) => {
    const { id, estado } = req.query;
    console.log(Object.keys(req.query).length);
    if (req.query && Object.keys(req.query).length != 2) {
        return res.status(400).json({ codigo: "1", mensaje: 'Faltan los query params' });
    }
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesOption.listroles, [id,estado], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            res.status(200).send(rows[0]);
            await pool.end();
        })

    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }

}

export const listUserController = async (req, res) => {
    const { idusuario, numerodocumento, idcliente, idtercero } = req.query;
    if (req.query && Object.keys(req.query).length != 4) {
        return res.status(400).json({ codigo: "1", mensaje: 'Faltan los query params' });
    }
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesOption.listusuarios, [idusuario,numerodocumento,idcliente, idtercero ], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            res.status(200).send(rows[0]);
            await pool.end();
        })

    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

export const listTipoDocumentosController = async (req, res) => {
    const { idtipodocumento, sigla } = req.query;
    if (req.query && Object.keys(req.query).length != 2) {
        return res.status(400).json({ codigo: "1", mensaje: 'Faltan los query params' });
    }
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesOption.listtipoDocumentos, [idtipodocumento, sigla ], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            res.status(200).send(rows[0]);
            await pool.end();
        })

    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

export const listDepartamentosController = async (req, res) => {
    const { iddepartamento, codigodane } = req.query;
    if (req.query && Object.keys(req.query).length != 2) {
        return res.status(400).json({ codigo: "1", mensaje: 'Faltan los query params' });
    }
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesOption.listdepartarmentos, [iddepartamento, codigodane ], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            res.status(200).send(rows[0]);
            await pool.end();
        })

    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

export const listCiudadController = async (req, res) => {
    const { idciudad, iddepartamento, codigodane } = req.query;
    if (req.query && Object.keys(req.query).length != 3) {
        return res.status(400).json({ codigo: "1", mensaje: 'Faltan los query params' });
    }
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesOption.listciudades, [ idciudad, iddepartamento, codigodane ], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            res.status(200).send(rows[0]);
            await pool.end();
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

export const listClientesController = async (req, res) => {
    const { idcliente, numerodocumento } = req.query;
    if (req.query && Object.keys(req.query).length != 2) {
        return res.status(400).json({ codigo: "1", mensaje: 'Faltan los query params' });
    }
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesOption.listclientes, [ idcliente, numerodocumento ], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            res.status(200).send(rows[0]);
            await pool.end();
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

export const listClientesSedesController = async (req, res) => {
    const { idclientesede, idcliente, idciudad } = req.query;
    if (req.query && Object.keys(req.query).length != 3) {
        return res.status(400).json({ codigo: "1", mensaje: 'Faltan los query params' });
    }
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesOption.listclientesedes, [ idclientesede, idcliente, idciudad ], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            res.status(200).send(rows[0]);
            await pool.end();
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

export const listTerceroController = async (req, res) => {
    
    const { idtercero, numerodocumento, estado } = req.query;
    if (req.query && Object.keys(req.query).length != 3) {
        return res.status(400).json({ codigo: "1", mensaje: 'Faltan los query params' });
    }
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesOption.listartercero, [ idtercero, numerodocumento, estado ], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            console.log(rows);
            res.status(200).send(rows[0]);
            await pool.end();
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

export const listMotivoRechazoController = async (req, res) => {
    
    const { idmotivorechazo, estado } = req.query;
    if (req.query && Object.keys(req.query).length != 2) {
        return res.status(400).json({ codigo: "1", mensaje: 'Faltan los query params' });
    }
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesOption.listarmotivorechazo, [ idmotivorechazo, estado ], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            console.log(rows);
            res.status(200).send(rows[0]);
            await pool.end();
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

export const listTiposOrdenesController = async (req, res) => {
    
    const { idtipoorden, estado } = req.query;
    if (req.query && Object.keys(req.query).length != 2) {
        return res.status(400).json({ codigo: "1", mensaje: 'Faltan los query params' });
    }
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesOption.listartipoorden, [ idtipoorden, estado ], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            console.log(rows);
            res.status(200).send(rows[0]);
            await pool.end();
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

export const listTiposServiciosController = async (req, res) => {
    
    const { idtiposervicio, estado } = req.query;
    if (req.query && Object.keys(req.query).length != 2) {
        return res.status(400).json({ codigo: "1", mensaje: 'Faltan los query params' });
    }
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesOption.listartiposervicio, [ idtiposervicio, estado ], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            res.status(200).send(rows[0]);
            await pool.end();
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

export const listServiciosController = async (req, res) => {
    
    const { idservicio, estado } = req.query;
    if (req.query && Object.keys(req.query).length != 2) {
        return res.status(400).json({ codigo: "1", mensaje: 'Faltan los query params' });
    }
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesOption.listarservicio, [ idservicio, estado ], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            res.status(200).send(rows[0]);
            await pool.end();
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

export const listUnidadMedidaController = async (req, res) => {
    
    const { idunidad_medida, estado } = req.query;
    if (req.query && Object.keys(req.query).length != 2) {
        return res.status(400).json({ codigo: "1", mensaje: 'Faltan los query params' });
    }
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesOption.listarunidadmedida, [ idunidad_medida, estado ], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            res.status(200).send(rows[0]);
            await pool.end();
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

export const listTipoTercerosController = async (req, res) => {
    
    const { idtipotercero, estado } = req.query;
    if (req.query && Object.keys(req.query).length != 2) {
        return res.status(400).json({ codigo: "1", mensaje: 'Faltan los query params' });
    }
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesOption.listartipotercero, [ idtipotercero, estado ], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            res.status(200).send(rows[0]);
            await pool.end();
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

export const listTipoSedesController = async (req, res) => {
    
    const { idtiposede, estado } = req.query;
    if (req.query && Object.keys(req.query).length != 2) {
        return res.status(400).json({ codigo: "1", mensaje: 'Faltan los query params' });
    }
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesOption.listartiposede, [ idtiposede, estado ], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            res.status(200).send(rows[0]);
            await pool.end();
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

export const listOrdenesController = async (req, res) => {
    
    const { idorden, idcliente, idclientesede, estado } = req.query;
    if (req.query && Object.keys(req.query).length != 4) {
        return res.status(400).json({ codigo: "1", mensaje: 'Faltan los query params' });
    }
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesOption.listarorden, [ idorden, idcliente, idclientesede, estado ], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            res.status(200).send(rows[0]);
            await pool.end();
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

export const listOrdenesDetallesController = async (req, res) => {
    
    const { iddetalleorden, idorden, idcliente, idclientesede, idtercero, estado } = req.query;
    if (req.query && Object.keys(req.query).length != 6) {
        return res.status(400).json({ codigo: "1", mensaje: 'Faltan los query params' });
    }
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesOption.listadetalleorden, [ iddetalleorden, idorden, idcliente, idclientesede, idtercero, estado ], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            res.status(200).send(rows[0]);
            await pool.end();
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}


export const listDetallesSoportesOrdenesController = async (req, res) => {
    
    const { iddetalleordensoporte, iddetalleorden, estado } = req.query;
    if (req.query && Object.keys(req.query).length != 3) {
        return res.status(400).json({ codigo: "1", mensaje: 'Faltan los query params' });
    }
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesOption.listardetalleordensoporte, [ iddetalleordensoporte, iddetalleorden, estado ], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            res.status(200).send(rows[0]);
            await pool.end();
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}



export const listTerceroServiciosController = async (req, res) => {
    
    const { idterceroservicio, idtercero,idservicio,idciudad, estado } = req.query;
    if (req.query && Object.keys(req.query).length != 5) {
        return res.status(400).json({ codigo: "1", mensaje: 'Faltan los query params' });
    }
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesOption.listarterceroservicio, [ idterceroservicio, idtercero,idservicio,idciudad, estado ], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            res.status(200).send(rows[0]);
            await pool.end();
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}


export const listScoreController = async (req, res) => {
    
    const { idcliente , idclientesede ,idtercero } = req.query;
    if (req.query && Object.keys(req.query).length != 3) {
        return res.status(400).json({ codigo: "1", mensaje: 'Faltan los query params' });
    }
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesOption.listarscorehome, [ idcliente , idclientesede ,idtercero ], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            res.status(200).send(rows[0]);
            await pool.end();
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}



