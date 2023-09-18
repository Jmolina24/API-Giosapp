import { Router } from 'express';
import { loginBootController, listServicioBotController} from '../controllers/botwapp.controller';


const router = Router()



router.post('/login_boot', loginBootController);


router.get('/listar_servicio/:servicio',  listServicioBotController);











export default router;