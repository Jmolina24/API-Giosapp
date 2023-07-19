const { verifyTokeAuth } = require('../middleware/tokeAuth');
const multer = require('multer');
import { Router } from 'express';
import { updateController, soporteOrdenDetalleController } from '../controllers/upload.controller';

const upload = multer({ dest: 'uploads/' });
const router = Router()


router.post('/files', verifyTokeAuth, upload.array('files'), updateController)


router.post('/soporteOrden', verifyTokeAuth, soporteOrdenDetalleController)





export default router;
