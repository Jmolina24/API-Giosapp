import { Router } from 'express';
import { loginBootController, listServicioBotController} from '../controllers/botwapp.controller';


const router = Router()



router.get('/login_boot/:documento', loginBootController);


router.get('/listar_servicio/:servicio',  listServicioBotController);











export default router;