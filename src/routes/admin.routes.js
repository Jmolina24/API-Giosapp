const { verifyTokeAuth } = require('../middleware/tokeAuth');
import { Router } from 'express';
import {
    roleStatusController, useStatusController, createRolController, createAdminController, createAdminClienteController,
    createAdminClienteSedeController, createAdminTerceroController, terceroStatusController, createMotivoRechazoController, createTipoOrdenController, createUnidadMedidaController, createServicioController, motivoRechazoStatusController, tipoOrdenStatusController, unidadMedidaStatusController, servicioStatusController, createOrdenController, createOrdenDetalleController, ordenStatusController, ordenDetalleStatusController, createTipoServicioController, tipoServicioStatusController, createTerceroServicioController, tipoTerceroServicioStatusController, asignaTerceroDetalleController
} from '../controllers/admin.controller';


const router = Router()


// activar o desactivar  rol
router.post('/role-status/:estado', verifyTokeAuth, roleStatusController);

// activar o desactivar usuario
router.post('/user-status/:estado', verifyTokeAuth, useStatusController);

// activar o desactivar tercero
router.post('/tercero-status/:estado', verifyTokeAuth, terceroStatusController);

router.post('/motivo-rechazo-status/:estado', verifyTokeAuth, motivoRechazoStatusController);

router.post('/tipo-orden-status/:estado', verifyTokeAuth, tipoOrdenStatusController);

router.post('/unidad-medida-status/:estado', verifyTokeAuth, unidadMedidaStatusController);

router.post('/servicio-status/:estado', verifyTokeAuth, servicioStatusController);

router.post('/orden-status/:estado', verifyTokeAuth, ordenStatusController);

router.post('/orden-detalle-status/:estado', verifyTokeAuth, ordenDetalleStatusController);

router.post('/tipo-servicio-status/:estado', verifyTokeAuth, tipoServicioStatusController);

router.post('/tercero-servicio-status/:estado', verifyTokeAuth, tipoTerceroServicioStatusController);




// Admin
router.post('/create-rol', verifyTokeAuth, createRolController);

router.post('/create-admin', verifyTokeAuth, createAdminController);

router.post('/create-customer', verifyTokeAuth, createAdminClienteController);

router.post('/create-customer-sede', verifyTokeAuth, createAdminClienteSedeController);

router.post('/create-tercero', verifyTokeAuth, createAdminTerceroController);

router.post('/create-motivo-rechazo', verifyTokeAuth, createMotivoRechazoController);

router.post('/create-tipo-orden', verifyTokeAuth, createTipoOrdenController);

router.post('/create-unidad-medida', verifyTokeAuth, createUnidadMedidaController);

router.post('/create-servicio', verifyTokeAuth, createServicioController);

router.post('/create-orden', verifyTokeAuth, createOrdenController);

router.post('/create-orden-detalle', verifyTokeAuth, createOrdenDetalleController);

router.post('/create-tipo-servicio', verifyTokeAuth, createTipoServicioController);

router.post('/create-tercero-servicio', verifyTokeAuth, createTerceroServicioController);


router.post('/asigna-tercero-orden', verifyTokeAuth, asignaTerceroDetalleController);











export default router;