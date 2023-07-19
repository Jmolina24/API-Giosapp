import { queriesAdmin, getConnectionBD } from '../database';
import mailer from '../middleware/sendMail';

export const roleStatusController = async (req, res) => {
    const { idrol, idusuarioregistra } = req.body;
    const { estado } = req.params;
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.activar_rol, [idrol, estado, idusuarioregistra], async function (err, rows, fields) {
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

export const useStatusController = async (req, res) => {
    const { idusuario, idusuarioregistra } = req.body;
    const { estado } = req.params;
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.activar_usuario, [idusuario, estado, idusuarioregistra], async function (err, rows, fields) {
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

export const terceroStatusController = async (req, res) => {
    const { idtercero, idusuarioregistra } = req.body;
    const { estado } = req.params;
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.activar_tercero, [idtercero, estado, idusuarioregistra], async function (err, rows, fields) {
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

export const motivoRechazoStatusController = async (req, res) => {
    const { idmotivorechazo, idusuarioregistra } = req.body;
    const { estado } = req.params;
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.activar_motivo_rechazo, [idmotivorechazo, estado, idusuarioregistra], async function (err, rows, fields) {
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

export const tipoOrdenStatusController = async (req, res) => {
    const { idtipoorden, idusuarioregistra } = req.body;
    const { estado } = req.params;
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.activar_tipoorden, [idtipoorden, estado, idusuarioregistra], async function (err, rows, fields) {
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

export const unidadMedidaStatusController = async (req, res) => {
    const { idunidad, idusuarioregistra } = req.body;
    const { estado } = req.params;
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.activar_unidad_medida, [idunidad, estado, idusuarioregistra], async function (err, rows, fields) {
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


export const servicioStatusController = async (req, res) => {
    const { idservicio, idusuarioregistra } = req.body;
    const { estado } = req.params;
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.activar_servicio, [idservicio, estado, idusuarioregistra], async function (err, rows, fields) {
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

export const ordenStatusController = async (req, res) => {
    const { idorden, idusuarioregistra } = req.body;
    const { estado } = req.params;
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.activar_orden, [idorden, estado, idusuarioregistra], async function (err, rows, fields) {
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


export const ordenDetalleStatusController = async (req, res) => {
    const { iddetalleorden, idusuarioregistra } = req.body;
    const { estado } = req.params;
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.activar_orden_detalle, [iddetalleorden, estado, idusuarioregistra], async function (err, rows, fields) {
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

export const tipoServicioStatusController = async (req, res) => {
    const { idtiposervicio, idusuarioregistra } = req.body;
    const { estado } = req.params;
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.activar_tiposervicio, [idtiposervicio, estado, idusuarioregistra], async function (err, rows, fields) {
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

export const tipoTerceroServicioStatusController = async (req, res) => {
    const { idterceroservicio, idusuarioregistra } = req.body;
    const { estado } = req.params;
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.activar_terceroservicio, [idterceroservicio, estado, idusuarioregistra], async function (err, rows, fields) {
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


export const asignaTerceroDetalleController = async (req, res) => {
    const { iddetalleorden, idterceroservicio, valor, idusuarioregistra } = req.body;
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.asgina_tercerodetalleorden, [iddetalleorden, idterceroservicio, valor, idusuarioregistra], async function (err, rows, fields) {
            if (err) { return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err }); }
            const result = rows[0][0];
            switch (result.codigo) {
                case 0:
                    const resultado = { codigo: result.codigo, mensaje: result.mensaje};
                    const notificacion = JSON.parse(result.notificacion);
                    console.log(notificacion);
                    const email = { to: notificacion.email,bcc: notificacion.email_copia, subject: notificacion.asunto }
                    let data = { email, notificacion, id: "2" }
                    mailer.SendMailElectronic(data);
                    res.status(200).send(resultado);
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

export const createRolController = async (req, res) => {
    const { idrol, nombre, menu, tipo, crear, editar, detalle, ver, modificarestado, idusuarioregistra } = req.body
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.admin_rol, [idrol, nombre, menu, tipo, crear, editar, detalle, ver, modificarestado, idusuarioregistra], async function (err, rows, fields) {
            if (err) {
                return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err });
            }
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
        await pool.end();
        res.status(500).send(error);
    }

};

export const createAdminController = async (req, res) => {
    const { idusuario, idrol, idclientesede, idtercero, idtipodocumento, documento, apellidos, nombre, direccion, telefono, email, login, clave, idusuarioregistra } = req.body
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.admin_usuario, [idusuario, idrol, idclientesede, idtercero, idtipodocumento, documento, apellidos, nombre, direccion, telefono, email, login, clave, idusuarioregistra], async function (err, rows, fields) {
            if (err) {
                return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err });
            }
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
        await pool.end();
        res.status(500).send(error);
    }

};

export const createAdminClienteController = async (req, res) => {
    const { idcliente, idtipodocumento, numerodocumento, razonsocial, idusuarioregistra } = req.body
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.admin_cliente, [idcliente, idtipodocumento, numerodocumento, razonsocial, idusuarioregistra], async function (err, rows, fields) {
            if (err) {
                return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err });
            }
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
        await pool.end();
        res.status(500).send(error);
    }

};

export const createAdminClienteSedeController = async (req, res) => {
    const { idclientesede, idcliente, idtiposede, idciudad, nombre, codigocosto, direccion, telefono, email, contacto, barrio, idusuarioregistra } = req.body
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.admin_clientesede, [idclientesede, idcliente, idtiposede, idciudad, nombre, codigocosto, direccion, telefono, email, contacto, barrio, idusuarioregistra], async function (err, rows, fields) {
            if (err) {
                return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err });
            }
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
        await pool.end();
        res.status(500).send(error);
    }

};


export const createAdminTerceroController = async (req, res) => {
    const { idtercero, idtipotercero, idciudad, idtipodocumento, documento, nombre, direccion, telefono, email, idusuarioregistra } = req.body
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.admin_tercero, [idtercero, idtipotercero, idciudad, idtipodocumento, documento, nombre, direccion, telefono, email, idusuarioregistra], async function (err, rows, fields) {
            if (err) {
                return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err });
            }
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
        await pool.end();
        res.status(500).send(error);
    }

};


export const createMotivoRechazoController = async (req, res) => {
    const { idmotivorechazo, nombre, idusuarioregistra } = req.body
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.admin_motivo_rechazo, [idmotivorechazo, nombre, idusuarioregistra], async function (err, rows, fields) {
            if (err) {
                return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err });
            }
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
        await pool.end();
        res.status(500).send(error);
    }
};


export const createTipoOrdenController = async (req, res) => {
    const { idtipoorden, nombre, idusuarioregistra } = req.body
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.admin_tipoorden, [idtipoorden, nombre, idusuarioregistra], async function (err, rows, fields) {
            if (err) {
                return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err });
            }
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
        await pool.end();
        res.status(500).send(error);
    }
};

export const createUnidadMedidaController = async (req, res) => {
    const { idunidad, nombre, prefijo, idusuarioregistra } = req.body
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.admin_unidad_medida, [idunidad, nombre, prefijo, idusuarioregistra], async function (err, rows, fields) {
            if (err) {
                return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err });
            }
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
        await pool.end();
        res.status(500).send(error);
    }
};


export const createServicioController = async (req, res) => {
    const { idservicio, idtiposervicio, idunidad, codigo, nombre, descripcion, idusuarioregistra } = req.body
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.admin_servicio, [idservicio, idtiposervicio, idunidad, codigo, nombre, descripcion, idusuarioregistra], async function (err, rows, fields) {
            if (err) {
                return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err });
            }
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
        await pool.end();
        res.status(500).send(error);
    }
};

export const createOrdenController = async (req, res) => {
    const { idorden, idtipoorden, idclientesede, fechaentrega, horaentrega, observacion, idusuarioregistra } = req.body
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.admin_orden, [idorden, idtipoorden, idclientesede, fechaentrega, horaentrega, observacion, idusuarioregistra], async function (err, rows, fields) {
            if (err) {
                return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err });
            }
            const result = rows[0][0];            
            switch (result.codigo) {
                case 0:
                    const notificacion = JSON.parse(result.notificacion);
                    const resultado = { codigo: result.codigo, mensaje: result.mensaje, idorden: result.idorden };
                    const email = { to: notificacion.email, bcc: notificacion.email_copia, subject: notificacion.asunto }
                    let data = { email, notificacion, id: "1" }
                    mailer.SendMailElectronic(data);
                    res.status(200).send(resultado);
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
        await pool.end();
        res.status(500).send(error);
    }
};

export const createOrdenDetalleController = async (req, res) => {
    const { iddetalleorden, idorden, idservicio, cantidad, referencia, observacion, idusuarioregistra } = req.body
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.admin_detalleorden, [iddetalleorden, idorden, idservicio, cantidad, referencia, observacion, idusuarioregistra], async function (err, rows, fields) {
            if (err) {
                return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err });
            }
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
        await pool.end();
        res.status(500).send(error);
    }
};

export const createTipoServicioController = async (req, res) => {
    const { idtiposervicio, codigo, nombre, idusuarioregistra } = req.body
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.admin_tiposervicio, [idtiposervicio, codigo, nombre, idusuarioregistra], async function (err, rows, fields) {
            if (err) {
                return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err });
            }
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
        await pool.end();
        res.status(500).send(error);
    }
};


export const createTerceroServicioController = async (req, res) => {
    const { idterceroservicio, idtercero, idservicio, idciudad, valor, porcentaje, idusuarioregistra } = req.body
    try {
        const pool = await getConnectionBD();
        pool.execute(queriesAdmin.admin_terceroservicio, [idterceroservicio, idtercero, idservicio, idciudad, valor, porcentaje, idusuarioregistra], async function (err, rows, fields) {
            if (err) {
                return res.status(511).send({ mensaje: "Error Query BD", codigo: "1", mensaje_bd: err });
            }
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
        await pool.end();
        res.status(500).send(error);
    }
};
