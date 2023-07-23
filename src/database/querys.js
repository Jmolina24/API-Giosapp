export const queriesLogin = {
    sign: 'call sp_login_users(?,?)',
};

export const queriesAdmin = {
    activar_rol: 'call sp_activar_rol(?,?,?)',
    activar_usuario: 'call sp_activar_usuario(?,?,?)',
    activar_tercero: 'call sp_activar_tercero(?,?,?)',
    activar_motivo_rechazo: 'call sp_activar_motivo_rechazo(?,?,?)',
    activar_tipoorden: 'call sp_activar_tipoorden(?,?,?)',
    activar_unidad_medida: 'call sp_activar_unidad_medida(?,?,?)',
    activar_servicio: 'call sp_activar_servicio(?,?,?)',
    activar_orden: 'call sp_actualizar_estado_orden(?,?,?)',
    activar_orden_detalle: 'call sp_actualizar_estado_detalleorden(?,?,?)',
    activar_tiposervicio: 'call sp_activar_tiposervicio(?,?,?)',
    activar_terceroservicio: 'call sp_activar_tercero_servicio(?,?,?)',
    
    
    
    admin_rol: 'call sp_admin_rol(?,?,?,?,?,?,?,?,?,?)',
    admin_usuario: 'call sp_admin_usuario(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    admin_cliente: 'call sp_admin_cliente(?,?,?,?,?)',
    admin_clientesede: 'call sp_admin_clientesede(?,?,?,?,?,?,?,?,?,?,?,?)',
    admin_tercero: 'call sp_admin_tercero(?,?,?,?,?,?,?,?,?,?)',
    admin_motivo_rechazo: 'call sp_admin_motivo_rechazo(?,?,?)',
    admin_tipoorden: 'call sp_admin_tipoorden(?,?,?)',
    admin_unidad_medida: 'call sp_admin_unidad_medida(?,?,?,?)',
    admin_servicio: 'call sp_admin_servicio(?,?,?,?,?,?,?)',

    admin_orden: 'call sp_admin_orden(?,?,?,?,?,?,?)',
    admin_detalleorden: 'call sp_admin_detalleorden(?,?,?,?,?,?,?)',
    admin_tiposervicio: 'call sp_admin_tiposervicio(?,?,?,?)',
    

    admin_terceroservicio: 'call sp_admin_tercero_servicio(?,?,?,?,?,?,?)',


    asgina_tercerodetalleorden: 'call sp_asigna_tercero_detalleorden(?,?,?,?)',
    
    
    

};


export const queriesOption = {
    listroles: 'call sp_listar_rol(?,?)',
    listusuarios: 'call sp_listar_usuario(?,?,?,?)',
    listtipoDocumentos: 'call sp_listar_tipodocumento(?,?)',
    listdepartarmentos: 'call sp_listar_departamento(?,?)',
    listciudades: 'call sp_listar_ciudad(?,?,?)',
    listclientes: 'call sp_listar_cliente(?,?)',
    listclientesedes: 'call sp_listar_clientesede(?,?,?)',
    listartercero: 'call sp_listar_tercero(?,?,?)',
    listarmotivorechazo: 'call sp_listar_motivo_rechazo(?,?)',
    listartipoorden: 'call sp_listar_tipoorden(?,?)',
    listartiposervicio: 'call sp_listar_tiposervicio(?,?)',
    listarservicio: 'call sp_listar_servicio(?,?)',
    listarunidadmedida: 'call sp_listar_unidad_medida(?,?)',
    listartipotercero: 'call sp_listar_tipotercero(?,?)',
    listartiposede: 'call sp_listar_tiposede(?,?)',
    listarorden: 'call sp_listar_orden(?,?,?,?)',
    listadetalleorden: 'call sp_listar_detalle_orden(?,?,?,?,?,?)',
    listardetalleordensoporte: 'call sp_listar_detalle_orden_soporte(?,?,?)',
    listarterceroservicio: 'call sp_listar_tercero_servicio(?,?,?,?,?)',
    listarscorehome: 'call sp_listar_score_home(?,?,?)',
    listarscoreserviciosasignados: 'call sp_listar_score_servicios_asignados (?,?,?)'
        
};

export const queriesUpload = {
    cargar_soporte_detalleorden: 'call sp_cargar_soporte_detalleorden(?,?,?)',
  
    
        
};


