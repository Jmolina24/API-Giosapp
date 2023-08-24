const { verifyTokeAuth } = require('../middleware/tokeAuth');
import { Router } from 'express';
import { reporteServicioController } from '../controllers/report.controller';


const router = Router()


// reporte
router.get('/report-services', verifyTokeAuth, reporteServicioController);
// router.get('/report-services',  reporteServicioController);



export default router;