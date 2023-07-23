const { verifyTokeAuth } = require('../middleware/tokeAuth');
import { Router } from 'express';
import { listRolController, listUserController, listTipoDocumentosController, listDepartamentosController, listCiudadController, listClientesController,
    listClientesSedesController, listTerceroController, listMotivoRechazoController, listTiposOrdenesController, listTiposServiciosController, 
    listServiciosController, listUnidadMedidaController, listTipoTercerosController, listTipoSedesController, listOrdenesController, listOrdenesDetallesController, 
    listDetallesSoportesOrdenesController, 
    listTerceroServiciosController,
    listScoreController,
    listarscoreserviciosasignadosController} from '../controllers/option.controller';


const router = Router()


// activar o desactivar  rol
router.get('/list-roles', verifyTokeAuth, listRolController);

// activar o desactivar usuario
router.get('/list-usuarios', verifyTokeAuth, listUserController);

router.get('/list-tipodocumentos', verifyTokeAuth, listTipoDocumentosController);

router.get('/list-departamentos', verifyTokeAuth, listDepartamentosController);

router.get('/list-ciudades', verifyTokeAuth, listCiudadController);

router.get('/list-clientes', verifyTokeAuth, listClientesController);

router.get('/list-clientes-sedes', verifyTokeAuth, listClientesSedesController);

router.get('/list-terceros', verifyTokeAuth, listTerceroController);

router.get('/list-motivos', verifyTokeAuth, listMotivoRechazoController);

router.get('/list-tipo-ordenes', verifyTokeAuth, listTiposOrdenesController);

router.get('/list-tipo-servicios', verifyTokeAuth, listTiposServiciosController);

router.get('/list-servicios', verifyTokeAuth, listServiciosController);

router.get('/list-unidad-medidas', verifyTokeAuth, listUnidadMedidaController);

router.get('/list-tipo-terceros', verifyTokeAuth, listTipoTercerosController);

router.get('/list-tipo-sedes', verifyTokeAuth, listTipoSedesController);

router.get('/list-ordenes', verifyTokeAuth, listOrdenesController);

router.get('/list-ordenes-detalles', verifyTokeAuth, listOrdenesDetallesController);

router.get('/list-detalles-soportes', verifyTokeAuth, listDetallesSoportesOrdenesController);

router.get('/list-terceros-servicios', verifyTokeAuth, listTerceroServiciosController);


router.get('/list-score', verifyTokeAuth, listScoreController);

router.get('/list-score-app', verifyTokeAuth, listarscoreserviciosasignadosController);



export default router;